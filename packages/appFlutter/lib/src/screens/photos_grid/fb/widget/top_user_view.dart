import 'package:flutter/material.dart';
import 'package:ieatta/src/appModels/models/Avatar_user.dart';
import 'package:ieatta/src/components/avatar_widget.dart';

class TopBaseUserView extends StatelessWidget {
  const TopBaseUserView(
      {Key key,
      @required this.user,
      @required this.selectedIndex,
      @required this.totalCount})
      : super(key: key);
  final AvatarUser user;
  final int selectedIndex;
  final int totalCount;

  Widget _buildTitle(BuildContext context) {
    return Row(
      children: <Widget>[
        IconButton(
            icon: Icon(Icons.arrow_back),
            color: Colors.white,
            onPressed: () {
              Navigator.of(context).pop();
            }),
        AvatarWidget(
          user: user,
          padding: EdgeInsets.only(left: 8.0, right: 8.0),
        ),
        Text(
          user.username,
          style: TextStyle(color: Colors.white),
        )
      ],
    );
  }

  Widget _buildPageIndex() {
    return Padding(
        padding: EdgeInsets.only(bottom: 6),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.end,
          children: [
            Center(
              child: Text(
                (selectedIndex + 1).toString() + '/' + totalCount.toString(),
                style: TextStyle(color: Colors.white),
              ),
            )
          ],
        ));
  }

  @override
  Widget build(BuildContext context) {
    return Container(
        padding: const EdgeInsets.only(top: 30.0),
        child: Stack(
          children: [_buildTitle(context), _buildPageIndex()],
        ));
  }
}
