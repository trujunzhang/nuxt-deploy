import 'package:flutter/material.dart';
import 'package:ieatta/src/components/restaurants/image.dart';

Widget buildSelectedIcon() {
  var img = Image.asset(
    'assets/placeholder/selection.png',
    fit: BoxFit.cover,
  );
  var container = Container(
    width: 30,
    height: 30,
    child: img,
  );
  return Padding(
    padding: EdgeInsets.only(right: 12, top: 12),
    child: container,
  );
}

Widget buildCoverImage(String restaurantCoverUrl) {
  Widget img =
      buildParseModelRestaurantsImageWithOriginalUrl(restaurantCoverUrl);
  Widget container = Container(
    width: 200,
    height: 200,
    child: img,
  );
  return Padding(
    padding: EdgeInsets.only(left: 12, bottom: 12),
    child: container,
  );
}

Widget buildCoverSectionTitle() {
  return Padding(
    padding:
        const EdgeInsets.only(left: 8.0, right: 8.0, top: 24, bottom: 10.0),
    child: Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: <Widget>[
        Text(
          "Select Cover",
          style: TextStyle(
            fontSize: 22.0,
            // color: Colors.black,
          ),
        ),
      ],
    ),
  );
}
