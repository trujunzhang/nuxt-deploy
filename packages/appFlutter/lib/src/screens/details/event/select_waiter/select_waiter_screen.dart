import 'package:flutter/material.dart';
import 'package:ieatta/app/app_localizations.dart';
import 'package:ieatta/core/filter/filter_models.dart';
import 'package:ieatta/core/filter/filter_utils.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/src/appModels/models/Events.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/components/photos/photo_base_view.dart';
import 'package:provider/provider.dart';

import 'no_result.dart';

class SelectWaiterScreenObject {
  final ParseModelEvents event;

  SelectWaiterScreenObject({
    @required this.event,
  });
}

class SelectWaiterScreen extends StatefulWidget {
  SelectWaiterScreen({Key key}) : super(key: key);

  @override
  _SelectWaiterScreenState createState() => _SelectWaiterScreenState();
}

class _SelectWaiterScreenState extends State<SelectWaiterScreen> {
  // Model
  SelectWaiterScreenObject screenObject;
  bool isSaving = false;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final SelectWaiterScreenObject _screenObject =
        ModalRoute.of(context).settings.arguments;
    setState(() {
      screenObject = _screenObject;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
            title: Text(AppLocalizations.of(context)
                .translate("eventsSelectWaiterTitleTxt"))),
        body: _buildBody(context));
  }

  Widget _buildBody(BuildContext context) {
    String restaurantId = screenObject.event.restaurantId;
    Map<String, ParseModelPhotos> waitersDict =
        FilterModels.instance.getWaitersDict(context, restaurantId);

    List<String> unselectedWaiterIds = FilterUtils.instance
        .getUnselectedWaiterIds(
            List.from(waitersDict.keys), screenObject.event);

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

  Widget _buildGridItem(BuildContext context, ParseModelPhotos waiter) {
    return InkWell(
      onTap: () async {
        if(isSaving == true){
          return;
        }
        setState(() {
          isSaving = true;
        });
        ParseModelEvents nextModel = ParseModelEvents.addWaiter(
          model: screenObject.event,
          waiterId: waiter.uniqueId,
        );

        try {
          final firestoreDatabase =
              Provider.of<FirestoreDatabase>(context, listen: false);
          await firestoreDatabase.setEvent(model: nextModel); // For Restaurant.
        } catch (e) {}

        // Navigate
        Navigator.of(context).pop();
      },
      child: Padding(
        padding: EdgeInsets.all(5.0),
        child: PhotoBaseView(photoData: waiter),
      ),
    );
  }
}
