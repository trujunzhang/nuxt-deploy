import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:ieatta/app/my_app.dart';
import 'package:ieatta/core/providers/auth_provider.dart';
import 'package:ieatta/core/providers/language_provider.dart';
import 'package:ieatta/core/providers/theme_provider.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/flavor.dart';
// import 'package:path_provider/path_provider.dart';
import 'package:provider/provider.dart';
import 'core/logger/file_logger.dart';

Future<String> _getDocsDir() async {
    // final directory = await getApplicationDocumentsDirectory();
    // return directory.path;
}

var _logFilename = 'back_to_now.txt';

void main() async {
    // var docsDir = await _getDocsDir();
    // String canonFilename = '$docsDir/$_logFilename';
    // await Lager.initializeLogging(canonFilename);
    // await Lager.log('ENTERED main() ...');

  WidgetsFlutterBinding.ensureInitialized();
  SystemChrome.setPreferredOrientations([DeviceOrientation.portraitUp])
      .then((_) async {
    runApp(
      /*
      * MultiProvider for top services that do not depends on any runtime values
      * such as user uid/email.
       */
      MultiProvider(
        providers: [
          Provider<Flavor>.value(value: Flavor.dev),
          ChangeNotifierProvider<ThemeProvider>(
            create: (context) => ThemeProvider(),
          ),
          ChangeNotifierProvider<AuthProvider>(
            create: (context) => AuthProvider(),
          ),
          ChangeNotifierProvider<LanguageProvider>(
            create: (context) => LanguageProvider(),
          ),
        ],
        child: MyApp(
          databaseBuilder: (_, uid) => FirestoreDatabase(),
        ),
      ),
    );
  });
}
