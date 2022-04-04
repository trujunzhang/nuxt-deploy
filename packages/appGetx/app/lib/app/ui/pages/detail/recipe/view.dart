import 'package:app_config/app_config.dart';
import 'package:app_models/app_models.dart';
import 'package:app_widgets/app_widgets.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/ui/pages/reviews/body/reviews_body.dart';
import 'package:ieatta/app/ui/widgets/app_header.dart';
import 'package:ieatta/app/ui/widgets/page_section_photo_title.dart';
import 'package:ieatta/app/ui/widgets/page_section_see_all.dart';
import 'package:ieatta/app/ui/widgets/page_section_title.dart';
import 'package:my_plugin/my_plugin.dart';

import '../photos_list_body.dart';
import 'index.dart';

class DetailRecipePage extends StatefulWidget {
  const DetailRecipePage({Key? key}) : super(key: key);

  @override
  _DetailRecipePageState createState() => _DetailRecipePageState();
}

class _DetailRecipePageState extends State<DetailRecipePage> {
  late DetailRecipeController controller;
  String tag = documentIdFromCurrentDate();

  @override
  void initState() {
    super.initState();

    controller =
        Get.put<DetailRecipeController>(DetailRecipeController(), tag: tag);
  }

  @override
  void dispose() {
    Get.delete<DetailRecipeController>(tag: tag);
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return BaseSingleViewPage(
        appBar: MyAppBar(
          centerTitle: true,
          title: appHeaderTitle(),
          leadingType: AppBarBackType.Back,
        ),
        body: Obx(() => _buildBody(context)));
  }

  Widget _buildBody(BuildContext context) {
    String? relatedId = controller.recipeId;
    List<ParseModelPhotos> photosList = controller.state.photosList;
    List<ParseModelReviews> reviewsList = controller.state.reviewsList;

    ParseModelRecipes? recipe = controller.state.detailModel;
    return Column(
      children: [
        RecipeInfoPanel(
          recipe: recipe,
          onEditPressed: controller.onEditRecipeIconPress,

          /// action icon events.
          onNewReviewButtonPress: controller.onNewReviewButtonPress,
          onSeeAllReviewsButtonPress: controller.onSeeAllReviewsButtonPress,
        ),
        // Line 1: Photos
        buildPhotosSectionTitle(controller.photoType, relatedId!),
        SizedBox(
          height: 160,
          child: PhotosListBody(
            photosList: photosList,
            photoType: controller.photoType,
            relatedId: relatedId,
          ),
        ),
        seeAllList(photosList.length, controller.onSeeAllPhotosButtonPress),
        // Line 3: Reviews
        buildTextSectionTitle("Review Highlights"),
        Padding(
          padding: EdgeInsets.only(bottom: reviewsList.isEmpty ? 16 : 0),
          child: ThemedBox(
            child: ReviewsBody(
              reviewsList: reviewsList.take(AppConfigs.pageReviewSize).toList(),
            ),
          ),
        ),
        seeAllList(reviewsList.length, controller.onSeeAllReviewsButtonPress),
      ],
    );
  }
}
