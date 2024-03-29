import 'package:app_sql/app_sql.dart';
import 'package:app_widgets/app_widgets.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/ui/pages/photos_grid/sql/widget/top_user_view.dart';
import 'package:my_plugin/my_plugin.dart';

class SqlPhotosPageViewObject {
  final List<SqlPhoto> photos;

  final int selectedIndex;

  SqlPhotosPageViewObject({required this.photos, required this.selectedIndex});
}

class SqlPhotosPageView extends StatefulWidget {
  const SqlPhotosPageView({Key? key}) : super(key: key);

  @override
  _SqlPhotosPageViewState createState() => _SqlPhotosPageViewState();
}

class _SqlPhotosPageViewState extends State<SqlPhotosPageView> {
  final pageIndexNotifier = ValueNotifier<int>(0);
  List<SqlPhoto> photos = [];
  int selectedIndex = 0;
  bool showInfoPanel = false;
  late PageController _pageController;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();

    final Object? _object = ModalRoute.of(context)!.settings.arguments;
    setState(() {
      photos = (_object as SqlPhotosPageViewObject).photos;
      selectedIndex = (_object).selectedIndex;
    });
    _pageController = PageController(
        initialPage: (_object as SqlPhotosPageViewObject).selectedIndex);
  }

  @override
  Widget build(BuildContext context) {
    return BaseScaffold(
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
      width: Get.width,
      height: MediaQuery.of(context).size.height,
      child: buildLocalImageView(photos[index].offlinePath),
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

  Widget _buildFg() {
    return Column(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        TopUserView(
          selectedIndex: selectedIndex,
          totalCount: photos.length,
        ),
        Container(
          height: 100,
//          color: Colors.yellow,
        )
      ],
    );
  }
}
