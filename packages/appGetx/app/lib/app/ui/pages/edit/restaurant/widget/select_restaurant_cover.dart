import 'package:app_models/app_models.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:app_widgets/app_widgets.dart';
import 'package:ieatta/app/ui/widgets/selected_icon.dart';

import '../index.dart';

class SelectRestaurantCover extends GetWidget<EditRestaurantController> {
  const SelectRestaurantCover({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // Log.d('Select Restaurant Cover: start');
    List<ParseModelPhotos> photosList = controller.state.photosList;
    if (photosList.isEmpty) {
      return const Center(
        child: Text('No Data'),
      );
    }
    return GridView.builder(
      shrinkWrap: true,
      physics: const ScrollPhysics(),
      primary: false,
      padding: const EdgeInsets.all(5),
      itemCount: photosList.length,
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 3,
        childAspectRatio: 200 / 200,
      ),
      itemBuilder: (BuildContext context, int index) {
        var photo = photosList[index];
        return Obx(() {
          return buildGridItem(photo);
        });
      },
    );
  }

  Widget buildGridItem(ParseModelPhotos photo) {
    var body = InkWell(
      onTap: () async {
        await controller.onSelectCoverClick(photo);
      },
      child: Padding(
        padding: const EdgeInsets.all(5.0),
        child: PhotoBaseView(photo: photo),
      ),
    );
    var selection = Row(
      mainAxisAlignment: MainAxisAlignment.end,
      children: const [SelectedIcon()],
    );
    bool showSelectIcon = controller.showSelectCoverIcon(photo);
    // Log.d('showSelectIcon: $showSelectIcon');
    return Stack(
        children: [body, showSelectIcon ? selection : const SizedBox()]);
  }
}
