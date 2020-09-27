import 'package:flutter/material.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/components/photos/image.dart';
import 'dart:io' as io;

class PhotoBaseView extends StatelessWidget {
  final ParseModelPhotos photoData;

  const PhotoBaseView({Key key, this.photoData}) : super(key: key);

  @override
  Widget build(context) {
    return FutureBuilder<bool>(
        future: io.File(photoData.offlinePath).exists(),
        builder: (context, AsyncSnapshot<bool> snapshot) {
          if (snapshot.hasData) {
            return buildPhotoImageWithLocalImage(photoData, snapshot.data);
          } else {
            return Container();
          }
        });
  }
}
