import 'package:app_language/langs/l10n.dart';
import 'package:app_models/app_models.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:app_widgets/app_widgets.dart';
import 'package:ieatta/app/ui/widgets/selected_icon.dart';
import 'package:my_plugin/my_plugin.dart';

import 'index.dart';
import 'widget/no_result.dart';

class SelectWaiterPage extends GetWidget<SelectWaiterController> {
  const SelectWaiterPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BaseScaffold(
        appBar: MyAppBar(
          centerTitle: true,
          title: MyTitle(S.of(context).eventsSelectWaiterTitleTxt),
          leadingType: AppBarBackType.Close,
          actions: [
            Padding(
              padding: const EdgeInsets.only(right: 20.0),
              child: GestureDetector(
                onTap: controller.onNewWaiterButtonPress,
                child: const Icon(
                  Icons.add,
                  color: Colors.white,
                ),
              ),
            ),
          ],
        ),
        body: Obx(() => _buildBody(context)));
  }

  Widget _buildBody(BuildContext context) {
    Map<String, ParseModelPhotos> waitersDict = controller.state.waitersDict;
    List<String> unselectedWaiterIds = controller.state.unselectedWaiterIds;

    if (unselectedWaiterIds.isEmpty) {
      return const WaitersEmpty();
    }
    return GridView.builder(
      shrinkWrap: true,
      physics: const ScrollPhysics(),
      primary: false,
      padding: const EdgeInsets.all(5),
      itemCount: unselectedWaiterIds.length,
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 3,
        childAspectRatio: 200 / 200,
      ),
      itemBuilder: (BuildContext context, int index) {
        var waiterId = unselectedWaiterIds[index];
        ParseModelPhotos? waiter = waitersDict[waiterId];
        return Obx(() {
          return _buildGridItem(context, waiter);
        });
      },
    );
  }

  Widget _buildGridItem(BuildContext context, ParseModelPhotos? waiter) {
    bool isSelected = controller.state.contains(waiter!.uniqueId!);
    return InkWell(
      onTap: () async {
        await controller.onAddIconPress(context, waiter);
      },
      child: Stack(
        children: [
          _buildItem(context, waiter),
          if (isSelected)
            Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: const [SelectedIcon()],
            ),
        ],
      ),
    );
  }

  Widget _buildItem(BuildContext context, ParseModelPhotos? waiter) {
    return Padding(
      padding: const EdgeInsets.all(5.0),
      child: Container(
          width: 135.0,
          height: 180.0,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(20.0),
            color: Colors.white,
          ),
          child: PhotoBaseView(photo: waiter!)),
    );
  }
}
