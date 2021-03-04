import 'package:flutter/material.dart';
import 'package:ieatta/camera/providers/photo_state.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:provider/provider.dart';

import 'create_photo_page.dart';

class NewPhotoScreenObject {
  final String imgPath;
  final PhotoType photoType;
  final String relatedId;

  NewPhotoScreenObject(
      {@required this.imgPath,
      @required this.photoType,
      @required this.relatedId});
}

class CreatePhotoProviderScreen extends StatefulWidget {
  @override
  _CreateEditPhotoProviderScreenState createState() =>
      _CreateEditPhotoProviderScreenState();
}

class _CreateEditPhotoProviderScreenState
    extends State<CreatePhotoProviderScreen> {
  // Model
  NewPhotoScreenObject screenObject;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final NewPhotoScreenObject _screenObject =
        ModalRoute.of(context).settings.arguments;
    setState(() {
      screenObject = _screenObject;
    });
  }

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider<PhotoState>(
        create: (context) => PhotoState(
            imgPath: screenObject.imgPath,
            photoType: screenObject.photoType,
            relatedId: screenObject.relatedId,
            extraNote: ''),
        child: CreatePhotoPage());
  }
}
