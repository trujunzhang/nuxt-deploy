import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:ieatta/common/langs/l10n.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/core/utils/cloudinary_utils.dart';
import 'package:ieatta/src/appModels/models/Users.dart';
import 'package:ieatta/util/app_navigator.dart';
import 'package:ieatta/util/toast_utils.dart';

class CameraUploadingPanel extends StatefulWidget {
  final String imagePath;
  final ParseModelUsers loggedUser;

  CameraUploadingPanel({Key? key, required this.imagePath, required this.loggedUser}) : super(key: key);

  @override
  _CameraUploadingPanelState createState() => _CameraUploadingPanelState();
}

class _CameraUploadingPanelState extends State<CameraUploadingPanel> {
  uploadImageAsUserPhotoUrl() async {
    var originalUrl;
    try {
      originalUrl = await CloudinaryUtils.uploadToCloudinary(imagePath: widget.imagePath);
    } catch (e) {}
    if (originalUrl == null) {
      Toast.show(S.of(context).toastForSaveFailure);
      // Navigate
      AppNavigator.goBack(context);
      return;
    }

    // Update Firebase's user model.
    ParseModelUsers nextModel = ParseModelUsers.updateUserPhoto(
      model: widget.loggedUser,
      originalUrl: originalUrl,
    );
    await FirestoreDatabase().updateUser(nextModel);

    // Update Firebase's user's name.
    User? user = FirebaseAuth.instance.currentUser;
    await user!.updatePhotoURL(originalUrl);

    Toast.show(S.of(context).toastForSaveSuccess);
    // Navigate
    AppNavigator.goBackWithParams(context, nextModel.originalUrl);
  }

  @override
  void initState() {
    super.initState();

    uploadImageAsUserPhotoUrl();
  }

  @override
  Widget build(BuildContext context) {
    var flatButton = TextButton(
        child: Text(
          S.of(context).photosUploading,
          style: TextStyle(
            color: Color(0xff0073bb),
          ),
        ),
        onPressed: () async {});
    return Container(
      color: Colors.white,
      child: Center(child: flatButton),
    );
  }
}
