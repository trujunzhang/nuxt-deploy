import 'package:app_config/app_config.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
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

class DetailRestaurantPage extends StatefulWidget {
  const DetailRestaurantPage({Key? key}) : super(key: key);

  @override
  _DetailRestaurantPageState createState() => _DetailRestaurantPageState();
}

class _DetailRestaurantPageState extends State<DetailRestaurantPage> {
  late DetailRestaurantController controller;
  String tag = documentIdFromCurrentDate();

  @override
  void initState() {
    super.initState();

    controller = Get.put<DetailRestaurantController>(
        DetailRestaurantController(),
        tag: tag);
  }

  @override
  void dispose() {
    Get.delete<DetailRestaurantController>(tag: tag);
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
    ParseModelRestaurants? restaurant = controller.state.detailModel;
    List<ParseModelPhotos> photosList = controller.state.photosList;
    List<ParseModelReviews> reviewsList = controller.state.reviewsList;
    String relatedId = controller.restaurantId;
    String? address = restaurant!.address;
    return Column(
      children: [
        InfoPart(tag: tag),
        // Line 1: Address
        address == '' ? Container() : buildTextSectionTitle("Current Address"),
        address == ''
            ? const SizedBox.shrink()
            : Container(
                decoration: BoxDecoration(
                  color: Theme.of(context).colorScheme.primaryVariant,
                ),
                child: ListTile(
                  title: Text(restaurant.address!),
                )),
        // Line 2: Events
        buildTextSectionTitle("Events Recorded"),
        EventsBody(tag: tag),
        // Line 3: Menus
        MenusSectionTitle(
          onNewMenuIconPress: controller.onNewMenuIconPress,
        ),
        SizedBox(height: 160, child: MenusBody(tag: tag)),
        // Line 4: Photos
        buildPhotosSectionTitle(controller.photoType, relatedId),
        SizedBox(
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
          padding: EdgeInsets.only(bottom: reviewsList.isEmpty ? 16 : 0),
          child: Container(
              decoration: BoxDecoration(
                color: Theme.of(context).colorScheme.primaryVariant,
              ),
              child: ReviewsBody(
                  reviewsList:
                      reviewsList.take(AppConfigs.pageReviewSize).toList())),
        ),
        seeAllList(reviewsList.length, controller.onSeeAllReviewsButtonPress),
      ],
    );
  }
}
