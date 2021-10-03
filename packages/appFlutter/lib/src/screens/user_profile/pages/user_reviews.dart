import 'package:flutter/material.dart';
import 'package:ieatta/common/langs/l10n.dart';
import 'package:ieatta/core/filter/filter_models.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';
import 'package:ieatta/src/components/navigation/arrow_helper.dart';
import 'package:ieatta/src/screens/reviews/detail/reviews_body.dart';
import 'package:ieatta/util/app_navigator.dart';

class UserReviews extends StatelessWidget {
  UserReviews({Key? key, required this.userId}) : super(key: key);

  final String userId;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          leading: IconButton(
            icon: Icon(getArrowBackIcon()),
            onPressed: () {
              AppNavigator.goBack(context);
            },
          ),
          title: Text(S.of(context).userMenuReviewsAppBarTitle),
        ),
        body: _buildBody(context));
  }

  Widget _buildBody(BuildContext context) {
    List<ParseModelReviews> reviewsList = FilterModels.instance.getReviewsListByUser(context, userId);
    if (reviewsList.length == 0) {
      return Center(
        child: Text('No Data'),
      );
    }
    return SingleChildScrollView(
        padding: EdgeInsets.only(top: 18.0),
        child: Container(
            decoration: new BoxDecoration(color: Colors.white), child: ReviewsBody(reviewsList: reviewsList)));
  }
}
