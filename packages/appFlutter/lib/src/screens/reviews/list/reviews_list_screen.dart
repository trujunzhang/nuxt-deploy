import 'package:flutter/material.dart';
import 'package:ieatta/app/app_localizations.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';
import 'package:ieatta/src/components/firebase/stream_builder_view.dart';
import 'package:ieatta/src/screens/reviews/detail/reviews_body.dart';

class ReviewsListObject {
  final Stream<List<ParseModelReviews>> stream;

  ReviewsListObject({@required this.stream});
}

class ReviewsListScreen extends StatefulWidget {
  ReviewsListScreen({Key key}) : super(key: key);

  @override
  _ReviewsListScreenState createState() => _ReviewsListScreenState();
}

class _ReviewsListScreenState extends State<ReviewsListScreen> {
  Stream<List<ParseModelReviews>> stream;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final ReviewsListObject _reviewsListObject =
        ModalRoute.of(context).settings.arguments;
    setState(() {
      stream = _reviewsListObject.stream;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          leading: IconButton(
            icon: Icon(Icons.cancel),
            onPressed: () {
              Navigator.of(context).pop();
            },
          ),
          title: Text(AppLocalizations.of(context)
              .translate("reviewsListPageAppBarTitleTxt")),
        ),
        body: _buildListReviews());
  }

  Widget _buildListReviews() {
    return Padding(
      padding: EdgeInsets.only(top: 18.0),
      child: SingleChildScrollView(
        child: StreamBuilderView<List<ParseModelReviews>>(
          stream: stream,
          render: (AsyncSnapshot fbSnapshot) {
            return ReviewsBody(reviewsList: fbSnapshot.data);
          },
        ),
      ),
    );
  }
}
