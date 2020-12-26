import 'package:flutter/material.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/components/photos/photo_base_view.dart';

class PhotoView extends StatelessWidget {
  final VoidCallback callback;
  final ParseModelPhotos photoData;

  const PhotoView({Key key, this.callback, this.photoData}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.symmetric(vertical: 5.0, horizontal: 4.0),
      child: Container(
          width: 135.0,
          height: 180.0,
          decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(20.0),
              color: Colors.white,
              boxShadow: [
                BoxShadow(
                    color: Colors.black12,
                    blurRadius: 10.0,
                    offset: Offset(0.0, 10.0))
              ]),
          child: InkWell(
            onTap: callback,
            child: PhotoBaseView(photoData: photoData),
          )),
    );
  }
}
