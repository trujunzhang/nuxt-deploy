class DatabaseBaseModel {
  // ignore: non_constant_identifier_names
  final String creatorId;
  final String uniqueId;
  final String createdAt;
  final String updatedAt;

  final String flag;

  DatabaseBaseModel(
      this.creatorId, this.uniqueId, this.createdAt, this.updatedAt, this.flag);

  static fromJson(Map<String, dynamic> json) {
    String uniqueId = json['uniqueId'];
    String creatorId = json['creatorId'];
    String createdAt = json['createdAt'];
    String updatedAt = json['updatedAt'];
    String flag = json['flag'];

    return DatabaseBaseModel(creatorId, uniqueId, createdAt, updatedAt, flag);
  }
}
