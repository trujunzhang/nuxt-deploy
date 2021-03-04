import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:ieatta/app/app_localizations.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/core/utils/cloudinary_utils.dart';
import 'package:ieatta/src/appModels/models/Users.dart';
import 'package:ieatta/src/utils/toast.dart';

class CameraUploadingPanel extends StatefulWidget {
  final String imagePath;
  final ParseModelUsers loggedUser;

  CameraUploadingPanel(
      {Key key, @required this.imagePath, @required this.loggedUser})
      : super(key: key);

  @override
  _CameraUploadingPanelState createState() => _CameraUploadingPanelState();
}

class _CameraUploadingPanelState extends State<CameraUploadingPanel> {
  uploadImageAsUserPhotoUrl() async {
    var originalUrl = null;
    try {
      originalUrl =
          await CloudinaryUtils.uploadToCloudinary(imagePath: widget.imagePath);
    } catch (e) {}
    if (originalUrl == null) {
      ToastUtils.showToast(
          AppLocalizations.of(context).translate("toastForSaveFailure"));
      // Navigate
      Navigator.of(context).pop();
      return;
    }

    // Update Firebase's user model.
    ParseModelUsers nextModel = ParseModelUsers.updateUserPhoto(
      model: widget.loggedUser,
      originalUrl: originalUrl,
    );
    await FirestoreDatabase().updateUser(nextModel);

    // Update Firebase's user's name.
    FirebaseUser user = await FirebaseAuth.instance.currentUser();
    UserUpdateInfo userUpdateInfo = new UserUpdateInfo();
    userUpdateInfo.displayName = widget.loggedUser.username;
    userUpdateInfo.photoUrl = originalUrl;
    await user.updateProfile(userUpdateInfo);

    ToastUtils.showToast(
        AppLocalizations.of(context).translate("toastForSaveSuccess"));
    // Navigate
    Navigator.of(context).pop(nextModel.originalUrl);
  }

  @override
  void initState() {
    super.initState();

    uploadImageAsUserPhotoUrl();
  }

  @override
  Widget build(BuildContext context) {
    var flatButton = FlatButton(
        child: Text(AppLocalizations.of(context).translate("photosUploading")),
        textColor: Color(0xff0073bb),
        onPressed: () async {});
    return Container(
      color: Colors.white,
      child: Center(child: flatButton),
    );
  }
}
