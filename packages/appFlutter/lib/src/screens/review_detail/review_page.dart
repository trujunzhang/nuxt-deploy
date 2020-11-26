import 'package:flutter/material.dart';
import 'package:ieatta/app/app_localizations.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/core/database/review_helper.dart';
import 'package:ieatta/core/models/auth_user_model.dart';
import 'package:ieatta/core/providers/auth_provider.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';
import 'package:ieatta/src/screens/edit/create_edit_review_screen.dart';
import 'package:ieatta/src/screens/review_detail/review_view.dart';
import 'package:provider/provider.dart';

class ReviewPage extends StatefulWidget {
  ReviewPage({Key key}) : super(key: key);

  @override
  _ReviewPageState createState() => _ReviewPageState();
}

class _ReviewPageState extends State<ReviewPage> {
  ParseModelReviews reviewData;
  double rate = 0;
  String note = '';

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final ParseModelReviews _reviewModel =
        ModalRoute.of(context).settings.arguments;
    assert(_reviewModel != null, 'Review page');

    setState(() {
      reviewData = _reviewModel;
      rate = _reviewModel.rate;
      note = _reviewModel.body;
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
          final result = await Navigator.of(context).pushNamed(
              Routes.create_edit_review,
              arguments: CreateEditReviewScreenObject(
                  reviewModel: reviewData,
                  restaurantId: reviewData.restaurantId));
          if (result != null) {
            setState(() {
              rate = (result as ReviewReturnModel).rate;
              note = (result as ReviewReturnModel).note;
            });
          }
        },
        child: Text(AppLocalizations.of(context)
            .translate("reviewPageAppBarRightEditBtnTitle")));
    var actionsWidget = showEditBtn ? <Widget>[flatButton] : <Widget>[];
    return Scaffold(
        appBar: AppBar(
          leading: IconButton(
            icon: Icon(Icons.cancel),
            onPressed: () {
              Navigator.of(context).pop();
            },
          ),
          title: Text(AppLocalizations.of(context)
              .translate("reviewsDetailPageAppBarTitleTxt")),
          actions: actionsWidget,
        ),
        body: _buildSingleReview());
  }

  Widget _buildSingleReview() {
    return Padding(
      padding: EdgeInsets.only(top: 18.0),
      child: SingleChildScrollView(
        child: ReviewView(
          reviewData: reviewData,
          rate: rate,
          note: note,
        ),
      ),
    );
  }
}
