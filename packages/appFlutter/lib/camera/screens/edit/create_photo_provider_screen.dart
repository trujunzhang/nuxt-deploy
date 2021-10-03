import 'package:flutter/material.dart';
import 'package:ieatta/camera/providers/photo_state.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:provider/provider.dart';

import 'create_photo_page.dart';

class CreatePhotoProviderScreen extends StatelessWidget {
  CreatePhotoProviderScreen({Key? key, required this.imgPath, required this.photoType, required this.relatedId})
      : super(key: key);
  final String imgPath;
  final PhotoType photoType;
  final String relatedId;

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider<PhotoState>(
        create: (context) => PhotoState(imgPath: imgPath, photoType: photoType, relatedId: relatedId, extraNote: ''),
        child: CreatePhotoPage());
  }
}
