import 'package:flutter/material.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';

import '../hotel_app_theme.dart';
import 'hotel_list_view.dart';

class PageBody extends StatefulWidget {
  PageBody({Key key, this.restaurantList}) : super(key: key);

  final List<ParseModelRestaurants> restaurantList;

  @override
  _PageBodyState createState() => _PageBodyState();
}

class _PageBodyState extends State<PageBody> {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Container(
        color: HotelAppTheme.buildLightTheme().backgroundColor,
        child: ListView.builder(
          itemCount: widget.restaurantList.length,
          padding: const EdgeInsets.only(top: 8),
          scrollDirection: Axis.vertical,
          itemBuilder: (BuildContext context, int index) {
            return Padding(
              padding: const EdgeInsets.only(
                  left: 24, right: 24, top: 8, bottom: 16),
              child: HotelListView(
                callback: () {
                  Navigator.of(context).pushNamed(
                      Routes.detail_restaurant,
                      arguments: widget.restaurantList[index].uniqueId);
                },
                restaurantData: widget.restaurantList[index],
              ),
            );
          },
        ),
      ),
    );
  }
}
