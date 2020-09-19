import 'package:flutter/foundation.dart';
import 'package:ieatta/src/appConstants/Types.dart';
import 'package:ieatta/src/appConstants/appConstants.dart';
import 'package:ieatta/src/appModels/models/helper/ParseModelsHelper.dart';

class DatabaseBaseModel {
  // ignore: non_constant_identifier_names
  final String creatorId;
  final String uniqueId;
  final String createdAt;
  final String updatedAt;

  final String flag;

//  final String createdAt;
//  final String updatedAt;
//  final String syncPostedAt;
//  final String flag;

  DatabaseBaseModel(
      this.creatorId, this.uniqueId, this.createdAt, this.updatedAt, this.flag);

  static fromJson(Map<String, dynamic> json) {
    String uniqueId = ParseModelsHelper.getUniqueId(json);
    String creatorId = json['creatorId'] as String;
    var createdAt = json['createdAt'] as String;
    var updatedAt = json['updatedAt'] as String;
    var flag = json['flag'] as String;

    return DatabaseBaseModel(creatorId, uniqueId, createdAt, updatedAt, flag);
  }

  static String buildCreateSql(
      Map<String, String> tableFields, Types_modal objectSchemaName) {
    List<String> fields = [];
    tableFields.forEach((key, value) => fields.add('$key $value'));
    var fieldsString = fields.join(',');

    var commonSql = "id INTEGER PRIMARY KEY, uniqueId TEXT,";
    var modelObjectType = AppConstants.realmObjectTypes[objectSchemaName];
    var createSql = 'CREATE TABLE $modelObjectType ($commonSql $fieldsString)';
    return createSql;
  }

  @protected
  Future<int> upsert(txn) async {}
}
