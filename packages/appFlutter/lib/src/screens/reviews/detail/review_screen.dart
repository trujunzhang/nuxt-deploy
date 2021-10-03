import 'package:flutter/material.dart';
import 'package:ieatta/common/langs/l10n.dart';
import 'package:ieatta/core/filter/filter_models.dart';
import 'package:ieatta/core/models/auth_user_model.dart';
import 'package:ieatta/core/providers/auth_provider.dart';
import 'package:ieatta/routers/fluro_navigator.dart';
import 'package:ieatta/routers/params_helper.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';
import 'package:ieatta/src/components/navigation/arrow_helper.dart';
import 'package:ieatta/src/screens/edit/edit_router.dart';
import 'package:ieatta/util/app_navigator.dart';
import 'package:provider/provider.dart';

import 'review_item.dart';

class ReviewScreen extends StatelessWidget {
  ReviewScreen({Key? key, required this.reviewId}) : super(key: key);

  final String reviewId;

  @override
  Widget build(BuildContext context) {
    final authService = Provider.of<AuthProvider>(context, listen: false);
    return StreamBuilder<AuthUserModel?>(
        stream: authService.user,
        builder: (BuildContext context, AsyncSnapshot<AuthUserModel?> snapshot) {
          final AuthUserModel? user = snapshot.data;

          return _buildBody(context, user);
        });
  }

  Widget _buildBody(BuildContext context, AuthUserModel? user) {
    ParseModelReviews? review = FilterModels.instance.getSingleReview(context, reviewId);

    var showEditBtn = (user != null && user.uid == review!.creatorId);

    var flatButton = TextButton(
        onPressed: () async {
          NavigatorUtils.push(context, '${EditRouter.editReviewPage}?${ParamsHelper.ID}=${review!.uniqueId}');
        },
        child: Text(S.of(context).reviewPageAppBarRightEditBtnTitle));
    var actionsWidget = showEditBtn ? <Widget>[flatButton] : <Widget>[];
    return Scaffold(
        appBar: AppBar(
          leading: IconButton(
            icon: Icon(getArrowBackIcon()),
            onPressed: () {
              AppNavigator.goBack(context);
            },
          ),
          title: Text(S.of(context).reviewsDetailPageAppBarTitleTxt),
          actions: actionsWidget,
        ),
        body: _buildSingleReview(context, review));
  }

  Widget _buildSingleReview(BuildContext context, ParseModelReviews? review) {
    return SingleChildScrollView(
        padding: EdgeInsets.only(top: 8.0),
        child: Container(
          decoration: new BoxDecoration(color: Colors.white),
          child: ReviewItem(
            reviewData: review!,
          ),
        ));
  }
}
