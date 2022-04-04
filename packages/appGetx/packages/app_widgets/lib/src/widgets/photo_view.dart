import 'package:app_models/app_models.dart';
import 'package:flutter/material.dart';
import 'package:app_widgets/app_widgets.dart';
import 'package:doc_widget/doc_widget.dart';

@docWidget
class PhotoView extends StatelessWidget {
  final VoidCallback onTapPhoto;
  final ParseModelPhotos photo;

  const PhotoView({
    Key? key,
    required this.onTapPhoto,
    required this.photo,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 5.0, horizontal: 4.0),
      child: Container(
          width: 135.0,
          height: 180.0,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(20.0),
            color: Colors.white,
          ),
          child: InkWell(
            onTap: onTapPhoto,
            child: PhotoBaseView(photo: photo),
          )),
    );
  }
}
