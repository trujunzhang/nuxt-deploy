import 'package:cloud_firestore/cloud_firestore.dart';
import '../../data/const/firebase.field.dart';
import '../../data/enum/fb_collections.dart';
import '../../data/model/index.dart';

import '../provider/cloud_firestore.provider.dart';
import 'base.repository.dart';

class RecipeRepository extends BaseRepository {
  final CloudFirestoreApi apiClient;

  RecipeRepository({required this.apiClient})
      : assert(apiClient != null),
        super(apiClient: apiClient);

  static getInstance() {
    return RecipeRepository(
        apiClient: CloudFirestoreApi(
            collection: fbCollectionToString(FBCollections.Recipes)));
  }

  Future<List<ParseModelRecipes>> getAll() async {
    final result = await apiClient.getCollection();
    return result.docs
        .map((json) =>
            ParseModelRecipes.fromJson(json.data() as Map<String, dynamic>))
        .toList();
  }

  Stream<List<ParseModelRecipes>> getStreamAll() {
    return apiClient.getStreamCollection((Query query) {
      return query.orderBy(FirebaseFields.UPDATED_AT, descending: true);
    }).map((query) => query.docs
        .map(
            (e) => ParseModelRecipes.fromJson(e.data() as Map<String, dynamic>))
        .toList());
  }

  Future<ParseModelRecipes> getId(id) async {
    final json = await apiClient.getDocument(id);
    return ParseModelRecipes.fromJson(json.data() as Map<String, dynamic>);
  }

  Future<void> add(ParseModelRecipes obj) {
    return apiClient.postDocument(obj.toMap());
  }
}
