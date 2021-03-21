import 'package:flutter/material.dart';
import 'package:ieatta/app/app_localizations.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:ieatta/core/filter/filter_models.dart';
import 'package:ieatta/core/models/auth_user_model.dart';
import 'package:ieatta/core/providers/auth_provider.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';
import 'package:ieatta/src/components/navigation/arrow_helper.dart';
import 'package:ieatta/src/screens/edit/review/review_provider_screen.dart';
import 'package:provider/provider.dart';

import 'review_item.dart';

class ReviewScreen extends StatefulWidget {
  ReviewScreen({Key key}) : super(key: key);

  @override
  _ReviewScreenState createState() => _ReviewScreenState();
}

class _ReviewScreenState extends State<ReviewScreen> {
  ParseModelReviews reviewData;
  String reviewId;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final ParseModelReviews _reviewModel =
        ModalRoute.of(context).settings.arguments;
    assert(_reviewModel != null, 'Review page');

    setState(() {
      reviewData = _reviewModel;
      reviewId = _reviewModel.uniqueId;
    });
  }

  @override
  Widget build(BuildContext context) {
    final authService = Provider.of<AuthProvider>(context, listen: false);
    return StreamBuilder<AuthUserModel>(
        stream: authService.user,
        builder: (BuildContext context, AsyncSnapshot<AuthUserModel> snapshot) {
          final AuthUserModel user = snapshot.data;

          var showEditBtn = (user != null && user.uid == reviewData.creatorId);
          return _buildBody(context, showEditBtn);
        });
  }

  Widget _buildBody(BuildContext context, bool showEditBtn) {
    var flatButton = FlatButton(
        onPressed: () async {
          Navigator.of(context).pushNamed(Routes.create_edit_review,
              arguments: CreateEditReviewScreenObject(
                reviewType: stringToReviewType(reviewData.reviewType),
                relatedId: ParseModelReviews.getRelatedId(reviewData),
                reviewModel: reviewData,
              ));
        },
        child: Text(AppLocalizations.of(context)
            .translate("reviewPageAppBarRightEditBtnTitle")));
    var actionsWidget = showEditBtn ? <Widget>[flatButton] : <Widget>[];
    return Scaffold(
        appBar: AppBar(
          leading: IconButton(
            icon: Icon(getArrowBackIcon()),
            onPressed: () {
              Navigator.of(context).pop();
            },
          ),
          title: Text(AppLocalizations.of(context)
              .translate("reviewsDetailPageAppBarTitleTxt")),
          actions: actionsWidget,
        ),
        body: _buildSingleReview(context));
  }

  Widget _buildSingleReview(BuildContext context) {
    ParseModelReviews review =
        FilterModels.instance.getSingleReview(context, reviewId);
    return SingleChildScrollView(
        padding: EdgeInsets.only(top: 8.0),
        child: Container(
          decoration: new BoxDecoration(color: Colors.white),
          child: ReviewItem(
            reviewData: review,
          ),
        ));
  }
}
