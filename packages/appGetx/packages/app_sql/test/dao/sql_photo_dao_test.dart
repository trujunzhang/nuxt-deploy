import 'package:app_sql/app_sql.dart';
import 'package:app_sql/src/dao/sql_photo_dao.dart';
import 'package:app_sql/src/helper/sql_helper.dart';
import 'package:app_sql/src/services/database.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  late AppDatabase database;
  late SqlPhotoDao sqlPhotoDao;

  setUp(() async {
    database = await $FloorAppDatabase.inMemoryDatabaseBuilder().build();
    sqlPhotoDao = database.sqlPhotoDao;
  });

  tearDown(() async {
    await database.close();
  });

  test('SqlPhotoDao', () async {
    final sqlPhoto = SqlPhoto('1', 'offlinePath');
    sqlPhotoDao.insertPhoto(sqlPhoto);
    final actual = await sqlPhotoDao.findPhotoById(sqlPhoto.id);

    expect(actual!.id, equals(sqlPhoto.id));
    expect(actual.offlinePath, equals(sqlPhoto.offlinePath));
  });
}
