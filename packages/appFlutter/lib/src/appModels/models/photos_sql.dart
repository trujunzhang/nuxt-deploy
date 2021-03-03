import 'dart:io' as io;

import 'package:ieatta/core/database/localDatabase.dart' as database;

class SqlPhotos {
  final String uniqueId;
  final String offlinePath;

  SqlPhotos({
    this.uniqueId,
    this.offlinePath,
  });

  factory SqlPhotos.fromJson(Map<String, dynamic> json) => SqlPhotos(
        uniqueId: json["uniqueId"],
        offlinePath: json["offlinePath"],
      );

  Map<String, dynamic> toJson() => {
        "uniqueId": uniqueId,
        "offlinePath": offlinePath,
      };

  @override
  String toString() {
    return '======>  SqlPhotos: uniqueId=$uniqueId,offlinePath=$offlinePath';
  }

  insert() async {
    print("Inside insert");
    final db = await database.DBProvider.db.database;
    print("step 1");
    print(toString());
    var res = await db.insert("PhotoInfo", toJson());
    print("Step 2");
    return res;
  }

  readFirstPhoto() async {
    final db = await database.DBProvider.db.database;
    var res = await db.query("PhotoInfo");
    return res.isNotEmpty ? SqlPhotos.fromJson(res.first) : Null;
  }

  static readPhotos() async {
    final db = await database.DBProvider.db.database;
    var res = await db.query("PhotoInfo");

    List<SqlPhotos> photos = res.isNotEmpty
        ? res.map((note) => SqlPhotos.fromJson(note)).toList()
        : [];

    return photos;
  }

  updateUserInfo(SqlPhotos photoInfo) async {
    final db = await database.DBProvider.db.database;
    var res = await db.update("PhotoInfo", photoInfo.toJson(),
        where: "uniqueId = ?", whereArgs: [photoInfo.uniqueId]);
    return res;
  }

  deletePhoto() async {
    final db = await database.DBProvider.db.database;
    db.delete("PhotoInfo", where: "uniqueId = ?", whereArgs: [uniqueId]);
  }

  deleteLocalImage() async {
    var file = io.File(offlinePath);
    await file.delete();
  }
}
