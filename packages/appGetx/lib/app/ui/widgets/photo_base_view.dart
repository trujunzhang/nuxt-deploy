import 'dart:io' as io;

import 'package:flutter/material.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/ui/helpers/images/photo.dart';

class PhotoBaseView extends StatelessWidget {
  final ParseModelPhotos photoData;
  final BoxFit fit;
  final Widget? customPlaceHolder;

  const PhotoBaseView(
      {Key? key,
      this.customPlaceHolder,
      required this.photoData,
      this.fit = BoxFit.cover})
      : super(key: key);

  @override
  Widget build(context) {
    return FutureBuilder<bool>(
        future: io.File(photoData.offlinePath!).exists(),
        builder: (context, AsyncSnapshot<bool> snapshot) {
          if (snapshot.hasData) {
            return buildPhotoImageWithLocalImage(photoData, snapshot.data!, fit,
                customPlaceHolder: customPlaceHolder);
          } else {
            return const SizedBox.shrink();
          }
        });
  }
}
