import 'package:flutter/material.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/core/models/auth_user_model.dart';
import 'package:ieatta/core/providers/auth_provider.dart';
import 'package:ieatta/src/components/avatar_widget.dart';
import 'package:ieatta/src/screens/edit/create_edit_review_screen.dart';
import 'package:provider/provider.dart';

class ReviewEdit extends StatefulWidget {
  ReviewEdit({Key key, @required this.restaurantId}) : super(key: key);

  final String restaurantId;

  @override
  _ReviewEditState createState() => _ReviewEditState();
}

class _ReviewEditState extends State<ReviewEdit> {
  @override
  Widget build(BuildContext context) {
    final authService = Provider.of<AuthProvider>(context, listen: false);

    return StreamBuilder<AuthUserModel>(
        stream: authService.user,
        builder: (BuildContext context, AsyncSnapshot<AuthUserModel> snapshot) {
          final AuthUserModel user = snapshot.data;

          return Container(
            child: Row(
              children: <Widget>[
                AvatarWidget(
                  user: user,
                  isShowingUsernameLabel: true,
                  padding: EdgeInsets.only(left: 8.0, right: 8.0),
                ),
                GestureDetector(
                  child: Text(
                    'Add a comment...',
                    style: TextStyle(color: Colors.grey),
                  ),
                  onTap: () {
                    Navigator.of(context).pushNamed(Routes.create_edit_review,
                        arguments: CreateEditReviewScreenObject(
                            reviewModel: null,
                            restaurantId: widget.restaurantId));
                  },
                ),
              ],
            ),
          );
        });
  }
}
