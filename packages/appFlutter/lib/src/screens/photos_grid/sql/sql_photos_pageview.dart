import 'package:flutter/material.dart';
import 'package:ieatta/src/appModels/models/photos_sql.dart';
import 'package:ieatta/src/components/photos/image.dart';

import 'widget/top_user_view.dart';

class SqlPhotosPageViewObject {
  final List<SqlPhotos> photos;

  final int selectedIndex;

  SqlPhotosPageViewObject(
      {@required this.photos, @required this.selectedIndex});
}

class SqlPhotosPageView extends StatefulWidget {
  SqlPhotosPageView({Key key}) : super(key: key);

  @override
  _SqlPhotosPageViewState createState() => _SqlPhotosPageViewState();
}

class _SqlPhotosPageViewState extends State<SqlPhotosPageView> {
  final pageIndexNotifier = ValueNotifier<int>(0);
  List<SqlPhotos> photos = [];
  int selectedIndex = 0;
  bool showInfoPanel = false;
  PageController _pageController;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();

    final SqlPhotosPageViewObject _object =
        ModalRoute.of(context).settings.arguments;
    setState(() {
      photos = _object.photos;
      selectedIndex = _object.selectedIndex;
    });
    _pageController = PageController(initialPage: _object.selectedIndex);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Container(
      child: buildPhotosPageView(context),
    ));
  }

  Widget buildPhotosPageView(BuildContext context) {
    return PageView.builder(
      controller: _pageController,
      onPageChanged: (int index) {
        setState(() {
          selectedIndex = index;
        });
      },
      itemCount: photos.length,
      itemBuilder: (context, index) {
        return Padding(
            padding: EdgeInsets.all(8.0),
            child: Stack(
              children: <Widget>[
                buildLocalImageView(photos[index].offlinePath),
                _buildTouchPanel(),
                if (showInfoPanel) _buildFg(photos[index])
              ],
            ));
      },
    );
  }

  Widget _buildTouchPanel() {
    return InkWell(
        onTap: () {
          setState(() {
            showInfoPanel = !showInfoPanel;
          });
        },
        child: Container());
  }

  Widget _buildFg(SqlPhotos photo) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        Container(
          height: 100,
          color: Colors.black,
          child: TopUserView(photo: photo),
        ),
        Container(
          height: 100,
//          color: Colors.yellow,
        )
      ],
    );
  }
}
