import 'package:app_language/langs/l10n.dart';
import 'package:app_models/app_models.dart';
import 'package:app_sql/app_sql.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/routes/params_helper.dart';
import 'package:app_widgets/app_widgets.dart';
import 'package:ieatta/app/ui/helpers/slidable_row.dart';
import 'package:my_plugin/my_plugin.dart';

class PhotosGridBody extends StatelessWidget {
  final List<ParseModelPhotos> photoList;
  final PhotoType photoType;
  final String relatedId;
  final bool showDeleteIcon;

  const PhotosGridBody({
    Key? key,
    required this.photoList,
    required this.photoType,
    required this.relatedId,
    this.showDeleteIcon = false,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GridView.builder(
      shrinkWrap: true,
      physics: const ScrollPhysics(),
      primary: false,
      padding: const EdgeInsets.all(5),
      itemCount: photoList.length,
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 3,
        childAspectRatio: 200 / 200,
      ),
      itemBuilder: (BuildContext context, int index) {
        ParseModelPhotos photo = photoList[index];
        if (showDeleteIcon) {
          return _buildBody(context, photo, index);
        }
        return _buildGridItem(context, photo, index);
      },
    );
  }

  Widget _buildBody(BuildContext context, ParseModelPhotos photo, int index) {
    return SlidableRow(
      ratio: 0.6,
      rowKey: photo.uniqueId!,
      row: _buildGridItem(context, photo, index),
      onPress: (BuildContext context) async {
        showModalBottomSheet<void>(
          context: context,
          builder: (BuildContext context) {
            return FBDeleteBottomSheet(
              onTapDelete: () async {
                // onDeleteFBPhotoPress
                try {
                  // String offlinePath = photo.offlinePath!;
                  // Delete the sqlite's photo.
                  SqlPhotoDao dao = await SqlHelper.getSqlPhotoDao();
                  SqlPhoto? sqlPhoto = await dao.findPhotoById(photo.uniqueId!);
                  if (sqlPhoto != null) {
                    await dao.deletePhoto(sqlPhoto);
                    await sqlPhoto.deleteLocalImage();
                  }
                  // Delete the firebase's photo.
                  await PhotoRepository.getInstance().delete(photo.uniqueId);
                  Toast.show(S.of(context).ModelItemsDeleteSuccess);
                } catch (e) {
                  Toast.show(S.of(context).ModelItemsDeleteFailure);
                }
              },
            );
          },
        );
      },
    );
  }

  Widget _buildGridItem(
      BuildContext context, ParseModelPhotos photo, int index) {
    return PhotoView(
      onTapPhoto: () {
        Get.toNamed(ParamsHelper.getOnlinePageViewPath(index,
            photoType: photoType, relatedId: relatedId));
      },
      photo: photo,
    );
    // return InkWell(
    //   onTap: () {
    //     Get.toNamed(ParamsHelper.getOnlinePageViewPath(index,
    //         photoType: photoType, relatedId: relatedId));
    //   },
    //   child: Padding(
    //     padding: const EdgeInsets.all(5.0),
    //     child: PhotoBaseView(photo: photo),
    //   ),
    // );
  }
}
