import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:get/get.dart';

import '../index.dart';

class SearchBar extends GetWidget<RestaurantsController> {
  const SearchBar({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    //   return Expanded(
    //     child: RoundedInputField(
    //       textEditingController: controller.textEditingController,
    //       hintText: 'London...',
    //       icon: Icons.search,
    //       // cursorColor: Colors.black,
    //       editTextBackgroundColor: Colors.grey[200],
    //       iconColor: Colors.black,
    //       onChanged: (value) {
    //         controller.state.updateSearch(value);
    //       },
    //     ),
    //   );
    // }

    // Widget buildxxx(BuildContext context) {
    return Expanded(
      child: Padding(
        padding: const EdgeInsets.only(left: 6, right: 6, top: 8, bottom: 8),
        child: Container(
          decoration: const BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.all(
              Radius.circular(38.0),
            ),
          ),
          child: Padding(
            padding:
                const EdgeInsets.only(left: 16, right: 16, top: 4, bottom: 4),
            child: TextField(
              controller: controller.textEditingController,
              onChanged: (String txt) {
                controller.state.updateSearch(txt);
              },
              style: const TextStyle(fontSize: 18, color: Colors.black),
              // cursorColor: AppColors.primaryLightColor,
              decoration: const InputDecoration(
                fillColor: Colors.white,
                icon: Icon(
                  Icons.search,
                  color: Colors.black,
                ),
                border: InputBorder.none,
                hintText: 'London...',
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class TrackIcon extends GetWidget<RestaurantsController> {
  const TrackIcon({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Obx(() => _buildIcon(context));
  }

  Widget _buildIcon(BuildContext context) {
    bool gpsTrackVal = controller.state.gpsTrack.value;
    Color iconColor = gpsTrackVal ? Colors.white : Colors.grey;
    Color? bgColor = gpsTrackVal ? Theme.of(context).primaryColor : null;

    return MaterialButton(
      color: bgColor,
      shape: const CircleBorder(),
      onPressed: () {
        FocusScope.of(context).requestFocus(FocusNode());
        controller.state.toggleTrackStatus();
      },
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Icon(FontAwesomeIcons.locationArrow, size: 20, color: iconColor),
      ),
    );
  }
}

class SearchBarUI extends GetWidget<RestaurantsController> {
  const SearchBarUI({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(left: 4, right: 4, top: 4, bottom: 4),
      child: Row(
        children: const <Widget>[
          // Middle search textfield.
          SearchBar(),
          // Left toggle track icon.
          TrackIcon(),
        ],
      ),
    );
  }
}
