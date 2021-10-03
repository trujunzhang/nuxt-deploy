import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/data/enum/fb_collections.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/routes/params_helper.dart';

import 'photo_view.dart';

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
    if (photosList.length == 0) {
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
          callback: () {
            Get.toNamed(ParamsHelper.getOnlinePageViewPath(index,
                photoType: photoType, relatedId: relatedId));
            // Get.toNamed(Routes.ONLINE_PHOTO_PAGE, arguments: {
            //   ParamsHelper.SELECTED_INDEX: index,
            //   ParamsHelper.PHOTOS_LIST: photosList
            // });
          },
          photoData: photosList[index],
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
        child: Icon(
          Icons.add_a_photo,
          color: Colors.blueGrey,
          size: 50,
        ),
      ),
    ));
  }
}
