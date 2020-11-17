import 'package:flutter/material.dart';
import 'package:ieatta/app/app_localizations.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';
import 'package:ieatta/src/components/navigation/arrow_helper.dart';
import 'package:ieatta/src/logic/reviews_results.dart';
import 'package:ieatta/src/screens/restaurant_detail/widget/reviews_body.dart';
import 'package:provider/provider.dart';

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
    final firestoreDatabase =
        Provider.of<FirestoreDatabase>(context, listen: false);
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
      body: StreamBuilder(
          stream: firestoreDatabase.userMenuStream(
            userId: _userId,
            path: FBCollections.Reviews,
          ),
          builder: (BuildContext context, AsyncSnapshot fbSnapshot) {
            if (fbSnapshot.hasError) {}
            if (!fbSnapshot.hasData) {
              return Container();
            }
            return ReviewsBody(
                useScrollview: true,
                reviewList: parseReviews(
                  fbSnapshot.data.documents,
                ));
          }),
    );
  }
}