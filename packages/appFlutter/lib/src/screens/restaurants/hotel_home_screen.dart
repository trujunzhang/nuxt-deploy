import 'package:flutter/material.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/logic/bloc.dart';
import 'package:ieatta/src/logic/restaurants_results.dart';
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

class _HotelHomeScreenState extends State<HotelHomeScreen>
    with TickerProviderStateMixin {
  final ScrollController _scrollController = ScrollController();

  // Location
  Location location = new Location();
  List<ParseModelRestaurants> restaurantList = [];

  @override
  void initState() {
    super.initState();
  }

  @override
  void dispose() {
    super.dispose();
  }

  Widget buildRestaurantsList(
      {@required AsyncSnapshot locationSnapshot, // Location
      @required AsyncSnapshot gpsTrackSnapshot, // gps track
      @required AsyncSnapshot searchSnapshot, // search
      @required AsyncSnapshot fbSnapshot // Final, facebook collection.
      }) {
    if (locationSnapshot.hasData == false) {
      return Center(
        child: CircularProgressIndicator(),
      );
    }
//    print(locationSnapshot.data);
//    print(gpsTrackSnapshot.data);
//    print(searchSnapshot.data);
    LocationData locationVal = locationSnapshot.data;
    bool gpsTrackVal = gpsTrackSnapshot.data;
    String searchVal = searchSnapshot.data;
    if (fbSnapshot.hasError) {}
    if (!fbSnapshot.hasData) {
      return Center(child: CircularProgressIndicator());
    }

    if (gpsTrackVal && locationVal != null) {
      // enable gps track.
      restaurantList =
          getTrackingExploreList(fbSnapshot.data.documents, locationVal);

      return (restaurantList.length != 0)
          ? PageBody(restaurantList: restaurantList)
          : TrackEmpty();
    }
    if (searchVal != null && searchVal != '') {
      // Search model.
      restaurantList =
          getSearchedExploreList(fbSnapshot.data.documents, searchVal);
      return (restaurantList.length != 0)
          ? PageBody(restaurantList: restaurantList)
          : SearchEmpty();
    }
    // all
    restaurantList = parseRestaurants(fbSnapshot.data.documents);
    return PageBody(restaurantList: restaurantList);
  }

  Widget buildBody() {
    return StreamBuilder(
        //This StreamBuilder is to fetch location.
        stream: location.onLocationChanged,
        builder: (BuildContext context, AsyncSnapshot locationSnapshot) {
          return StreamBuilder(
              //This StreamBuilder is to fetch GpsTrack status.
              initialData: true,
//              initialData: false,
              stream: bloc.gpsTrackStatusStream,
              builder: (BuildContext context, AsyncSnapshot gpsTrackSnapshot) {
                return StreamBuilder(
                  //This StreamBuilder is to fetch Search Queries.
                  initialData: '',
                  stream: bloc.recieveSearchVal,
                  builder:
                      (BuildContext context, AsyncSnapshot searchSnapshot) {
                    return StreamBuilder(
                      //This StreamBuilder is to fetch firebase collection.
                      stream:
                          Provider.of<FirestoreDatabase>(context, listen: false)
                              .restaurantStream(),
                      builder:
                          (BuildContext context, AsyncSnapshot fbSnapshot) {
                        return buildRestaurantsList(
                            locationSnapshot: locationSnapshot,
                            gpsTrackSnapshot: gpsTrackSnapshot,
                            searchSnapshot: searchSnapshot,
                            fbSnapshot: fbSnapshot);
                      },
                    );
                  },
                );
              });
        });
  }

  @override
  Widget build(BuildContext context) {
    var body = Expanded(
        child: NestedScrollView(
            controller: _scrollController,
            headerSliverBuilder:
                (BuildContext context, bool innerBoxIsScrolled) {
              return <Widget>[
                SliverList(
                  delegate: SliverChildBuilderDelegate(
                      (BuildContext context, int index) {
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
                        Navigator.of(context).pushNamed(Routes.map_restaurant,
                            arguments: restaurantList);
                      },
                    ),
                  ),
                ),
              ];
            },
            body: buildBody()));
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
