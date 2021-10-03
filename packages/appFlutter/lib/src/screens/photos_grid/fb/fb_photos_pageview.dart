import 'package:flutter/material.dart';
import 'package:ieatta/camera/screens/edit_photo_router.dart';
import 'package:ieatta/routers/fluro_navigator.dart';
import 'package:ieatta/routers/params_helper.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/components/photos/photo_base_view.dart';

import 'widget/top_user_view.dart';

class FBPhotosPageViewObject {
  final int selectedIndex;
  final List<ParseModelPhotos> photos;

  FBPhotosPageViewObject({required this.photos, required this.selectedIndex});
}

class FBPhotosPageView extends StatefulWidget {
  FBPhotosPageView({Key? key}) : super(key: key);

  @override
  _FBPhotosPageViewState createState() => _FBPhotosPageViewState();
}

class _FBPhotosPageViewState extends State<FBPhotosPageView> {
  final pageIndexNotifier = ValueNotifier<int>(0);
  bool showInfoPanel = false;
  int selectedIndex = 0;
  late PageController _pageController;
  List<ParseModelPhotos> photos = [];

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();

    final Object? _object = ModalRoute.of(context)!.settings.arguments;
    setState(() {
      photos = (_object as FBPhotosPageViewObject).photos;
      selectedIndex = (_object as FBPhotosPageViewObject).selectedIndex;
    });
    _pageController = PageController(initialPage: (_object as FBPhotosPageViewObject).selectedIndex);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Container(
            child: Stack(
      children: [buildPhotosPageView(context), if (showInfoPanel) _buildFg()],
    )));
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
        return Stack(
          children: <Widget>[
            _buildCurrentImage(index),
            _buildTouchPanel(),
          ],
        );
      },
    );
  }

  Widget _buildCurrentImage(int index) {
    return Container(
      color: Colors.black,
      width: MediaQuery.of(context).size.width,
      height: MediaQuery.of(context).size.height,
      child: PhotoBaseView(photoData: photos[index], fit: BoxFit.fitWidth),
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

  Widget _buildPhotoInfo() {
    ParseModelPhotos photo = photos[selectedIndex];
    var note = photo.extraNote;
    // var note = "The Firebase different prototype and test environments, anything from one-off prototyping sessions to production-scale continuous integration workflows.";

    if (note == "") {
      return Container();
    }
    return Container(
      width: MediaQuery.of(context).size.width,
      color: Colors.black,
      child: Padding(
          padding: EdgeInsets.only(left: 16, right: 16, top: 18, bottom: 48),
          child: SingleChildScrollView(
            child: Text(
              note!,
              style: TextStyle(color: Colors.white),
            ),
          )),
    );
  }

  Widget _buildFg() {
    ParseModelPhotos photo = photos[selectedIndex];
    return Column(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        TopBaseUserView(
          onEditPress: () {
            NavigatorUtils.push(context, '${EditPhotoRouter.editPhotoPage}?${ParamsHelper.ID}=${photo.uniqueId}');
          },
          user: photo,
          selectedIndex: selectedIndex,
          totalCount: photos.length,
        ),
        _buildPhotoInfo()
      ],
    );
  }
}
