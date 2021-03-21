import 'package:flutter/material.dart';
import 'package:ieatta/app/app_localizations.dart';
import 'package:ieatta/core/filter/filter_models.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';
import 'package:ieatta/src/components/navigation/arrow_helper.dart';
import 'package:ieatta/src/screens/reviews/detail/reviews_body.dart';

class UserReviews extends StatefulWidget {
  UserReviews({Key key}) : super(key: key);

  @override
  _UserReviewsState createState() => _UserReviewsState();
}

class _UserReviewsState extends State<UserReviews> {
  String _userId;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final String _userIdArg = ModalRoute.of(context).settings.arguments;
    if (_userIdArg != null) {
      _userId = _userIdArg;
    }
    // print('_userId: $_userId');
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
              .translate("userMenuReviewsAppBarTitle")),
        ),
        body: _buildBody(context));
  }

  Widget _buildBody(BuildContext context) {
    List<ParseModelReviews> reviewsList =
        FilterModels.instance.getReviewsListByUser(context, _userId);
    if (reviewsList.length == 0) {
      return Center(
        child: Text('No Data'),
      );
    }
    return SingleChildScrollView(
        padding: EdgeInsets.only(top: 18.0),
        child: Container(
            decoration: new BoxDecoration(color: Colors.white),
            child: ReviewsBody(reviewsList: reviewsList)));
  }
}
