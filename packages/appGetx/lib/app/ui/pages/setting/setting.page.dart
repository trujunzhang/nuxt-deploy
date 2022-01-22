import 'package:app_language/langs/l10n.dart';
import 'package:flutter/material.dart';
import 'package:ieatta/app/ui/widgets/dialog/signout_dialog.dart';
import 'package:my_plugin/my_plugin.dart';

import 'setting_language_actions.dart';

class SettingScreen extends StatelessWidget {
  const SettingScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BaseListViewPage(
        appBar: MyAppBar(
          centerTitle: true,
          title: MyTitle(S.of(context).drawerMenuItemSettings),
          leadingType: AppBarBackType.None,
        ),
        items: _buildLayoutSection(context));
  }

  List<Widget> _buildLayoutSection(BuildContext context) {
    return [
      ListTile(
        title: Text(S.of(context).settingThemeListTitle),
        subtitle: Text(S.of(context).settingThemeListSubTitle),
        trailing: Switch(
          activeColor: Theme.of(context).appBarTheme.color,
          activeTrackColor: Theme.of(context).textTheme.headline6!.color,
          value: ThemeService().loadThemeFromBox(),
          onChanged: (booleanValue) {
            ThemeService().switchTheme();
          },
        ),
      ),
      ListTile(
        title: Text(S.of(context).settingLanguageListTitle),
        subtitle: Text(S.of(context).settingLanguageListSubTitle),
        trailing: SettingLanguageActions(),
      ),
      ListTile(
        title: Text(S.of(context).settingLogoutListTitle),
        subtitle: Text(S.of(context).settingLogoutListSubTitle),
        trailing: ElevatedButton(
            onPressed: () {
              showSignOutDialog(context);
            },
            child: Text(S.of(context).settingLogoutButton)),
      )
    ];
  }
}
