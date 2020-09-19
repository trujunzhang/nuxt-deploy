import 'package:flutter/material.dart';
import 'package:ieatta/src/appModels/models/Avatar_user.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/components/avatar_widget.dart';

class TopBaseUserView extends StatefulWidget {
  TopBaseUserView({Key key, this.user}) : super(key: key);

  final AvatarUser user;

  @override
  _TopBaseUserViewState createState() => _TopBaseUserViewState();
}

class _TopBaseUserViewState extends State<TopBaseUserView> {
  @override
  Widget build(BuildContext context) {
    return Container(
        padding: const EdgeInsets.only(top: 30.0),
        child: Row(
          children: <Widget>[
            IconButton(
                icon: Icon(Icons.arrow_back),
                color: Colors.white,
                onPressed: () {
                  Navigator.of(context).pop();
                }),
            AvatarWidget(
              user: widget.user,
              padding: EdgeInsets.only(left: 8.0, right: 8.0),
            ),
            Text(
              widget.user.username,
              style: TextStyle(color: Colors.white),
            )
          ],
        ));
  }
}
