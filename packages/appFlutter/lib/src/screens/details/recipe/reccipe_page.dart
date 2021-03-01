import 'package:flutter/material.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:ieatta/core/filter/filter_models.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/appModels/models/Recipes.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';
import 'package:ieatta/src/components/app/app_header.dart';
import 'package:ieatta/src/components/app/page_section_title.dart';
import 'package:ieatta/src/components/restaurant_detail/common.dart';
import 'package:ieatta/src/screens/reviews/detail/reviews_body.dart';

import '../photos_body.dart';
import 'widget/info_part.dart';

class RecipeDetail extends StatefulWidget {
  RecipeDetail({Key key}) : super(key: key);

  @override
  _RecipeDetailState createState() => _RecipeDetailState();
}

class _RecipeDetailState extends State<RecipeDetail> {
  ParseModelRecipes _recipe;
  String recipeId;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final ParseModelRecipes _recipeModel =
        ModalRoute.of(context).settings.arguments;
    setState(() {
      _recipe = _recipeModel;
      recipeId = _recipeModel.uniqueId;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: new AppBar(centerTitle: true, title: appHeaderTitle()),
      body: _buildBody(context),
    );
  }

  Widget _buildBody(BuildContext context) {
    ParseModelRecipes recipe =
        FilterModels.instance.getSingleRecipe(context, recipeId);
    List<ParseModelPhotos> photosList = FilterModels.instance
        .getPhotosList(context, recipeId, PhotoType.Recipe);
    List<ParseModelReviews> reviewsList = FilterModels.instance
        .getReviewsList(context, recipeId, ReviewType.Recipe);

    return ListView(
      children: [
        InfoPart(
          recipe: recipe,
        ),
        // Line 1: Photos
        buildPhotosSectionTitle(context),
        Container(
          height: 160,
          // decoration: new BoxDecoration(color: Colors.white),
          child: PhotosBody(photosList: photosList),
        ),
        seeAllList(photosList.length),
        // Line 3: Reviews
        buildTextSectionTitle("Review Highlights"),
        Container(
            decoration: new BoxDecoration(color: Colors.white),
            child: ReviewsBody(reviewsList: reviewsList)),
        seeAllList(reviewsList.length),
      ],
    );
  }
}
