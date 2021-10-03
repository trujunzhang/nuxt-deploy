import 'dart:async';

import 'package:get_storage/get_storage.dart';
import 'package:firebase_analytics/firebase_analytics.dart';
import 'package:firebase_analytics/observer.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_crashlytics/firebase_crashlytics.dart';
import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/data/provider/firebase_sync.dart';
import 'package:ieatta/app/data/services/localization_service.dart';
import 'package:ieatta/app/data/services/sentry_service.dart';
import 'package:ieatta/app/data/services/theme_service.dart';
import 'package:my_plugin/my_plugin.dart';
import 'package:sentry_flutter/sentry_flutter.dart';
import 'package:oktoast/oktoast.dart';

import 'app/app.binding.dart';
import 'app/routes/app_pages.dart';
import 'common/langs/l10n.dart';
import 'common/theme/dark_theme.dart';
import 'common/theme/light_theme.dart';

void main() async {
  // firebase initialize
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  await GetStorage.init();
  Log.init();

  // Run the app
  runZonedGuarded(() {
    SentryService.instance.initialize();
    runApp(OKToast(
        child: MyApp(),
        backgroundColor: Colors.black54,
        textPadding:
            const EdgeInsets.symmetric(horizontal: 16.0, vertical: 10.0),
        radius: 20.0,
        position: ToastPosition.bottom));
  }, (exception, stackTrace) async {
    FirebaseCrashlytics.instance.recordError(exception, stackTrace);
    await Sentry.captureException(exception, stackTrace: stackTrace);
  });
}

class MyApp extends StatefulWidget {
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
    if (Device.isWeb == false) {
      // TODO: DJZHANG
      var firebaseSync = FirebaseSync();
      await firebaseSync.start();
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
      title: 'Flutter IEATTA',
      debugShowCheckedModeBanner: false,
      defaultTransition: Transition.fade,
      // STYLE
      theme: AppLightTheme.lightTheme,
      darkTheme: AppDarkTheme.darkTheme,
      themeMode: ThemeService().theme,
      // TRANSLATIONS
      // locale: languageProviderRef.appLocale,
      // locale: window.locale,
      locale: LocalizationService().getCurrentLocale(),
      // translations will be displayed in that locale
      //List of all supported locales
      supportedLocales: S.delegate.supportedLocales,
      //These delegates make sure that the localization data for the proper language is loaded
      localizationsDelegates: [
        //Built-in localization of basic text for Material widgets (means those default Material widget such as alert dialog icon text)
        GlobalMaterialLocalizations.delegate,
        //Built-in localization for text direction LTR/RTL
        GlobalWidgetsLocalizations.delegate,
        GlobalCupertinoLocalizations.delegate,
        S.delegate,
      ],
      navigatorObservers: [
        FirebaseAnalyticsObserver(analytics: FirebaseAnalytics())
      ],
      initialRoute: Routes.INITIAL,
      getPages: AppPages.pages,
    );
  }
}
