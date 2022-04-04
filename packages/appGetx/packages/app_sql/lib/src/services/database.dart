import 'dart:async';
import 'package:app_sql/src/dao/sql_photo_dao.dart';
import 'package:app_sql/src/model/sql_photo.dart';
import 'package:floor/floor.dart';
import 'package:sqflite/sqflite.dart' as sqflite;

part 'database.g.dart'; // the generated code will be there

@Database(version: 1, entities: [SqlPhoto])
abstract class AppDatabase extends FloorDatabase {
  SqlPhotoDao get sqlPhotoDao;
}