import 'package:flutter/material.dart';
import 'package:ieatta/app/routes.dart';
import 'package:smooth_star_rating/smooth_star_rating.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';
import 'package:ieatta/src/components/avatar_widget.dart';

class ReviewView extends StatefulWidget {
  ReviewView(
      {Key key,
      @required this.reviewData,
      @required this.rate,
      @required this.note})
      : super(key: key);

  final ParseModelReviews reviewData;
  final double rate;
  final String note;

  @override
  _ReviewViewState createState() => _ReviewViewState();
}

class _ReviewViewState extends State<ReviewView> {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Row(
        mainAxisAlignment: MainAxisAlignment.start,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Container(
            width: 100,
            height: 100,
            child: AvatarWidget(
              user: widget.reviewData,
              isShowingUsernameLabel: true,
              padding: EdgeInsets.only(right: 8.0),
            ),
          ),
          Flexible(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Container(
                  margin: const EdgeInsets.only(bottom: 8.0),
                  child: Row(
                    children: <Widget>[
                      SmoothStarRating(
                          allowHalfRating: false,
                          onRatingChanged: (v) {},
                          starCount: 5,
                          rating: widget.rate,
                          size: 20.0,
                          color: Colors.green,
                          borderColor: Colors.green,
                          spacing: 0.0),
                    ],
                  ),
                ),
                Text(widget.note)
              ],
            ),
          ),
        ],
      ),
    );
  }
}
