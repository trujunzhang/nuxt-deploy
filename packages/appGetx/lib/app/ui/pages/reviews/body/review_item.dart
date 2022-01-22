import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/routes/app_pages.dart';
import 'package:ieatta/app/routes/params_helper.dart';
import 'package:ieatta/app/ui/helpers/profile_avatar.dart';
import 'package:ieatta/app/ui/helpers/slidable_row.dart';

import 'review.body.controller.dart';

class ReviewItem extends StatelessWidget {
  ReviewBodyController controller = Get.find<ReviewBodyController>();
  final ParseModelReviews reviewData;
  final bool canDelete;
  final bool showPreview;

  ReviewItem({
    Key? key,
    this.canDelete = false,
    this.showPreview = false,
    required this.reviewData,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    if (canDelete == false) {
      return _buildBody(context);
    }
    return SlidableRow(
      rowKey: reviewData.uniqueId,
      row: _buildBody(context),
      onPress: (BuildContext context) async {
        await controller.onDeleteReviewIconPress(context, reviewData);
      },
    );
  }

  Widget _buildInfo(BuildContext context) {
    return ListTile(
        onTap: () {
          Get.toNamed(
              '${Routes.USER_PROFILE}?${ParamsHelper.ID}=${reviewData.creatorId}');
        },
        leading: ProfileAvatar(avatarUrl: reviewData.avatarUrl),
        title: Text(reviewData.username),
        trailing: Text(
          formatByTimeAgo(reviewData.updatedAt),
          style: const TextStyle(
            color: Colors.grey,
            // fontSize: 15
          ),
        ));
  }

  Widget _buildBody(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        _buildInfo(context),
        ListTile(
          title: Row(
            children: [
              SizedBox(
                  width: 120,
                  height: 18,
                  child: Image(
                      image: AssetImage(
                          'assets/stars/small/${reviewData.rate}.png'),
                      fit: BoxFit.cover)),
            ],
          ),
          subtitle: Container(
              padding: const EdgeInsets.only(top: 12, bottom: 12),
              child: showPreview
                  ? Text(
                      reviewData.body,
                      style: Theme.of(context).textTheme.bodyText2,
                      overflow: TextOverflow.ellipsis,
                      maxLines: 3,
                    )
                  : Text(
                      reviewData.body,
                      style: Theme.of(context).textTheme.bodyText2,
                    )),
        ),
      ],
    );
  }
}
