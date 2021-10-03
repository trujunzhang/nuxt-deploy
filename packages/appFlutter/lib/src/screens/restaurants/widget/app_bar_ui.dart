import 'package:flutter/material.dart';
import 'package:ieatta/routers/fluro_navigator.dart';
import 'package:ieatta/src/components/app/app_header.dart';
import 'package:ieatta/src/screens/edit/edit_router.dart';
import 'package:ieatta/src/screens/photos_grid/photo_router.dart';

class AppBarUI extends StatefulWidget {
  AppBarUI({Key? key}) : super(key: key);

  @override
  _AppBarUIState createState() => _AppBarUIState();
}

class _AppBarUIState extends State<AppBarUI> {
  @override
  Widget build(BuildContext context) {
    return Container(
        child: Container(
      decoration: BoxDecoration(
        color: Color(0xff83CBEC),
        // color: Colors.red,
        boxShadow: <BoxShadow>[
          BoxShadow(color: Colors.grey.withOpacity(0.2), offset: const Offset(0, 2), blurRadius: 8.0),
        ],
      ),
      child: Padding(
          padding: EdgeInsets.only(top: MediaQuery.of(context).padding.top + 10, bottom: 4, left: 8, right: 8),
          child: buildHeader()),
    ));
  }

  Widget buildHeader() {
    return Stack(
      children: [Center(child: appHeaderTitle()), buildRightIcons()],
    );
  }

  Widget buildRightIcons() {
    return Container(
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.end,
        mainAxisAlignment: MainAxisAlignment.end,
        children: <Widget>[
          Material(
            color: Colors.transparent,
            child: InkWell(
              borderRadius: const BorderRadius.all(
                Radius.circular(32.0),
              ),
              onTap: () {
                NavigatorUtils.push(context, EditRouter.newRestaurantPage);
              },
              child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: Icon(
                  Icons.add,
                  color: Theme.of(context).secondaryHeaderColor,
                ),
              ),
            ),
          ),
          Material(
            color: Colors.transparent,
            child: InkWell(
              borderRadius: const BorderRadius.all(
                Radius.circular(32.0),
              ),
              onTap: () {
                NavigatorUtils.push(context, PhotoListRouter.localPhotoGridPage);
              },
              child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: Icon(
                  Icons.photo_library,
                  color: Theme.of(context).secondaryHeaderColor,
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
