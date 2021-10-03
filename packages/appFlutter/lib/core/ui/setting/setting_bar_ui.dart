import 'package:flutter/material.dart';
import 'package:ieatta/common/langs/l10n.dart';

class SettingBarUI extends StatefulWidget {
  SettingBarUI({Key? key}) : super(key: key);

  @override
  _SettingBarUIState createState() => _SettingBarUIState();
}

class _SettingBarUIState extends State<SettingBarUI> {
  @override
  Widget build(BuildContext context) {
    return Container(
        // color: Theme.of(context).accentColor,
        child: Padding(
      padding: EdgeInsets.only(top: MediaQuery.of(context).padding.top + 14 + 6, left: 8, right: 8),
      child: Row(
        children: <Widget>[
          Expanded(
            child: Center(
              child: Text(
                S.of(context).settingAppTitle,
                style: TextStyle(
                  fontWeight: FontWeight.w600,
                  fontSize: 18,
                ),
              ),
            ),
          ),
        ],
      ),
    ));
  }
}
