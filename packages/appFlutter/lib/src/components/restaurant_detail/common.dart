import 'package:flutter/material.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';

Widget buildPhotoSectionTitle(BuildContext context, ParseModelRestaurants restaurant) {
  return Padding(
    padding: EdgeInsets.symmetric(horizontal: 8.0),
    child: Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: <Widget>[
        Text(
          "Business Photo",
          style: TextStyle(fontSize: 22.0, fontFamily: "SF-Pro-Display-Bold"),
        ),
        Container(
//          color: Colors.red,
            width: 40,
            height: 40,
            child: InkWell(
              onTap: () {
                Navigator.of(context).pushNamed(Routes.online_photos_gridview,
                    arguments: restaurant);
              },
              child: Icon(
                Icons.arrow_forward,
                color: Colors.black,
              ),
            )),
      ],
    ),
  );
}

Widget buildTextSectionTitle(String text) {
  return Padding(
    padding: const EdgeInsets.only(left: 8.0, right: 8.0, bottom: 24.0),
    child: Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: <Widget>[
        Text(
          text,
          style: TextStyle(fontSize: 22.0, fontFamily: "SF-Pro-Display-Bold"),
        ),
      ],
    ),
  );
}

Widget pageLine = Divider(
  color: Colors.black,
);
