import 'package:flutter/material.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/camera/screens/types.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:ieatta/src/screens/edit/recipe/recipe_provider_screen.dart';

Widget buildMenusSectionTitle(BuildContext context, String restaurantId) {
  return Padding(
    padding: const EdgeInsets.only(left: 8.0, right: 8.0, top: 16, bottom: 4.0),
    child: Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: <Widget>[
        Text(
          "On the Menu",
          style: TextStyle(
            fontSize: 17.0,
            fontWeight: FontWeight.w400,
          ),
        ),
        Container(
            width: 40,
            height: 40,
            child: InkWell(
              onTap: () {
                Navigator.of(context).pushNamed(Routes.create_edit_recipe,
                    arguments: CreateEditRecipeScreenObject(
                        restaurantId: restaurantId));
              },
              child: Icon(
                Icons.add,
                color: Colors.grey,
              ),
            )),
      ],
    ),
  );
}

Widget buildPhotosSectionTitle(
    BuildContext context, PhotoType photoType, String relatedId) {
  return Padding(
    padding: const EdgeInsets.only(left: 8.0, right: 8.0, top: 16, bottom: 4.0),
    child: Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: <Widget>[
        Text(
          "Business Photos",
          style: TextStyle(
            fontSize: 17.0,
            fontWeight: FontWeight.w400,
          ),
        ),
        Container(
            width: 40,
            height: 40,
            child: InkWell(
              onTap: () {
                Navigator.of(context).pushNamed(Routes.app_camera,
                    arguments: CameraScreenObject(
                        photoType: photoType, relatedId: relatedId));
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

Widget seeAllList(int len) {
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
            'See all ' + (len.toString()),
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
