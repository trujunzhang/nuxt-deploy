import 'package:app_config/app_config.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/routes/params_helper.dart';

Widget buildPhotosSectionTitle(PhotoType photoType, String relatedId) {
  return Padding(
    padding: const EdgeInsets.only(left: 8.0, right: 8.0, top: 16, bottom: 2.0),
    child: Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: <Widget>[
        const Text(
          "Business Photos",
          style: AppTextStyle.sectionTitle,
        ),
        SizedBox(
            width: 40,
            height: 40,
            child: InkWell(
              onTap: () {
                Get.toNamed(ParamsHelper.getTakeCameraPath(
                  photoType: photoType,
                  relatedId: relatedId,
                ));
              },
              child: const Icon(
                Icons.add_a_photo,
                color: Colors.grey,
              ),
            )),
      ],
    ),
  );
}
