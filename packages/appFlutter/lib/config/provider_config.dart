import 'package:flutter/material.dart';
import 'package:ieatta/core/providers/auth_provider.dart';
import 'package:ieatta/core/providers/language_provider.dart';
import 'package:ieatta/core/providers/theme_provider.dart';
import 'package:ieatta/core/services/firestore_list.dart';
import 'package:ieatta/flavor.dart';
import 'package:ieatta/src/appModels/models/Events.dart';
import 'package:ieatta/src/appModels/models/PeopleInEvent.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/appModels/models/Recipes.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';
import 'package:ieatta/src/appModels/models/Users.dart';
import 'package:provider/provider.dart';

/// ProviderConfig  provider配置
class ProviderConfig {
  static ProviderConfig? _instance = ProviderConfig._internal();

  static ProviderConfig? getInstance() {
    if (_instance == null) {
      _instance = ProviderConfig._internal();
    }
    return _instance;
  }

  ///全局
  MultiProvider getGlobalProvider(Widget child) {
    return MultiProvider(providers: [
      Provider<Flavor>.value(value: Flavor.dev),
      ChangeNotifierProvider<ThemeProvider>(
        create: (context) => ThemeProvider(),
      ),
      ChangeNotifierProvider<AuthProvider>(
        create: (context) => AuthProvider(),
      ),
      ChangeNotifierProvider<LanguageProvider>(
        create: (context) => LanguageProvider(),
      ),
      // All firebase collections
      StreamProvider<List<ParseModelRestaurants>>.value(
          value: FirestoreList.instance.allRestaurantsStream(), initialData: []),
      StreamProvider<List<ParseModelEvents>>.value(value: FirestoreList.instance.allEventsStream(), initialData: []),
      StreamProvider<List<ParseModelPeopleInEvent>>.value(
          value: FirestoreList.instance.allPeopleInEventsStream(), initialData: []),
      StreamProvider<List<ParseModelPhotos>>.value(value: FirestoreList.instance.allPhotosStream(), initialData: []),
      StreamProvider<List<ParseModelRecipes>>.value(value: FirestoreList.instance.allRecipesStream(), initialData: []),
      StreamProvider<List<ParseModelUsers>>.value(value: FirestoreList.instance.allUsersStream(), initialData: []),
      StreamProvider<List<ParseModelReviews>>.value(value: FirestoreList.instance.allReviewsStream(), initialData: []),
    ], child: child);
  }

  ProviderConfig._internal();
}
