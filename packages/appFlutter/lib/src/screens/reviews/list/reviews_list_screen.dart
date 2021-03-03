import 'package:flutter/material.dart';
import 'package:ieatta/app/app_localizations.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:ieatta/core/filter/filter_models.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';
import 'package:ieatta/src/components/navigation/arrow_helper.dart';
import 'package:ieatta/src/screens/reviews/detail/reviews_body.dart';

class ReviewsListObject {
  final ReviewType reviewType;
  final String relatedId;

  ReviewsListObject({@required this.reviewType, @required this.relatedId});
}

class ReviewsListScreen extends StatefulWidget {
  ReviewsListScreen({Key key}) : super(key: key);

  @override
  _ReviewsListScreenState createState() => _ReviewsListScreenState();
}

class _ReviewsListScreenState extends State<ReviewsListScreen> {
  ReviewsListObject reviewsListObject;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final ReviewsListObject _reviewsListObject =
        ModalRoute.of(context).settings.arguments;
    setState(() {
      reviewsListObject = _reviewsListObject;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          leading: IconButton(
            icon: Icon(getArrowBackIcon()),
            onPressed: () {
              Navigator.of(context).pop();
            },
          ),
          title: Text(AppLocalizations.of(context)
              .translate("reviewsListPageAppBarTitleTxt")),
        ),
        body: _buildListReviews(context));
  }

  Widget _buildListReviews(BuildContext context) {
    List<ParseModelReviews> reviewsList = FilterModels.instance.getReviewsList(
        context, reviewsListObject.relatedId, reviewsListObject.reviewType);
    return SingleChildScrollView(
        padding: EdgeInsets.only(top: 18.0),
        child: ReviewsBody(reviewsList: reviewsList));
  }
}
