import 'package:flutter/material.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';
import 'package:ieatta/src/components/restaurant_detail/common.dart';
import 'package:ieatta/src/logic/reviews_results.dart';
import 'package:provider/provider.dart';

import '../../review_detail/review_view.dart';

class ReviewsPart extends StatefulWidget {
  ReviewsPart({Key key, @required this.restaurantId}) : super(key: key);

  final String restaurantId;

  @override
  _ReviewsPartState createState() => _ReviewsPartState();
}

class _ReviewsPartState extends State<ReviewsPart> {
  List<ParseModelReviews> reviewList = [];

  @override
  void initState() {
    super.initState();
  }

  Widget _buildReviewsListView(List<ParseModelReviews> reviewList) {
    if (reviewList.length == 0) {
      return Container(
        height: 60,
        child: Center(
          child: Text('no comments'),
        ),
      );
    }
    List<Widget> list = new List<Widget>();

    list.add(pageLine);
    for (var i = 0; i < reviewList.length; i++) {
      var reviewView = ReviewView(
        reviewData: reviewList[i],
        rate: reviewList[i].rate,
        note: reviewList[i].body,
      );
      Widget child = InkWell(
        child: reviewView,
        onTap: () {
          Navigator.of(context)
              .pushNamed(Routes.detail_review, arguments: reviewList[i]);
        },
      );
      list.add(child);
      list.add(pageLine);
    }
    return Column(children: list);
  }

  @override
  Widget build(BuildContext context) {
    final firestoreDatabase =
        Provider.of<FirestoreDatabase>(context, listen: false);
    return StreamBuilder(
        stream:
            firestoreDatabase.reviewStream(restaurantId: widget.restaurantId),
        builder: (BuildContext context, AsyncSnapshot fbSnapshot) {
          if (fbSnapshot.hasError) {

          }
          if (!fbSnapshot.hasData) {
            return Container();
          }

          return _buildReviewsListView(parseReviewsFilterByRestaurant(
              datas: fbSnapshot.data.documents,
              restaurantId: widget.restaurantId));
        });
  }
}
