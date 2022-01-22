import 'package:flutter/material.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/ui/widgets/photo_base_view.dart';

class PhotoView extends StatelessWidget {
  final VoidCallback callback;
  final ParseModelPhotos photoData;

  const PhotoView({Key? key, required this.callback, required this.photoData})
      : super(key: key);

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
            onTap: callback,
            child: PhotoBaseView(photoData: photoData),
          )),
    );
  }
}
