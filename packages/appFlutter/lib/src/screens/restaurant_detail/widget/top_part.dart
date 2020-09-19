import 'package:flutter/material.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/components/navigation/top_back_arrow_view.dart';
import 'package:ieatta/src/components/restaurants/image.dart';
import 'package:ieatta/src/screens/edit/create_edit_review_screen.dart';

import 'mc_lipper.dart';

class ScreenTopPart extends StatefulWidget {
  ScreenTopPart({Key key, this.restaurant}) : super(key: key);

  final ParseModelRestaurants restaurant;

  @override
  _ScreenTopPartState createState() => _ScreenTopPartState();
}

class _ScreenTopPartState extends State<ScreenTopPart> {
  String title = '';

  void initState() {
    super.initState();
    setState(() {
      title = widget.restaurant.displayName;
    });
  }

  Widget buildBg() {
    return ClipPath(
      clipper: Mclipper(),
      child: Container(
        height: 370.0,
        decoration: BoxDecoration(color: Colors.white, boxShadow: [
          BoxShadow(
              color: Colors.black12,
              offset: Offset(0.0, 10.0),
              blurRadius: 10.0)
        ]),
        child: Stack(
          children: <Widget>[
            buildRestaurantImage(widget.restaurant),
            Container(
              height: double.infinity,
              width: double.infinity,
              decoration: BoxDecoration(
                  gradient: LinearGradient(
                      colors: [
                    const Color(0x00000000),
                    const Color(0xD9333333)
                  ],
                      stops: [
                    0.0,
                    0.9
                  ],
                      begin: FractionalOffset(0.0, 0.0),
                      end: FractionalOffset(0.0, 1.0))),
              child: Padding(
                padding: EdgeInsets.only(top: 120.0, left: 95.0),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    Text(
                      title,
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 45.0,
                      ),
                    )
                  ],
                ),
              ),
            )
          ],
        ),
      ),
    );
  }

  Widget buildFg() {
    return Positioned(
      top: 370.0,
      right: -20.0,
      child: FractionalTranslation(
        translation: Offset(0.0, -0.5),
        child: Row(
          children: <Widget>[
            FloatingActionButton(
              heroTag: null,
              backgroundColor: Colors.white,
              onPressed: () async {
                final result = await Navigator.of(context).pushNamed(
                    Routes.create_edit_restaurant,
                    arguments: widget.restaurant);
                setState(() {
                  title = result;
                });
              },
              child: Icon(
                Icons.edit,
                color: Color(0xFFE52020),
              ),
            ),
            SizedBox(
              width: 8.0,
            ),
            FloatingActionButton(
              heroTag: null,
              backgroundColor: Colors.white,
              onPressed: () {
                Navigator.of(context).pushNamed(
                  Routes.app_camera,
                );
              },
              child: Icon(
                Icons.photo_camera,
                color: Color(0xFFE52020),
              ),
            ),
            SizedBox(
              width: 8.0,
            ),
            ClipRRect(
              borderRadius: BorderRadius.circular(30.0),
              child: RaisedButton(
                onPressed: () {
                  Navigator.of(context).pushNamed(Routes.create_edit_review,
                      arguments: CreateEditReviewScreenObject(
                          reviewModel: null,
                          restaurantId: widget.restaurant.uniqueId));
                },
                color: Color(0xFFE52020),
                padding: EdgeInsets.symmetric(vertical: 15.0, horizontal: 80.0),
                child: Row(
                  children: <Widget>[
                    Text(
                      "Write a review",
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 15.0,
                      ),
                    ),
                  ],
                ),
              ),
            )
          ],
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return new Container(
      height: 420.0,
      child: Stack(
        children: <Widget>[buildBg(), buildFg(), TopBackArrowView()],
      ),
    );
  }
}
