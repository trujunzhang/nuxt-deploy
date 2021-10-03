import '../provider/cloud_firestore.provider.dart';

class BaseRepository {
  final CloudFirestoreApi apiClient;

  BaseRepository({required this.apiClient}) : assert(apiClient != null);

  Future<void> delete(id) {
    return apiClient.deleteDocument(id);
  }

  Future<void> edit(obj, id) {
    return apiClient.updateDocument(obj, id);
  }

  Future<void> setData({
    required String path,
    required Map<String, dynamic> data,
    bool merge = false,
  }) async {
    await apiClient.setData(path: path, data: data);
  }
}
