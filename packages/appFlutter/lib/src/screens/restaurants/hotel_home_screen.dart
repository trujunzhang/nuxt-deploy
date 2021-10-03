import 'package:flutter/material.dart';
import 'package:ieatta/core/filter/filter_models.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/providers/home_state.dart';
import 'package:ieatta/src/screens/map/restaurants_map_page.dart';
import 'package:ieatta/util/app_navigator.dart';
import 'package:location/location.dart';
import 'package:provider/provider.dart';

import 'body/page_body.dart';
import 'contest_tab_header.dart';
import 'empty/search_empty.dart';
import 'empty/track_empty.dart';
import 'hotel_app_theme.dart';
import 'widget/app_bar_ui.dart';
import 'widget/filter_bar_ui.dart';
import 'widget/search_bar_ui.dart';

class HotelHomeScreen extends StatefulWidget {
  @override
  _HotelHomeScreenState createState() => _HotelHomeScreenState();
}

class _HotelHomeScreenState extends State<HotelHomeScreen> with TickerProviderStateMixin {
  final ScrollController _scrollController = ScrollController();

  List<ParseModelRestaurants> restaurantList = [];

  Widget buildBody(BuildContext context) {
    LocationData? locationVal = Provider.of<LocationData?>(context);
    HomeState homeState = Provider.of<HomeState>(context, listen: true);
    bool gpsTrackVal = homeState.getGpsTrack();
    String searchVal = homeState.getSearch();
    if (gpsTrackVal && locationVal == null) {
      return Center(
        child: CircularProgressIndicator(),
      );
    }

    if (gpsTrackVal && locationVal != null) {
      // enable gps track.
      restaurantList = FilterModels.instance.getTrackingExploreList(context, locationVal);

      return (restaurantList.length != 0) ? PageBody(restaurantList: restaurantList) : TrackEmpty();
    }
    if (searchVal != '') {
      // Search model.
      restaurantList = FilterModels.instance.getSearchedExploreList(context, searchVal);
      return (restaurantList.length != 0) ? PageBody(restaurantList: restaurantList) : SearchEmpty();
    }
    // all
    restaurantList = FilterModels.instance.getAllRestaurantsList(context);
    return PageBody(restaurantList: restaurantList);
  }

  @override

  Widget build(BuildContext context) {
    var body = Expanded(
        child: NestedScrollView(
            controller: _scrollController,
            headerSliverBuilder: (BuildContext context, bool innerBoxIsScrolled) {
              return <Widget>[
                SliverList(
                  delegate: SliverChildBuilderDelegate((BuildContext context, int index) {
                    return Column(
                      children: <Widget>[
                        SearchBarUI(),
                      ],
                    );
                  }, childCount: 1),
                ),
                SliverPersistentHeader(
                  pinned: true,
                  floating: true,
                  delegate: ContestTabHeader(
                    FilterBarUI(
                      mapClick: () {
                        AppNavigator.popFullScreen(
                          context,
                          RestaurantsMapPage(),
                          restaurantList,
                        );
                      },
                    ),
                  ),
                ),
              ];
            },
            body: buildBody(context)));
    return Theme(
      data: HotelAppTheme.buildLightTheme(),
      child: Container(
        child: Scaffold(
          body: Stack(
            children: <Widget>[
              InkWell(
                splashColor: Colors.transparent,
                focusColor: Colors.transparent,
                highlightColor: Colors.transparent,
                hoverColor: Colors.transparent,
                onTap: () {
                  FocusScope.of(context).requestFocus(FocusNode());
                },
                child: Column(
                  children: <Widget>[
                    AppBarUI(), // top bar
                    body // dody
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

}
