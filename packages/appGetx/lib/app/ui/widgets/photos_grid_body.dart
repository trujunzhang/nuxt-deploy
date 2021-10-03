import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/data/enum/fb_collections.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/routes/params_helper.dart';
import 'package:ieatta/app/ui/widgets/photo_base_view.dart';

class PhotosGridBody extends StatelessWidget {
  final List<ParseModelPhotos> photoList;
  final PhotoType photoType;
  final String relatedId;

  PhotosGridBody(
      {Key? key,
      required this.photoList,
      required this.photoType,
      required this.relatedId})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GridView.builder(
      shrinkWrap: true,
      physics: ScrollPhysics(),
      primary: false,
      padding: EdgeInsets.all(5),
      itemCount: photoList.length,
      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 3,
        childAspectRatio: 200 / 200,
      ),
      itemBuilder: (BuildContext context, int index) {
        return _buildGridItem(context, photoList, index);
      },
    );
  }

  Widget _buildGridItem(
      BuildContext context, List<ParseModelPhotos> photos, int index) {
    ParseModelPhotos photo = photos[index];
    return InkWell(
      onTap: () {
        Get.toNamed(ParamsHelper.getOnlinePageViewPath(index,
            photoType: photoType, relatedId: relatedId));

        // Get.toNamed(Routes.ONLINE_PHOTO_PAGE, arguments: {
        //   ParamsHelper.SELECTED_INDEX: index,
        //   ParamsHelper.PHOTOS_LIST: photos
        // });
      },
      child: Padding(
        padding: EdgeInsets.all(5.0),
        child: PhotoBaseView(photoData: photo, fit: BoxFit.cover),
      ),
    );
  }
}
