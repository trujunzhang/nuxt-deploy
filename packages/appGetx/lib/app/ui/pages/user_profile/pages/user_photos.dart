import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/ui/widgets/photos_grid_body.dart';

import '../index.dart';

class UserPhotos extends StatefulWidget {
  final String tag;

  const UserPhotos({Key? key, required this.tag}) : super(key: key);

  @override
  _UserPhotosState createState() => _UserPhotosState();
}

class _UserPhotosState extends State<UserPhotos> {
  late UserProfileController controller;

  @override
  void initState() {
    super.initState();
    controller = Get.find(tag: widget.tag);
  }

  @override
  Widget build(BuildContext context) {
    return Obx(() => _buildBody(context));
  }

  Widget _buildBody(BuildContext context) {
    List<ParseModelPhotos> photosList = controller.state.photosList;

    if (photosList.isEmpty) {
      return const Center(
        child: Text('No Data'),
      );
    }
    return Container(
      color: Theme.of(context).scaffoldBackgroundColor,
      child: PhotosGridBody(
        showDeleteIcon: true,
        photoList: photosList,
        relatedId: controller.state.detailModel!.uid,
        photoType: PhotoType.User,
      ),
    );
  }
}
