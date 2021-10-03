import 'package:flutter/material.dart';
import 'package:ieatta/camera/providers/photo_state.dart';
import 'package:ieatta/core/filter/filter_models.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:provider/provider.dart';

import 'edit_photo_page.dart';

class EditPhotoProviderScreen extends StatelessWidget {
  EditPhotoProviderScreen({
    Key? key,
    required this.photoId,
  }) : super(key: key);

  final String photoId;

  @override
  Widget build(BuildContext context) {
    ParseModelPhotos? photo = FilterModels.instance.getSinglePhoto(context, photoId);
    return ChangeNotifierProvider<PhotoState>(
        create: (context) => PhotoState(extraNote: photo!.extraNote!),
        child: EditPhotoPage(
          photo: photo!,
        ));
  }
}
