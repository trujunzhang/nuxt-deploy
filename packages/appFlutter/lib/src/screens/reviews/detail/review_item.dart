import 'package:flutter/material.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/core/utils/timeago_utils.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';
import 'package:ieatta/src/components/profile_avatar.dart';
import 'package:ieatta/src/screens/restaurants/hotel_app_theme.dart';
import 'package:flutter_rating_bar/flutter_rating_bar.dart';

class ReviewItem extends StatelessWidget {
  final ParseModelReviews reviewData;

  const ReviewItem({
    Key key,
    @required this.reviewData,
  }) : super(key: key);

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
    // print('review rate: ${reviewData.rate}');
    return Card(
      child: Container(
        padding: EdgeInsets.only(left: 12, right: 12, top: 16, bottom: 16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            _buildInfo(context),
            SizedBox(height: 8),
            RatingBar.builder(
                initialRating: reviewData.rate,
                minRating: 1,
                direction: Axis.horizontal,
                allowHalfRating: false,
                itemCount: 5,
                itemSize: 25,
                itemPadding: EdgeInsets.symmetric(horizontal: 4.0),
                itemBuilder: (context, _) => Icon(
                      Icons.star,
                      color: HotelAppTheme.buildLightTheme().primaryColor,
                    ),
                onRatingUpdate: (rating) {
                }),
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
