import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class TrackIcon extends StatelessWidget {
  final bool gpsTrackVal;
  final VoidCallback toggleTrackStatus;
  const TrackIcon({
    Key? key,
    required this.gpsTrackVal,
    required this.toggleTrackStatus,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Color iconColor = gpsTrackVal ? Colors.white : Colors.grey;
    Color? bgColor = gpsTrackVal ? Theme.of(context).primaryColor : null;

    return MaterialButton(
      color: bgColor,
      shape: const CircleBorder(),
      onPressed: () {
        FocusScope.of(context).requestFocus(FocusNode());
        toggleTrackStatus();
      },
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Icon(FontAwesomeIcons.locationArrow, size: 20, color: iconColor),
      ),
    );
  }
}
