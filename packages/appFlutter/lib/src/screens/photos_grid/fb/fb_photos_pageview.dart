import 'package:flutter/material.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/components/photos/image.dart';
import 'package:ieatta/src/components/photos/photo_base_view.dart';

import 'widget/top_user_view.dart';

class FBPhotosPageViewObject {
  final List<ParseModelPhotos> photos;

  final int selectedIndex;

  FBPhotosPageViewObject({@required this.photos, @required this.selectedIndex});
}

class FBPhotosPageView extends StatefulWidget {
  FBPhotosPageView({Key key}) : super(key: key);

  @override
  _FBPhotosPageViewState createState() => _FBPhotosPageViewState();
}

class _FBPhotosPageViewState extends State<FBPhotosPageView> {
  final pageIndexNotifier = ValueNotifier<int>(0);
  List<ParseModelPhotos> photos = [];
  bool showInfoPanel = false;
  int selectedIndex = 0;
  PageController _pageController;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();

    final FBPhotosPageViewObject _object =
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
      onPageChanged: (index) => pageIndexNotifier.value = index,
      itemCount: photos.length,
      itemBuilder: (context, index) {
        return Padding(
            padding: EdgeInsets.all(8.0),
            child: Stack(
              children: <Widget>[
                _buildCurrentImage(index),
                _buildTouchPanel(),
                if (showInfoPanel) _buildFg(photos[index])
              ],
            ));
      },
    );
  }

  Widget _buildCurrentImage(int index) {
    return Container(
      width: MediaQuery.of(context).size.width,
      height: MediaQuery.of(context).size.height,
      child: PhotoBaseView(photoData: photos[index]),
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

  Widget _buildFg(ParseModelPhotos photo) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        Container(
          height: 100,
          color: Colors.black,
          child: TopBaseUserView(user: photo),
        ),
        Container(
          height: 100,
//          color: Colors.yellow,
        )
      ],
    );
  }
}
