class ParseModelsHelper {
  static getUniqueId(Map<String, dynamic> json) {
    String uniqueId = json['uniqueId'] as String;
    return uniqueId;
  }

  static getSyncPostedAt(Map<String, dynamic> json) {
    var updatedAt = json['updatedAt'] as String;
    var syncPostedAt = json['syncPostedAt'] as String;
    if (syncPostedAt == null) {
      return updatedAt;
    }
    if (syncPostedAt != null) {
      return syncPostedAt;
    }
    return updatedAt;
  }
}
