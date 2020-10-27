import 'package:flutter/material.dart';
import 'package:ieatta/src/logic/bloc.dart';
import 'package:ieatta/src/logic/restaurants_results.dart';

import '../hotel_app_theme.dart';

class FilterBarUI extends StatefulWidget {
  FilterBarUI({Key key, @required this.mapClick}) : super(key: key);

  final VoidCallback mapClick;

  @override
  _FilterBarUIState createState() => _FilterBarUIState();
}

class _FilterBarUIState extends State<FilterBarUI> {
  @override
  Widget build(BuildContext context) {
    return StreamBuilder(
        //This StreamBuilder is to fetch GpsTrack status.
        initialData: true,
        stream: bloc.gpsTrackStatusStream,
        builder: (BuildContext context, AsyncSnapshot gpsTrackSnapshot) {
          return StreamBuilder(
              //This StreamBuilder is to fetch restaurants count.
              initialData: 0,
              stream: bloc.restaurantCountValStream,
              builder: (BuildContext context,
                  AsyncSnapshot restaurantsCountSnapshot) {
                bool gpsTrackVal = gpsTrackSnapshot.data;
                int restaurantsCountVal = restaurantsCountSnapshot.data;
                return _buildBody(context, gpsTrackVal, restaurantsCountVal);
              });
        });
  }

  Widget _buildLeft(
      BuildContext context, bool gpsTrackVal, int restaurantsCountVal) {
    return Expanded(
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Text(
//                      '530 hotels found',
//                      'Auto location tracking',
          getRestaurantsCountInfo(
              gpsTrackVal: gpsTrackVal,
              restaurantsCountVal: restaurantsCountVal),
          style: TextStyle(
            fontWeight: FontWeight.w100,
            fontSize: 16,
          ),
        ),
      ),
    );
  }

  Widget _buildRight(BuildContext context, int restaurantsCountVal) {
    var textStyle = TextStyle(
      fontWeight: FontWeight.w100,
      fontSize: 16,
    );
    var iconColor = HotelAppTheme.buildLightTheme().primaryColor;
    if (restaurantsCountVal == 0) {
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

    if (restaurantsCountVal == 0) {
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
        widget.mapClick();
      },
      child: padding2,
    );
  }

  Widget _buildBody(
      BuildContext context, bool gpsTrackVal, int restaurantsCountVal) {
    return Container(
        child: Stack(
      children: <Widget>[
        Positioned(
          top: 0,
          left: 0,
          right: 0,
          child: Container(
            height: 24,
            decoration: BoxDecoration(
              color: HotelAppTheme.buildLightTheme().backgroundColor,
              boxShadow: <BoxShadow>[
                BoxShadow(
                    color: Colors.grey.withOpacity(0.2),
                    offset: const Offset(0, -2),
                    blurRadius: 8.0),
              ],
            ),
          ),
        ),
        Container(
          color: HotelAppTheme.buildLightTheme().backgroundColor,
          child: Padding(
            padding:
                const EdgeInsets.only(left: 16, right: 16, top: 8, bottom: 4),
            child: Row(
              children: <Widget>[
                _buildLeft(context, gpsTrackVal, restaurantsCountVal),
                Material(
                    color: Colors.transparent,
                    child: _buildRight(context, restaurantsCountVal)),
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
}
