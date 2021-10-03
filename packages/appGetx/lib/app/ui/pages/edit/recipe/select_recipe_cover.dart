import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/ui/widgets/photo_base_view.dart';
import 'package:ieatta/app/ui/widgets/selected_icon.dart';

import 'index.dart';

class SelectRecipeCover extends StatelessWidget {
  EditRecipeController controller = Get.find<EditRecipeController>();

  @override
  Widget build(BuildContext context) {
    // Log.d('Select Restaurant Cover: start');
    List<ParseModelPhotos> photosList = controller.state.photosList;
    if (photosList.length == 0) {
      return Center(
        child: Text('No Data'),
      );
    }
    return GridView.builder(
      shrinkWrap: true,
      physics: ScrollPhysics(),
      primary: false,
      padding: EdgeInsets.all(5),
      itemCount: photosList.length,
      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 3,
        childAspectRatio: 200 / 200,
      ),
      itemBuilder: (BuildContext context, int index) {
        ParseModelPhotos photo = photosList[index];
        return Obx(() => buildGridItem(photo));
      },
    );
  }

  Widget buildGridItem(ParseModelPhotos photo) {
    var body = InkWell(
      onTap: () async {
        await controller.onSelectCoverClick(photo);
      },
      child: Padding(
        padding: EdgeInsets.all(5.0),
        child: PhotoBaseView(photoData: photo),
      ),
    );
    var selection = Row(
      mainAxisAlignment: MainAxisAlignment.end,
      children: [SelectedIcon()],
    );
    bool showSelectIcon = controller.showSelectCoverIcon(photo);
    // Log.d('showSelectIcon: $showSelectIcon');
    return Stack(children: [body, showSelectIcon ? selection : SizedBox()]);
  }
}
