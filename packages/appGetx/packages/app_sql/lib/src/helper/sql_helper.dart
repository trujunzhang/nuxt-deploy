import 'package:app_sql/src/dao/sql_photo_dao.dart';
import 'package:app_sql/src/services/database.dart';
import 'package:meta/meta.dart';

class SqlHelper {
  @visibleForTesting
  static Future<SqlPhotoDao> getSqlPhotoDaoForTest() async {
    final database = await $FloorAppDatabase.inMemoryDatabaseBuilder().build();
    return database.sqlPhotoDao;
  }

  static Future<SqlPhotoDao> getSqlPhotoDao() async {
    final database =
        await $FloorAppDatabase.databaseBuilder('app_database.db').build();
    return database.sqlPhotoDao;
  }
}
