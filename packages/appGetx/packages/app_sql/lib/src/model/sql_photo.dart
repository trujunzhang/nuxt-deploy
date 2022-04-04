import 'package:floor/floor.dart';
import 'dart:io' as io;

@entity
class SqlPhoto {
  @primaryKey
  final String id;

  final String offlinePath;

  SqlPhoto(this.id, this.offlinePath);

  Future<void> deleteLocalImage() async {
    var file = io.File(offlinePath);
    await file.delete();
  }
}
