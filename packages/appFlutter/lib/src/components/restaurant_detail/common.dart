import 'package:flutter/material.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';

Widget buildPhotoSectionTitle(
    BuildContext context, ParseModelRestaurants restaurant) {
  return Padding(
    padding: const EdgeInsets.only(left: 8.0, right: 8.0, top: 16, bottom: 4.0),
    child: Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: <Widget>[
        Text(
          "Business Photo",
          style: TextStyle(
            fontSize: 18.0,
            fontWeight: FontWeight.w400,
          ),
        ),
        Container(
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

Widget pageLine = Divider(
  color: Colors.black,
);
