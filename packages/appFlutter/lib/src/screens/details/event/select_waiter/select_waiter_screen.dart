import 'package:flutter/material.dart';
import 'package:ieatta/camera/screens/navigate_helper.dart';
import 'package:ieatta/common/langs/l10n.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:ieatta/core/filter/filter_models.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/src/appModels/models/Events.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/components/edit_restaurant/common.dart';
import 'package:ieatta/src/components/photos/photo_base_view.dart';
import 'package:ieatta/src/providers/select_state.dart';
import 'package:ieatta/src/screens/details/event/select_waiter/select_waiter_provider.dart';
import 'package:ieatta/util/flushbar_utils.dart';
import 'package:provider/provider.dart';

import 'no_result.dart';

class SelectWaiterScreen extends StatelessWidget {
  SelectWaiterScreen({Key? key, required this.screenObject}) : super(key: key);

  final SelectWaiterScreenObject screenObject;
  bool isSaving = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text(S.of(context).eventsSelectWaiterTitleTxt),
          actions: [
            Padding(
                padding: EdgeInsets.only(right: 20.0),
                child: GestureDetector(
                    onTap: () {
                      PhotoNavigatorHelper.pop(context,
                          photoType: PhotoType.Waiter, relatedId: screenObject.event.restaurantId);
                    },
                    child: Icon(
                      Icons.add,
                      color: Colors.white,
                    ))),
          ],
        ),
        body: _buildBody(context));
  }

  Widget _buildBody(BuildContext context) {
    String restaurantId = screenObject.event.restaurantId;
    Map<String, ParseModelPhotos> waitersDict = FilterModels.instance.getWaitersDict(context, restaurantId);

    List<String> unselectedWaiterIds = screenObject.unselectedWaiterIds;

    if (unselectedWaiterIds.length == 0) {
      return WaitersEmpty(
        restaurantId: restaurantId,
      );
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
        return _buildGridItem(context, waitersDict[unselectedWaiterIds[index]]);
      },
    );
  }

  Widget _buildGridItem(BuildContext context, ParseModelPhotos? waiter) {
    SelectState selectState = Provider.of<SelectState>(context, listen: true);
    bool isSelected = selectState.contains(waiter!.uniqueId);
    return InkWell(
      onTap: () async {
        if (selectState.getSaving() == true) {
          return;
        }

        selectState.setSaving(true);

        FlushBarUtils.show(
          context,
          title: 'Saving...',
          message: "Select a waiter photo",
        );

        try {
          ParseModelEvents nextModel = ParseModelEvents.addWaiter(
            model: screenObject.event,
            waiterId: waiter.uniqueId,
          );

          final firestoreDatabase = Provider.of<FirestoreDatabase>(context, listen: false);
          await firestoreDatabase.setEvent(model: nextModel); // For event.
        } catch (e) {}

        selectState.pushId(waiter.uniqueId);
        selectState.setSaving(false);
      },
      child: Padding(
          padding: EdgeInsets.all(5.0),
          child: Stack(
            children: [
              PhotoBaseView(photoData: waiter),
              isSelected
                  ? Row(
                      mainAxisAlignment: MainAxisAlignment.end,
                      children: [buildSelectedIcon()],
                    )
                  : SizedBox()
            ],
          )),
    );
  }
}
