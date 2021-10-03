import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/ui/widgets/photo_base_view.dart';
import 'package:ieatta/app/ui/widgets/selected_icon.dart';
import 'package:ieatta/common/langs/l10n.dart';
import 'package:my_plugin/my_plugin.dart';

import 'index.dart';
import 'no_result.dart';

class SelectWaiterPage extends GetWidget<SelectWaiterController> {
  @override
  Widget build(BuildContext context) {
    return BaseScaffold(
        appBar: MyAppBar(
          centerTitle: true,
          title: MyTitle(S.of(context).eventsSelectWaiterTitleTxt),
          leadingType: AppBarBackType.Close,
          actions: [
            Padding(
                padding: EdgeInsets.only(right: 20.0),
                child: GestureDetector(
                    onTap: () {
                      controller.onNewWaiterButtonPress(context);
                    },
                    child: Icon(
                      Icons.add,
                      color: Colors.white,
                    ))),
          ],
        ),
        body: Obx(() => _buildBody(context)));
  }

  Widget _buildBody(BuildContext context) {
    Map<String, ParseModelPhotos> waitersDict = controller.state.waitersDict;
    List<String> unselectedWaiterIds = controller.state.unselectedWaiterIds;

    if (unselectedWaiterIds.length == 0) {
      return WaitersEmpty();
    }
    return GridView.builder(
      shrinkWrap: true,
      physics: ScrollPhysics(),
      primary: false,
      padding: EdgeInsets.all(5),
      itemCount: unselectedWaiterIds.length,
      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 3,
        childAspectRatio: 200 / 200,
      ),
      itemBuilder: (BuildContext context, int index) {
        var waiterId = unselectedWaiterIds[index];
        return Obx(() => _buildGridItem(context, waitersDict[waiterId]));
      },
    );
  }

  Widget _buildGridItem(BuildContext context, ParseModelPhotos? waiter) {
    bool isSelected = controller.state.contains(waiter!.uniqueId);
    return InkWell(
      onTap: () async {
        await controller.onAddIconPress(context, waiter);
      },
      child: Padding(
          padding: EdgeInsets.all(5.0),
          child: Stack(
            children: [
              PhotoBaseView(photoData: waiter),
              isSelected
                  ? Row(
                      mainAxisAlignment: MainAxisAlignment.end,
                      children: [SelectedIcon()],
                    )
                  : SizedBox()
            ],
          )),
    );
  }
}
