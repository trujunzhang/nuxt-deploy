import 'package:flutter/material.dart';
import 'package:ieatta/core/enums/fb_collections.dart';

class PhotoState with ChangeNotifier {
  String imgPath;
  PhotoType photoType;
  String relatedId;
  String extraNote;

  PhotoState({
    this.imgPath,
    this.photoType,
    this.relatedId,
    @required this.extraNote,
  });

  String getImgPath() {
    return imgPath;
  }

  PhotoType getPhotoType() {
    return photoType;
  }

  String getRelatedId() {
    return relatedId;
  }

  String getExtraNote() {
    return extraNote;
  }

  void setImgPath(String _body) {
    imgPath = _body;
    notifyListeners();
  }

  void setExtraNote(String _extraNote) {
    extraNote = _extraNote;
    notifyListeners();
  }
}
