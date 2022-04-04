// import 'dart:io';

// import 'package:app_sql/src/services/database.dart';
// import 'package:my_plugin/my_plugin.dart';
// import 'package:path/path.dart';
// import 'package:path_provider/path_provider.dart';
// import 'package:sqflite/sqflite.dart';

// class DBProvider {
//   DBProvider._();

//   static final DBProvider db = DBProvider._();
//   static Database? _database;

//   Future<Database?> get database async {
//     if (_database != null) return _database;
//     Log.d("getting database 1");

//     // if _database is null we instantiate it
//     _database = await initDB();
//     Log.d("getting database 2");
//     return _database;
//   }

//   initDB() async {
//     Log.d("initializing database");
//     Directory documentsDirectory = await getApplicationDocumentsDirectory();
//     String path = join(documentsDirectory.path, "UserInfo.db");
//     Log.d("initDB: " + path);
//     return await openDatabase(path, version: 1, onOpen: (db) {},
//         onCreate: (Database db, int version) async {
//       await db.execute("CREATE TABLE PhotoInfo ("
//           "uniqueId TEXT PRIMARY KEY,"
//           "offlinePath TEXT"
//           ")");
//     });
//   }
// }
