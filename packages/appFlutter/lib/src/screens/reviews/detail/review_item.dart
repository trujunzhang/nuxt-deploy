import 'package:flutter/material.dart';
import 'package:flutter_slidable/flutter_slidable.dart';
import 'package:ieatta/common/langs/l10n.dart';
import 'package:ieatta/core/database/review_helper.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/core/utils/timeago_utils.dart';
import 'package:ieatta/routers/fluro_navigator.dart';
import 'package:ieatta/routers/params_helper.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';
import 'package:ieatta/src/components/profile_avatar.dart';
import 'package:ieatta/src/screens/user_profile/user_profile_router.dart';
import 'package:ieatta/util/toast_utils.dart';
import 'package:provider/provider.dart';

class ReviewItem extends StatelessWidget {
  final ParseModelReviews reviewData;

  const ReviewItem({
    Key? key,
    required this.reviewData,
  }) : super(key: key);

  Widget _buildInfo(BuildContext context) {
    return ListTile(
        onTap: () {
          NavigatorUtils.push(
              context, '${UserProfileRouter.commonUserPage}?${ParamsHelper.ID}=${reviewData.creatorId}');
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

  @override
  Widget build(BuildContext context) {
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
            try {
              final firestoreDatabase = Provider.of<FirestoreDatabase>(context, listen: false);
              await firestoreDatabase.deleteReview(reviewData); // For Restaurant.
              await ReviewHelper(
                lastReviewRate: reviewData.rate,
              ).onSaveOrRemoveReviewAfterHook(
                  reviewHookType: ReviewHookType.Remove,
                  reviewType: stringToReviewType(reviewData.reviewType),
                  relatedId: ParseModelReviews.getRelatedId(reviewData));
            } catch (e) {}
            Toast.show(S.of(context).ModelItemsDeleteSuccess);
          },
        ),
      ],
    );
  }

  Widget _buildBody(BuildContext context) {
    double rating = reviewData.rate;
    return Container(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _buildInfo(context),
          ListTile(
            title: Row(
              children: [
                Container(
                    // color: Colors.blue,
                    width: 120,
                    height: 18,
                    child: Image(image: AssetImage('assets/stars/small/$rating.png'), fit: BoxFit.cover)),
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
