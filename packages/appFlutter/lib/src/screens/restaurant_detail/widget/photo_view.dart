import 'package:flutter/material.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/components/photos/image.dart';

class PhotoView extends StatefulWidget {
  PhotoView({Key key, this.callback, this.photoData}) : super(key: key);

  final VoidCallback callback;
  final ParseModelPhotos photoData;

  @override
  _PhotoViewState createState() => _PhotoViewState();
}

class _PhotoViewState extends State<PhotoView> {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.symmetric(vertical: 25.0, horizontal: 12.0),
      child: Container(
          height: 220.0,
          width: 135.0,
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
            onTap: widget.callback,
            child: buildPhotoImage(widget.photoData),
          )),
    );
  }
}
