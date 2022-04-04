import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:app_models/app_models.dart';
import '../../data/const/firebase.field.dart';

import '../provider/cloud_firestore.provider.dart';
import 'base.repository.dart';

class RestaurantRepository extends BaseRepository {
  final CloudFirestoreApi apiClient;

  RestaurantRepository({required this.apiClient})
      : assert(apiClient != null),
        super(apiClient: apiClient);

  static getInstance() {
    return RestaurantRepository(
        apiClient: CloudFirestoreApi(
            collection: fbCollectionToString(FBCollections.Restaurants)));
  }

  Future<List<ParseModelRestaurants>> getAll() async {
    final result = await apiClient.getCollection();
    return result.docs
        .map((json) =>
            ParseModelRestaurants.fromJson(json.data() as Map<String, dynamic>))
        .toList();
  }

  Stream<List<ParseModelRestaurants>> getStreamAll() {
    return apiClient.getStreamCollection((Query query) {
      return query.orderBy(FirebaseFields.CREATED_AT, descending: true);
    }).map((query) => query.docs
        .map((e) =>
            ParseModelRestaurants.fromJson(e.data() as Map<String, dynamic>))
        .toList());
  }

  Future<ParseModelRestaurants> getId(id) async {
    final json = await apiClient.getDocument(id);
    return ParseModelRestaurants.fromJson(json.data() as Map<String, dynamic>);
  }

  Future<void> add(ParseModelRestaurants obj) {
    return apiClient.postDocument(obj.toJson());
  }
}
