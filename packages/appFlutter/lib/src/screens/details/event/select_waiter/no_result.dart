import 'package:flutter/material.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/camera/screens/types.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:ieatta/src/screens/restaurants/hotel_app_theme.dart';

class WaitersEmpty extends StatefulWidget {
  final String restaurantId;

  WaitersEmpty({Key key, @required this.restaurantId}) : super(key: key);

  @override
  _WaitersEmptyState createState() => _WaitersEmptyState();
}

class _WaitersEmptyState extends State<WaitersEmpty> {
  Widget buildBtn() {
    return Container(
      decoration: BoxDecoration(
        color: Theme.of(context).primaryColor,
        borderRadius: const BorderRadius.all(
          Radius.circular(38.0),
        ),
        boxShadow: <BoxShadow>[
          BoxShadow(
              color: Colors.grey.withOpacity(0.4),
              offset: const Offset(0, 2),
              blurRadius: 8.0),
        ],
      ),
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          borderRadius: const BorderRadius.all(
            Radius.circular(32.0),
          ),
          onTap: () {
            Navigator.of(context).pushNamed(Routes.app_camera,
                arguments: CameraScreenObject(
                    photoType: PhotoType.Waiter,
                    relatedId: widget.restaurantId));
          },
          child: Padding(
            padding: const EdgeInsets.all(16.0),
            child: Icon(Icons.add,
                size: 20,
                color: HotelAppTheme.buildLightTheme().backgroundColor),
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Center(
        child: Column(
      children: <Widget>[
        Container(
          height: 100,
        ),
        Container(
          margin: const EdgeInsets.only(bottom: 12),
          child: Text('No unselected Waiters'),
        ),
        buildBtn()
      ],
    ));
  }
}
