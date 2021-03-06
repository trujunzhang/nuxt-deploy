import 'package:flutter/material.dart';
import 'package:ieatta/app/app_localizations.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/camera/screens/types.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:ieatta/core/filter/filter_models.dart';
import 'package:ieatta/core/filter/filter_utils.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/src/appModels/models/Events.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/components/photos/photo_base_view.dart';
import 'package:provider/provider.dart';
import 'package:another_flushbar/flushbar.dart';

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
              .translate("eventsSelectWaiterTitleTxt")),
          actions: [
            Padding(
                padding: EdgeInsets.only(right: 20.0),
                child: GestureDetector(
                    onTap: () {
                      String restaurantId = screenObject.event.restaurantId;
                      Navigator.of(context).pushNamed(Routes.app_camera,
                          arguments: CameraScreenObject(
                              photoType: PhotoType.Waiter,
                              relatedId: restaurantId));
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
        if (isSaving == true) {
          return;
        }
        setState(() {
          isSaving = true;
        });

        var _flushBar = Flushbar(
          flushbarPosition: FlushbarPosition.TOP,
          flushbarStyle: FlushbarStyle.GROUNDED,
          backgroundColor: Colors.red,
          boxShadows: [
            BoxShadow(
              color: Colors.red[800],
              offset: Offset(0.0, 2.0),
              blurRadius: 3.0,
            )
          ],
          isDismissible: false,
          duration: Duration(seconds: 4),
          // now we want to swipe to the sides
          dismissDirection: FlushbarDismissDirection.HORIZONTAL,
          // The default curve is Curves.easeOut
          forwardAnimationCurve: Curves.fastLinearToSlowEaseIn,
          title: 'Saving...',
          message: "Select a waiter photo",
          icon: Icon(
            Icons.save_rounded,
            color: Colors.blue,
          ),
        );

        _flushBar.show(context);

        try {
          ParseModelEvents nextModel = ParseModelEvents.addWaiter(
            model: screenObject.event,
            waiterId: waiter.uniqueId,
          );

          final firestoreDatabase =
              Provider.of<FirestoreDatabase>(context, listen: false);
          await firestoreDatabase.setEvent(model: nextModel); // For event.
        } catch (e) {}

        setState(() {
          isSaving = false;
        });
      },
      child: Padding(
        padding: EdgeInsets.all(5.0),
        child: PhotoBaseView(photoData: waiter),
      ),
    );
  }
}
