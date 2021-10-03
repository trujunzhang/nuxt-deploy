import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/ui/pages/reviews/body/reviews_body.dart';
import 'package:ieatta/app/ui/widgets/app_header.dart';
import 'package:ieatta/app/ui/widgets/page_section_photo_title.dart';
import 'package:ieatta/app/ui/widgets/page_section_see_all.dart';
import 'package:ieatta/app/ui/widgets/page_section_title.dart';
import 'package:my_plugin/my_plugin.dart';

import '../photos_list_body.dart';
import 'index.dart';
import 'widget/events_body.dart';
import 'widget/info_part.dart';
import 'widget/menus_body.dart';
import 'widget/section_menu_title.dart';

class DetailRestaurantPage extends GetWidget<DetailRestaurantController> {
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
    ParseModelRestaurants? restaurant = controller.state.detailModel;
    List<ParseModelPhotos> photosList = controller.state.photosList;
    List<ParseModelReviews> reviewsList = controller.state.reviewsList;
    String relatedId = controller.restaurantId;
    String? address = restaurant!.address;
    return Column(
      children: [
        InfoPart(),
        // Line 1: Address
        address == '' ? Container() : buildTextSectionTitle("Current Address"),
        address == ''
            ? SizedBox.shrink()
            : Container(
                decoration: new BoxDecoration(
                  color: Theme.of(context).colorScheme.primaryVariant,
                ),
                child: ListTile(
                  title: Text(restaurant.address!),
                )),
        // Line 2: Events
        buildTextSectionTitle("Events Recorded"),
        EventsBody(),
        // Line 3: Menus
        MenusSectionTitle(),
        Container(height: 160, child: MenusBody()),
        // Line 4: Photos
        buildPhotosSectionTitle(controller.photoType, relatedId),
        Container(
          height: 160,
          child: PhotosListBody(
            photosList: photosList,
            photoType: controller.photoType,
            relatedId: relatedId,
          ),
        ),
        seeAllList(photosList.length, controller.onSeeAllPhotosButtonPress),
        // Line 5: Reviews
        buildTextSectionTitle("Review Highlights"),
        Padding(
          padding: EdgeInsets.only(bottom: reviewsList.length == 0 ? 16 : 0),
          child: Container(
              decoration: new BoxDecoration(
                color: Theme.of(context).colorScheme.primaryVariant,
              ),
              child: ReviewsBody(reviewsList: reviewsList)),
        ),
        seeAllList(reviewsList.length, controller.onSeeAllReviewsButtonPress),
      ],
    );
  }
}
