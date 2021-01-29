import 'package:flutter/material.dart';
import 'package:ieatta/src/appModels/models/Events.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/appModels/models/Recipes.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';
import 'package:ieatta/src/components/app/app_header.dart';
import 'package:ieatta/src/components/app/page_section_title.dart';
import 'package:ieatta/src/components/firebase/stream_builder_view.dart';
import 'package:ieatta/src/components/restaurant_detail/common.dart';
import 'package:ieatta/src/screens/review_detail/reviews_body.dart';

import 'package:provider/provider.dart';
import 'package:ieatta/core/services/firestore_database.dart';

import '../photos_body.dart';
import 'widget/info_part.dart';

class RecipeDetail extends StatefulWidget {
  RecipeDetail({Key key}) : super(key: key);

  @override
  _RecipeDetailState createState() => _RecipeDetailState();
}

class _RecipeDetailState extends State<RecipeDetail> {
  ParseModelRecipes _recipe;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final ParseModelRecipes _recipeModel =
        ModalRoute.of(context).settings.arguments;
    if (_recipeModel != null) {
      _recipe = _recipeModel;
      setState(() {
        _recipe = _recipeModel;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    final firestoreDatabase =
        Provider.of<FirestoreDatabase>(context, listen: false);
    return Scaffold(
      appBar: new AppBar(centerTitle: true, title: appHeaderTitle()),
      body: _buildBody(context, firestoreDatabase),
    );
  }

  Widget _buildBody(BuildContext context, FirestoreDatabase firestoreDatabase) {
    return ListView(
      children: [
        InfoPart(
          recipe: _recipe,
        ),
        // Line 1:
        buildPhotosSectionTitle(context),
        Container(
          height: 160,
          // decoration: new BoxDecoration(color: Colors.white),
          child: StreamBuilderView<List<ParseModelPhotos>>(
            stream: firestoreDatabase.photosInRecipeStream(
                _recipe.restaurantId, _recipe.uniqueId),
            render: (AsyncSnapshot fbSnapshot) {
              return PhotosBody(photosList: fbSnapshot.data);
            },
          ),
        ),
        StreamBuilderView<List<ParseModelPhotos>>(
          stream: firestoreDatabase.photosInRecipeStream(
              _recipe.restaurantId, _recipe.uniqueId),
          render: (AsyncSnapshot fbSnapshot) {
            return seeAllPhoto(fbSnapshot.data);
          },
        ),
        // Line 3: Reviews
        buildTextSectionTitle("Review Highlights"),
        Container(
          decoration: new BoxDecoration(color: Colors.white),
          child: StreamBuilderView<List<ParseModelReviews>>(
            stream: firestoreDatabase.reviewsInRecipeStream(
                _recipe.restaurantId, _recipe.uniqueId),
            render: (AsyncSnapshot fbSnapshot) {
              return ReviewsBody(reviewsList: fbSnapshot.data);
            },
          ),
        ),
      ],
    );
  }
}
