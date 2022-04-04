import 'package:app_models/app_models.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/routes/params_helper.dart';
import 'package:app_widgets/app_widgets.dart';

class PhotosListBody extends StatelessWidget {
  final List<ParseModelPhotos> photosList;
  final PhotoType photoType;
  final String relatedId;

  const PhotosListBody(
      {Key? key,
      required this.photosList,
      required this.photoType,
      required this.relatedId})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    if (photosList.isEmpty) {
      return buildEmptyPhotos(context);
    }
    return buildPhotosListView();
  }

  Widget buildPhotosListView() {
    return ListView.builder(
      itemCount: photosList.length,
      scrollDirection: Axis.horizontal,
      itemBuilder: (BuildContext context, int index) {
        return PhotoView(
          onTapPhoto: () {
            Get.toNamed(ParamsHelper.getOnlinePageViewPath(index,
                photoType: photoType, relatedId: relatedId));
          },
          photo: photosList[index],
        );
      },
    );
  }

  Widget buildEmptyPhotos(BuildContext context) {
    return Card(
        child: Center(
      child: InkWell(
        onTap: () {
          Get.toNamed(ParamsHelper.getTakeCameraPath(
            photoType: photoType,
            relatedId: relatedId,
          ));
        },
        child: const Icon(
          Icons.add_a_photo,
          color: Colors.blueGrey,
          size: 50,
        ),
      ),
    ));
  }
}
