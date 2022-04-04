import 'package:app_sql/src/model/sql_photo.dart';
import 'package:floor/floor.dart';

@dao
abstract class SqlPhotoDao {
  @Query('SELECT * FROM SqlPhoto')
  Future<List<SqlPhoto>> findAllPhotos();

  @Query('SELECT * FROM SqlPhoto')
  Stream<List<SqlPhoto>> findAllPhotosAsStream();

  @Query('SELECT * FROM SqlPhoto WHERE id = :id')
  Future<SqlPhoto?> findPhotoById(String id);

  @update
  Future<void> updatePhoto(SqlPhoto sqlPhoto);

  @insert
  Future<void> insertPhoto(SqlPhoto sqlPhoto);

  @delete
  Future<void> deletePhoto(SqlPhoto sqlPhoto);
}
