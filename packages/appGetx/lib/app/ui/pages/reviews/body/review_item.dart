import 'package:flutter/material.dart';
import 'package:flutter_slidable/flutter_slidable.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/routes/app_pages.dart';
import 'package:ieatta/app/routes/params_helper.dart';
import 'package:ieatta/app/ui/helpers/profile_avatar.dart';
import 'package:ieatta/app/utils/timeago_utils.dart';

import 'review.body.controller.dart';

class ReviewItem extends StatelessWidget {
  ReviewBodyController controller = Get.find<ReviewBodyController>();
  final ParseModelReviews reviewData;
  final bool canDelete;

  ReviewItem({
    Key? key,
    this.canDelete = false,
    required this.reviewData,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    if (canDelete == false) {
      return _buildBody(context);
    }
    return Slidable(
      key: Key(reviewData.uniqueId),
      direction: Axis.horizontal,
      actionPane: SlidableBehindActionPane(),
      actionExtentRatio: 0.25,
      child: _buildBody(context),
      secondaryActions: <Widget>[
        IconSlideAction(
            caption: 'Delete',
            color: Colors.red,
            icon: Icons.delete,
            onTap: () async {
              await controller.onDeleteReviewIconPress(context, reviewData);
            }),
      ],
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
          style: TextStyle(
            color: Colors.grey,
            // fontSize: 15
          ),
        ));
  }

  Widget _buildBody(BuildContext context) {
    return Container(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _buildInfo(context),
          ListTile(
            title: Row(
              children: [
                Container(
                    width: 120,
                    height: 18,
                    child: Image(
                        image: AssetImage(
                            'assets/stars/small/${reviewData.rate}.png'),
                        fit: BoxFit.cover)),
              ],
            ),
            subtitle: Container(
                padding: EdgeInsets.only(top: 12, bottom: 12),
                child: Text(
                  reviewData.body,
                  style: Theme.of(context).textTheme.bodyText2,
                )),
          ),
        ],
      ),
    );
  }
}
