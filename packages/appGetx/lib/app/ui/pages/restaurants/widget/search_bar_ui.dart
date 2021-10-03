import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:get/get.dart';
import 'package:ieatta/common/colors/colors.dart';

import '../restaurants.controller.dart';

class TrackIcon extends GetWidget<RestaurantsController> {
  @override
  Widget build(BuildContext context) {
    return Obx(() => _buildIcon(context));
  }

  Widget _buildIcon(BuildContext context) {
    bool gpsTrackVal = controller.gpsTrack.value;
    Color iconColor =
        gpsTrackVal ? AppColors.backgroundLightColor : Colors.grey;
    Widget icon = Material(
      color: Colors.transparent,
      child: InkWell(
        borderRadius: const BorderRadius.all(
          Radius.circular(32.0),
        ),
        onTap: () {
          FocusScope.of(context).requestFocus(FocusNode());
          controller.toggleTrackStatus();
        },
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child:
              Icon(FontAwesomeIcons.locationArrow, size: 20, color: iconColor),
        ),
      ),
    );

    BoxDecoration decoration = gpsTrackVal
        ? BoxDecoration(
            color: AppColors.primaryLightColor,
            borderRadius: const BorderRadius.all(
              Radius.circular(38.0),
            ),
            boxShadow: <BoxShadow>[
              BoxShadow(
                  color: Colors.grey.withOpacity(0.4),
                  offset: const Offset(0, 2),
                  blurRadius: 8.0),
            ],
          )
        : BoxDecoration(
            borderRadius: const BorderRadius.all(
              Radius.circular(38.0),
            ),
          );

    return Container(decoration: decoration, child: icon);
  }
}

class SearchBarUI extends GetWidget<RestaurantsController> {
  @override
  Widget build(BuildContext context) {
    return Container(
        child: Padding(
      padding: const EdgeInsets.only(left: 16, right: 16, top: 8, bottom: 8),
      child: Row(
        children: <Widget>[
          TrackIcon(),
          Expanded(
            child: Padding(
              padding:
                  const EdgeInsets.only(left: 6, right: 6, top: 8, bottom: 8),
              child: Container(
                decoration: BoxDecoration(
                  color: AppColors.backgroundLightColor,
                  borderRadius: const BorderRadius.all(
                    Radius.circular(38.0),
                  ),
                  boxShadow: <BoxShadow>[
                    BoxShadow(
                        color: Colors.grey.withOpacity(0.2),
                        offset: const Offset(0, 2),
                        blurRadius: 8.0),
                  ],
                ),
                child: Padding(
                  padding: const EdgeInsets.only(
                      left: 16, right: 16, top: 4, bottom: 4),
                  child: TextField(
                    controller: controller.textEditingController,
                    onChanged: (String txt) {
                      controller.updateSearch(txt);
                    },
                    style: const TextStyle(fontSize: 18, color: Colors.black),
                    cursorColor: AppColors.primaryLightColor,
                    decoration: InputDecoration(
                      border: InputBorder.none,
                      hintText: 'London...',
                    ),
                  ),
                ),
              ),
            ),
          ),
          Container(
            decoration: BoxDecoration(
              color: AppColors.primaryLightColor,
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
                  FocusScope.of(context).requestFocus(FocusNode());
                },
                child: Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Icon(FontAwesomeIcons.search,
                      size: 20, // icon
                      color: AppColors.backgroundLightColor // color
                      ),
                ),
              ),
            ),
          ),
        ],
      ),
    ));
  }
}
