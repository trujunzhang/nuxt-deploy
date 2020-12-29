import 'package:flutter/material.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';

Widget buildPhotoSectionTitle(
    BuildContext context) {
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
                // Navigator.of(context).pushNamed(Routes.online_photos_gridview,
                //     arguments: restaurant);
              },
              child: Icon(
                Icons.add_a_photo,
                color: Colors.grey,
              ),
            )),
      ],
    ),
  );
}

Widget seeAllPhoto(List<ParseModelPhotos> photosList) {
  return Container(
    margin: EdgeInsets.only(left: 6, right: 6, top: 6, bottom: 6),
    height: 60,
    child: Card(
        child: Container(
      padding: EdgeInsets.only(left: 16, right: 16),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(
            'See all '+ (photosList.length.toString()),
            style: TextStyle(color: Colors.grey),
          ),
          Icon(
            Icons.keyboard_arrow_right,
            color: Colors.grey,
          ),
        ],
      ),
    )),
  );
}

Widget pageLine = Divider(
  color: Colors.black,
);
