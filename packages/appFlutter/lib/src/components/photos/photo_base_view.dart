import 'dart:io' as io;

import 'package:flutter/material.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/components/photos/image.dart';

class PhotoBaseView extends StatelessWidget {
  final ParseModelPhotos photoData;
  final BoxFit fit;

  const PhotoBaseView(
      {Key key, @required this.photoData, this.fit = BoxFit.cover})
      : super(key: key);

  @override
  Widget build(context) {
    return FutureBuilder<bool>(
        future: io.File(photoData.offlinePath).exists(),
        builder: (context, AsyncSnapshot<bool> snapshot) {
          if (snapshot.hasData) {
            return buildPhotoImageWithLocalImage(photoData, snapshot.data, fit);
          } else {
            return Container();
          }
        });
  }
}
