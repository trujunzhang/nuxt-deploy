import 'package:flutter/material.dart';

class BaseNestedScrollPage extends StatelessWidget {
  final ScrollController _scrollController = ScrollController();

  final Widget scrollBody;
  final Widget sliverListView;
  final Widget sliverPersistentHeaderView;

  BaseNestedScrollPage(
      {Key? key,
      required this.sliverListView,
      required this.sliverPersistentHeaderView,
      required this.scrollBody})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    var body = Expanded(
        child: NestedScrollView(
            controller: _scrollController,
            headerSliverBuilder:
                (BuildContext context, bool innerBoxIsScrolled) {
              return <Widget>[
                SliverList(
                  delegate: SliverChildBuilderDelegate(
                      (BuildContext context, int index) {
                    return Column(
                      children: <Widget>[
                        sliverListView,
                      ],
                    );
                  }, childCount: 1),
                ),
                SliverPersistentHeader(
                  pinned: true,
                  floating: true,
                  delegate: ContestTabHeader(
                    sliverPersistentHeaderView,
                  ),
                ),
              ];
            },
            body: scrollBody));
    return Container(
      child: Scaffold(
        body: Stack(
          children: <Widget>[
            InkWell(
              splashColor: Colors.transparent,
              focusColor: Colors.transparent,
              highlightColor: Colors.transparent,
              hoverColor: Colors.transparent,
              onTap: () {
                FocusScope.of(context).requestFocus(FocusNode());
              },
              child: Column(
                children: <Widget>[
                  body // dody
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class ContestTabHeader extends SliverPersistentHeaderDelegate {
  ContestTabHeader(
    this.searchUI,
  );

  final Widget searchUI;

  @override
  Widget build(
      BuildContext context, double shrinkOffset, bool overlapsContent) {
    return searchUI;
  }

  @override
  double get maxExtent => 52.0;

  @override
  double get minExtent => 52.0;

  @override
  bool shouldRebuild(SliverPersistentHeaderDelegate oldDelegate) {
    return false;
  }
}
