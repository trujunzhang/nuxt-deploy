import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/data/enum/fb_collections.dart';
import 'package:ieatta/app/routes/params_helper.dart';

Widget buildPhotosSectionTitle(PhotoType photoType, String relatedId) {
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
                Get.toNamed(ParamsHelper.getTakeCameraPath(
                  photoType: photoType,
                  relatedId: relatedId,
                ));
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
