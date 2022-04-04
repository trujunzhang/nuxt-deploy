import 'dart:async';

import 'package:app_config/app_config.dart';
import 'package:app_language/langs/l10n.dart';
import 'package:app_language/services/localization_service.dart';
import 'package:app_theme/app_theme.dart';
import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:my_plugin/my_plugin.dart';

import 'app/app.binding.dart';
import 'app/routes/app_pages.dart';

class MyApp extends StatefulWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  void initState() {
    _syncLocalDb();
    super.initState();
  }

  Future<void> _syncLocalDb() async {
    bool isNetworkPresent = await NetworkCheck().check();
    if (isNetworkPresent) {
      // TODO: DJZHANG
      await FirebaseSync.start();
    }

    // For test
    // final db = await database.DBProvider.db.database;
    // await SqlPhotosHelper.generateDatabase();
  }

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      initialBinding: AppBinding(),
      title: AppConfigs.appName,
      debugShowCheckedModeBanner: false,
      // defaultTransition: Transition.fade,
      // STYLE
      theme: AppLightTheme().buildTheme(context),
      darkTheme: AppDarkTheme().buildTheme(context),
      themeMode: ThemeService().theme,
      // TRANSLATIONS
      // locale: languageProviderRef.appLocale,
      // locale: window.locale,
      locale: LocalizationService().getCurrentLocale(),
      // translations will be displayed in that locale
      //List of all supported locales
      supportedLocales: S.delegate.supportedLocales,
      //These delegates make sure that the localization data for the proper language is loaded
      localizationsDelegates: const [
        FormBuilderLocalizations.delegate,
        //Built-in localization of basic text for Material widgets (means those default Material widget such as alert dialog icon text)
        GlobalMaterialLocalizations.delegate,
        //Built-in localization for text direction LTR/RTL
        GlobalWidgetsLocalizations.delegate,
        GlobalCupertinoLocalizations.delegate,
        S.delegate,
      ],
      initialRoute: Routes.INITIAL,
      getPages: AppPages.pages,
    );
  }
}
