import 'package:flutter/material.dart';
import 'package:ieatta/camera/providers/photo_state.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:provider/provider.dart';

import 'edit_photo_page.dart';

class EditPhotoProviderScreen extends StatefulWidget {
  @override
  _EditPhotoProviderScreenState createState() =>
      _EditPhotoProviderScreenState();
}

class _EditPhotoProviderScreenState extends State<EditPhotoProviderScreen> {
  // Model
  ParseModelPhotos _photo;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final ParseModelPhotos _photoModel =
        ModalRoute.of(context).settings.arguments;

    setState(() {
      _photo = _photoModel;
    });
  }

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider<PhotoState>(
        create: (context) => PhotoState(extraNote: _photo.extraNote),
        child: EditPhotoPage(
          photo: _photo,
        ));
  }
}
