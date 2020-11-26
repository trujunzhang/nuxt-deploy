import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:ieatta/app/app_localizations.dart';
import 'package:ieatta/app/auth_widget_builder.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/camera/screens/camera_screen/camera_screen.dart';
import 'package:ieatta/core/constants/dark_theme.dart';
import 'package:ieatta/core/constants/light_theme.dart';
import 'package:ieatta/core/models/auth_user_model.dart';
import 'package:ieatta/core/providers/auth_provider.dart';
import 'package:ieatta/core/providers/language_provider.dart';
import 'package:ieatta/core/providers/theme_provider.dart';
import 'package:ieatta/core/services/firebase_sync.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/core/ui/auth/social_login.dart';
import 'package:ieatta/core/ui/home/home.dart';
import 'package:ieatta/debug/sql_photos_helper.dart';
import 'package:ieatta/flavor.dart';
import 'package:ieatta/src/layout/navigation_home_screen.dart';
import 'package:ieatta/src/screens/edit/create_edit_review_screen.dart';
import 'package:ieatta/src/screens/home/fitness_app_home_screen.dart';
import 'package:ieatta/src/screens/restaurants/hotel_home_screen.dart';
import 'package:provider/provider.dart';
import 'package:ieatta/core/database/localDatabase.dart' as database;

class MyApp extends StatefulWidget {
  MyApp({Key key, @required this.databaseBuilder}) : super(key: key);

  // Expose builders for 3rd party services at the root of the widget tree
  // This is useful when mocking services while testing
  final FirestoreDatabase Function(BuildContext context, String uid)
      databaseBuilder;

  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  void initState() {
    super.initState();
    _syncLocalDb();
  }

  Future<void> _syncLocalDb() async {
    var firebaseSync = FirebaseSync();
    await firebaseSync.start();

    // For test
    // final db = await database.DBProvider.db.database;
    // await SqlPhotosHelper.generateDatabase();
  }

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return Consumer<ThemeProvider>(
      builder: (_, themeProviderRef, __) {
        //{context, data, child}
        return Consumer<LanguageProvider>(
          builder: (_, languageProviderRef, __) {
            return AuthWidgetBuilder(
              databaseBuilder: widget.databaseBuilder,
              builder: (BuildContext context,
                  AsyncSnapshot<AuthUserModel> userSnapshot) {
                return MaterialApp(
                  debugShowCheckedModeBanner: false,
                  locale: languageProviderRef.appLocale,
                  //List of all supported locales
                  supportedLocales: [
                    Locale('en', 'US'),
                    Locale('zh', 'CN'),
                  ],
                  //These delegates make sure that the localization data for the proper language is loaded
                  localizationsDelegates: [
                    //A class which loads the translations from JSON files
                    AppLocalizations.delegate,
                    //Built-in localization of basic text for Material widgets (means those default Material widget such as alert dialog icon text)
                    GlobalMaterialLocalizations.delegate,
                    //Built-in localization for text direction LTR/RTL
                    GlobalWidgetsLocalizations.delegate,
                  ],
                  //return a locale which will be used by the app
                  localeResolutionCallback: (locale, supportedLocales) {
                    //check if the current device locale is supported or not
                    for (var supportedLocale in supportedLocales) {
                      if (supportedLocale.languageCode ==
                              locale?.languageCode ||
                          supportedLocale.countryCode == locale?.countryCode) {
                        return supportedLocale;
                      }
                    }
                    //if the locale from the mobile device is not supported yet,
                    //user the first one from the list (in our case, that will be English)
                    return supportedLocales.first;
                  },
                  title: Provider.of<Flavor>(context).toString(),
                  routes: Routes.routes,
                  theme: AppLightTheme.lightTheme,
                  darkTheme: AppDarkTheme.darkTheme,
                  themeMode: themeProviderRef.isDarkModeOn
                      ? ThemeMode.dark
                      : ThemeMode.light,
                  home: Consumer<AuthProvider>(
                    builder: (_, authProviderRef, __) {
                      if (userSnapshot.connectionState ==
                          ConnectionState.active) {
                        return userSnapshot.hasData
                            ? // logged
                            HomeScreen()
//                            CreateEditReviewScreen()
                            : SocialLoginScreen();
//                        : NavigationHomeScreen();
//                            : Material(child: HotelHomeScreen());
//                            : Material(child: FitnessAppHomeScreen());
//                            : Material(child: CameraScreen());
                      }

                      return Material(
                        child: Container(
                          color: Colors.red,
                        ),
                      );
                    },
                  ),
                );
              },
            );
          },
        );
      },
    );
  }
}
