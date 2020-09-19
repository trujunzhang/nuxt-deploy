import 'package:flutter/material.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/core/enums/permission_status.dart';
import 'package:ieatta/src/screens/restaurants/hotel_home_screen.dart';
import 'package:location/location.dart' as GpsLocation;
import 'package:permission_handler/permission_handler.dart'
    as PermissionHandler;

import 'bottom_navigation_view/bottom_bar_view.dart';
import 'bottom_navigation_view/models/tabIcon_data.dart';
import 'fitness_app_theme.dart';
import 'no_permission_view.dart';

class FitnessAppHomeScreen extends StatefulWidget {
  @override
  _FitnessAppHomeScreenState createState() => _FitnessAppHomeScreenState();
}

class _FitnessAppHomeScreenState extends State<FitnessAppHomeScreen>
    with TickerProviderStateMixin {
  // Gps Location.
  AppPermissionStatus _permissionStatus = AppPermissionStatus.Undetermined;

  // Main UI's animation.
  AnimationController animationController;

  List<TabIconData> tabIconsList = TabIconData.tabIconsList;

  Widget tabBody = Container(
    color: FitnessAppTheme.background,
  );

  requestAppPermission() async {
    // Location
    GpsLocation.Location location = new GpsLocation.Location();
    bool _serviceEnabled;
    GpsLocation.PermissionStatus _permissionGranted;

    // Enable location service.
    _serviceEnabled = await location.serviceEnabled();
    if (!_serviceEnabled) {
      _serviceEnabled = await location.requestService();
    }

    // Enable location permission.
    _permissionGranted = await location.hasPermission();
    if (_permissionGranted == GpsLocation.PermissionStatus.denied) {
      _permissionGranted = await location.requestPermission();
      if (_permissionGranted != GpsLocation.PermissionStatus.granted) {
        setState(() {
          _permissionStatus = AppPermissionStatus.Denied;
        });
        return;
      }
    }

    await location.hasPermission();
    if (_permissionGranted == GpsLocation.PermissionStatus.denied) {
      setState(() {
        _permissionStatus = AppPermissionStatus.Denied;
      });
      return;
    }

    // Other
    Map<PermissionHandler.Permission, PermissionHandler.PermissionStatus>
        permissions = await [
      PermissionHandler.Permission.microphone, // audio
      PermissionHandler.Permission.storage, // local store
      PermissionHandler.Permission.camera // take photo
    ].request();
    if (permissions[PermissionHandler.Permission.microphone] ==
                PermissionHandler.PermissionStatus.granted // audio
            &&
            permissions[PermissionHandler.Permission.storage] ==
                PermissionHandler.PermissionStatus.granted // local store
            &&
            permissions[PermissionHandler.Permission.camera] ==
                PermissionHandler.PermissionStatus.granted // take photo
        ) {
      setState(() {
        _permissionStatus = AppPermissionStatus.Granted;
      });
    } else {
      setState(() {
        _permissionStatus = AppPermissionStatus.Denied;
      });
    }
  }

  @override
  void initState() {
    requestAppPermission();

    tabIconsList = TabIconData.resetTabIconsList();
    animationController = AnimationController(
        duration: const Duration(milliseconds: 600), vsync: this);
    tabBody = HotelHomeScreen();
    super.initState();
  }

  @override
  void dispose() {
    animationController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    switch (_permissionStatus) {
      case AppPermissionStatus.Undetermined:
        {
          return Container();
        }
      case AppPermissionStatus.Granted:
        {
          return buildTabs(context);
        }
      case AppPermissionStatus.Denied:
        {
          return NoPermissionView(requestAppPermission: requestAppPermission);
        }
    }

    return Container();
  }

  Widget buildTabs(BuildContext context) {
    return Container(
      color: FitnessAppTheme.background,
      child: Scaffold(
          backgroundColor: Colors.transparent,
          body: Stack(
            children: <Widget>[
              Container(
                color: Colors.transparent,
                padding: EdgeInsets.only(
                    bottom: 64 + MediaQuery.of(context).padding.bottom),
                child: tabBody,
              ),
              bottomBar(),
            ],
          )),
    );
  }

  Widget bottomBar() {
    return Column(
      children: <Widget>[
        const Expanded(
          child: SizedBox(),
        ),
        BottomBarView(
          tabIconsList: tabIconsList,
          addClick: () {
            Navigator.of(context).pushNamed(
              Routes.app_camera,
            );
          },
          changeIndex: changeIndex,
        ),
      ],
    );
  }

  changeIndex(int index) {
    if (!mounted) {
      return;
    }
    if (index == 0 || index == 2) {
      animationController.reverse().then<dynamic>((data) {
        setState(() {
//          tabBody = MyDiaryScreen(animationController: animationController);
        });
      });
    } else if (index == 1 || index == 3) {
      animationController.reverse().then<dynamic>((data) {
        setState(() {
//          tabBody = TrainingScreen(animationController: animationController);
        });
      });
    }
  }
}
