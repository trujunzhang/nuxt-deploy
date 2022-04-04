import 'dart:io';

import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:image_picker/image_picker.dart';

import '../index.dart';

class ThumbnailWidget extends GetWidget<TakeCameraController> {
  final double thumbnailSize = 36.0;

  const ThumbnailWidget({Key? key}) : super(key: key);

  Future getImage() async {
    XFile? image = await ImagePicker().pickImage(source: ImageSource.gallery);
    if (image == null) {
      return;
    }
    controller.afterTakeHook(image.path, (val) {});
  }

  @override
  Widget build(BuildContext context) {
    String thumb = controller.state.imagePath.value;
    return GestureDetector(
      onTap: getImage,
      child: Container(
          width: thumbnailSize,
          height: thumbnailSize,
          decoration: BoxDecoration(
              color: Colors.black,
              border: Border.all(color: Colors.white, width: 1.5),
              borderRadius: BorderRadius.circular(8.0)),
          child: thumb != ''
              ? ClipRRect(
                  borderRadius: BorderRadius.circular(8.0),
                  child: Image.file(
                    File(thumb),
                    fit: BoxFit.cover,
                    width: 75.0,
                    height: 75.0,
                  ),
                )
              : null),
    );
  }
}
