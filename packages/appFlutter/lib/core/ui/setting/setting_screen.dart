import 'package:flutter/material.dart';
import 'package:ieatta/common/langs/l10n.dart';
import 'package:ieatta/components/components.dart';
import 'package:ieatta/core/providers/auth_provider.dart';
import 'package:ieatta/util/app_navigator.dart';
import 'package:provider/provider.dart';

import 'setting_language_actions.dart';

class SettingScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return BaseScaffold(
        appBar: MyAppBar(
          centerTitle: true,
          title: MyTitle(S.of(context).drawerMenuItemSettings),
          leadingType: AppBarBackType.None,
        ),
        body: _buildLayoutSection(context));
  }

  Widget _buildLayoutSection(BuildContext context) {
    final authProvider = Provider.of<AuthProvider>(context, listen: false);
    return Column(
      children: <Widget>[
        // ListTile(
        //   title: Text(
        //       S.of(context).settingThemeListTitle")),
        //   subtitle: Text(AppLocalizations.of(context)!
        //       .translate("settingThemeListSubTitle")),
        //   trailing: Switch(
        //     activeColor: Theme.of(context).appBarTheme.color,
        //     activeTrackColor: Theme.of(context).textTheme.headline6.color,
        //     value: Provider.of<ThemeProvider>(context).isDarkModeOn,
        //     onChanged: (booleanValue) {
        //       Provider.of<ThemeProvider>(context, listen: false)
        //           .updateTheme(booleanValue);
        //     },
        //   ),
        // ),
        ListTile(
          title: Text(S.of(context).settingLanguageListTitle),
          subtitle: Text(S.of(context).settingLanguageListSubTitle),
          trailing: SettingLanguageActions(),
        ),
        ListTile(
          title: Text(S.of(context).settingLogoutListTitle),
          subtitle: Text(S.of(context).settingLogoutListSubTitle),
          trailing: RaisedButton(
              onPressed: () {
                showAlertDialog(context, authProvider);
              },
              child: Text(S.of(context).settingLogoutButton)),
        )
      ],
    );
  }

  showAlertDialog(BuildContext context, AuthProvider authProvider) {
    // set up the buttons
    Widget cancelButton = TextButton(
      child: Text(S.of(context).alertDialogCancelBtn),
      onPressed: () {
        AppNavigator.goBack(context);
      },
    );
    Widget continueButton = TextButton(
      child: Text(S.of(context).alertDialogYesBtn),
      onPressed: () async {
        await authProvider.signOut();
      },
    );
    // set up the AlertDialog
    AlertDialog alert = AlertDialog(
      title: Text(S.of(context).alertDialogTitle),
      content: Text(S.of(context).alertDialogMessage),
      actions: [
        cancelButton,
        continueButton,
      ],
    );
    // show the dialog
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return alert;
      },
    );
  }
}
