import 'dart:io' as io;

import 'package:app_models/app_models.dart';
import 'package:app_widgets/src/images/photo.dart';
import 'package:flutter/material.dart';
import 'package:doc_widget/doc_widget.dart';
import 'package:get/get.dart';

@docWidget
class PhotoBaseView extends StatelessWidget {
  final ParseModelPhotos photo;
  final BoxFit fit;
  final Widget? customPlaceHolder;

  const PhotoBaseView(
      {Key? key,
      required this.photo,
      this.customPlaceHolder,
      this.fit = BoxFit.cover})
      : super(key: key);

  @override
  Widget build(context) {
    if (GetPlatform.isWeb) {
      return buildOnlineImageView(photo.originalUrl, fit,
          customPlaceHolder: customPlaceHolder);
    }

    return FutureBuilder<bool>(
        future: io.File(photo.offlinePath!).exists(),
        builder: (context, AsyncSnapshot<bool> snapshot) {
          if (snapshot.hasData) {
            return buildPhotoImageWithLocalImage(photo, snapshot.data!, fit,
                customPlaceHolder: customPlaceHolder);
          } else {
            return const SizedBox.shrink();
          }
        });
  }
}
