import 'package:flutter/material.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';
import 'package:ieatta/src/logic/reviews_results.dart';
import 'package:ieatta/src/screens/restaurant_detail/widget/reviews_body.dart';
import 'package:provider/provider.dart';

class ReviewsPart extends StatefulWidget {
  ReviewsPart({Key key, @required this.restaurantId}) : super(key: key);

  final String restaurantId;

  @override
  _ReviewsPartState createState() => _ReviewsPartState();
}

class _ReviewsPartState extends State<ReviewsPart> {
  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    final firestoreDatabase =
        Provider.of<FirestoreDatabase>(context, listen: false);
    return StreamBuilder(
        stream:
            firestoreDatabase.reviewStream(restaurantId: widget.restaurantId),
        builder: (BuildContext context, AsyncSnapshot fbSnapshot) {
          if (fbSnapshot.hasError) {}
          if (!fbSnapshot.hasData) {
            return Container();
          }

          return ReviewsBody(
              reviewList: parseReviewsFilterByRestaurant(
                  datas: fbSnapshot.data.documents,
                  restaurantId: widget.restaurantId));
        });
  }
}
