import 'package:flutter/material.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/core/utils/timeago_utils.dart';
import 'package:ieatta/src/components/profile_avatar.dart';
import 'package:ieatta/src/components/users/image.dart';
import 'package:ieatta/src/layout/app_theme.dart';
import 'package:ieatta/src/screens/restaurants/hotel_app_theme.dart';
import 'package:smooth_star_rating/smooth_star_rating.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';
import 'package:ieatta/src/components/avatar_widget.dart';

class ReviewItem extends StatelessWidget {
  final ParseModelReviews reviewData;
  final double rate;
  final String note;

  const ReviewItem(
      {Key key,
      @required this.reviewData,
      @required this.rate,
      @required this.note})
      : super(key: key);

  Widget _buildInfo(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        InkWell(
          onTap: () {
            Navigator.of(context).pushNamed(Routes.detail_common_user,
                arguments: reviewData.creatorId);
          },
          child: Row(
            children: [
              ProfileAvatar(avatarUrl: reviewData.avatarUrl),
              SizedBox(width: 12),
              Text(reviewData.username)
            ],
          ),
        ),
        Text(
          formatByTimeAgo(reviewData.updatedAt),
          style: TextStyle(color: Colors.grey, fontSize: 15),
        )
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Container(
        padding: EdgeInsets.only(left: 12, right: 12, top: 16, bottom: 16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            _buildInfo(context),
            SizedBox(height: 8),
            SmoothStarRating(
              allowHalfRating: true,
              starCount: 5,
              rating: reviewData.rate,
              size: 20,
              color: HotelAppTheme.buildLightTheme().primaryColor,
              borderColor: HotelAppTheme.buildLightTheme().primaryColor,
            ),
            SizedBox(height: 8),
            Text(
              reviewData.body,
              style: Theme.of(context).textTheme.bodyText2,
            )
          ],
        ),
      ),
    );
  }
}
