import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:ieatta/src/providers/home_state.dart';
import 'package:provider/provider.dart';

import '../hotel_app_theme.dart';

class SearchBarUI extends StatefulWidget {
  SearchBarUI({Key key}) : super(key: key);

  @override
  _SearchBarUIState createState() => _SearchBarUIState();
}

class _SearchBarUIState extends State<SearchBarUI> {
  Widget _buildGpsTrackBtn(BuildContext context) {
    HomeState homeState = Provider.of<HomeState>(context, listen: true);
    bool gpsTrackVal = homeState.getGpsTrack();
    if (gpsTrackVal) {
      return Container(
        decoration: BoxDecoration(
          color: HotelAppTheme.buildLightTheme().primaryColor,
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
              // bloc.gpsTrackStatus(false);
              homeState.setGpsTrack(false);
            },
            child: Padding(
              padding: const EdgeInsets.all(16.0),
              child: Icon(FontAwesomeIcons.locationArrow,
                  size: 20,
                  color: HotelAppTheme.buildLightTheme().backgroundColor),
            ),
          ),
        ),
      );
    }
    return Container(
      decoration: BoxDecoration(
        borderRadius: const BorderRadius.all(
          Radius.circular(38.0),
        ),
      ),
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          borderRadius: const BorderRadius.all(
            Radius.circular(32.0),
          ),
          onTap: () {
            FocusScope.of(context).requestFocus(FocusNode());
            // bloc.gpsTrackStatus(true);
            homeState.setGpsTrack(true);
          },
          child: Padding(
            padding: const EdgeInsets.all(16.0),
            child: Icon(FontAwesomeIcons.locationArrow,
                size: 20, color: Colors.grey),
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    HomeState homeState = Provider.of<HomeState>(context, listen: false);
    return Container(
        child: Padding(
      padding: const EdgeInsets.only(left: 16, right: 16, top: 8, bottom: 8),
      child: Row(
        children: <Widget>[
          _buildGpsTrackBtn(context),
          Expanded(
            child: Padding(
              padding:
                  const EdgeInsets.only(left: 6, right: 6, top: 8, bottom: 8),
              child: Container(
                decoration: BoxDecoration(
                  color: HotelAppTheme.buildLightTheme().backgroundColor,
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
                    onChanged: (String txt) {
                      homeState.setSearch(txt);
                      // bloc.gpsTrackStatus(false);
                      // bloc.feedSearchVal(txt);
                    },
                    style: const TextStyle(
                      fontSize: 18,
                    ),
                    cursorColor: HotelAppTheme.buildLightTheme().primaryColor,
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
              color: HotelAppTheme.buildLightTheme().primaryColor,
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
                      size: 20,
                      color: HotelAppTheme.buildLightTheme().backgroundColor),
                ),
              ),
            ),
          ),
        ],
      ),
    ));
  }
}
