import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/common/colors/colors.dart';

import '../restaurants.controller.dart';

class FilterBarUI extends GetWidget<RestaurantsController> {
  @override
  Widget build(BuildContext context) {
    return Obx(() => _buildBody(context));
  }

  Widget _buildBody(BuildContext context) {
    return Container(
        child: Stack(
      children: <Widget>[
        Positioned(
          top: 0,
          left: 0,
          right: 0,
          child: Container(
            height: 24,
            // decoration: BoxDecoration(
            // color: AppColors.backgroundLightColor,
            //   boxShadow: <BoxShadow>[
            //     BoxShadow(
            //         color: Colors.grey.withOpacity(0.2),
            //         offset: const Offset(0, -2),
            //         blurRadius: 8.0),
            //   ],
            // ),
          ),
        ),
        Container(
          // color: AppColors.backgroundLightColor,
          color: Theme.of(context).colorScheme.primaryVariant,
          child: Padding(
            padding:
                const EdgeInsets.only(left: 16, right: 16, top: 8, bottom: 4),
            child: Row(
              children: <Widget>[
                _buildLeft(),
                Material(
                    color: Colors.transparent, child: _buildRight(context)),
              ],
            ),
          ),
        ),
        const Positioned(
          top: 0,
          left: 0,
          right: 0,
          child: Divider(
            height: 1,
          ),
        )
      ],
    ));
  }

  Widget _buildLeft() {
    return Expanded(
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Text(
          controller.getRestaurantsCountInfo(),
          style: TextStyle(
            fontWeight: FontWeight.w100,
            fontSize: 16,
          ),
        ),
      ),
    );
  }

  Widget _buildRight(BuildContext context) {
    int restaurantsCount = controller.restaurantsCount.value;
    var textStyle = TextStyle(
      fontWeight: FontWeight.w100,
      fontSize: 16,
    );
    Color? iconColor = AppColors.primaryLightColor;
    if (restaurantsCount == 0) {
      textStyle = TextStyle(
          fontWeight: FontWeight.w100, fontSize: 16, color: Colors.grey);
      iconColor = Colors.grey;
    }
    var padding2 = Padding(
      padding: const EdgeInsets.only(left: 8),
      child: Row(
        children: <Widget>[
          Text(
            'View Map',
            style: textStyle,
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Icon(Icons.map, color: iconColor),
          ),
        ],
      ),
    );

    if (restaurantsCount == 0) {
      return padding2;
    }

    return InkWell(
      focusColor: Colors.transparent,
      highlightColor: Colors.transparent,
      hoverColor: Colors.transparent,
      splashColor: Colors.grey.withOpacity(0.2),
      borderRadius: const BorderRadius.all(
        Radius.circular(4.0),
      ),
      onTap: () {
        FocusScope.of(context).requestFocus(FocusNode());
        controller.onShowMapIconPress();
      },
      child: padding2,
    );
  }
}
