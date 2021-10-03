import 'dart:async';

import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:ieatta/app/my_app.dart';
import 'package:ieatta/config/provider_config.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/core/services/sentry_service.dart';
import 'package:oktoast/oktoast.dart';
import 'package:provider/provider.dart';
import 'package:sentry_flutter/sentry_flutter.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  await Firebase.initializeApp();

  SystemChrome.setPreferredOrientations([DeviceOrientation.portraitUp]).then((_) async {
    runZonedGuarded(() async {
      SentryService.instance.initialize();

      /*
      * MultiProvider for top services that do not depends on any runtime values
      * such as user uid/email.
       */
      MultiProvider multiProvider = ProviderConfig.getInstance()!.getGlobalProvider(OKToast(
          child: MyApp(
            databaseBuilder: (_, uid) => FirestoreDatabase(),
          ),
          backgroundColor: Colors.black54,
          textPadding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 10.0),
          radius: 20.0,
          position: ToastPosition.bottom));
      runApp(multiProvider);
    }, (exception, stackTrace) async {
      await Sentry.captureException(exception, stackTrace: stackTrace);
    });
  });
}
