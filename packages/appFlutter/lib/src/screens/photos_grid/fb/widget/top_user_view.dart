import 'package:flutter/material.dart';
import 'package:ieatta/core/models/auth_user_model.dart';
import 'package:ieatta/core/providers/auth_provider.dart';
import 'package:ieatta/src/appModels/models/Avatar_user.dart';
import 'package:ieatta/src/components/avatar_widget.dart';
import 'package:ieatta/src/components/navigation/arrow_helper.dart';
import 'package:ieatta/util/app_navigator.dart';
import 'package:provider/provider.dart';

class TopBaseUserView extends StatelessWidget {
  const TopBaseUserView(
      {Key? key, required this.user, required this.selectedIndex, required this.totalCount, this.onEditPress})
      : super(key: key);
  final AvatarUser user;
  final int selectedIndex;
  final int totalCount;
  final Function? onEditPress;

  Widget _buildTitle(BuildContext context) {
    return Row(
      children: <Widget>[
        IconButton(
            icon: Icon(getArrowBackIcon()),
            color: Colors.white,
            onPressed: () {
              AppNavigator.goBack(context);
            }),
        AvatarWidget(
          user: user,
          padding: EdgeInsets.only(left: 8.0, right: 8.0),
        ),
        Text(
          user.username!,
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

  Widget _buildRightEditBtn(BuildContext context) {
    final authService = Provider.of<AuthProvider>(context, listen: false);

    return StreamBuilder<AuthUserModel?>(
        stream: authService.user,
        builder: (BuildContext context, AsyncSnapshot<AuthUserModel?> snapshot) {
          final AuthUserModel? loggedUser = snapshot.data;

          if (loggedUser == null) {
            return Container();
          }
          if (loggedUser.uid != user.uid) {
            return Container();
          }

          return Padding(
            padding: EdgeInsets.only(top: 30, right: 32),
            child: Container(
              // color: Colors.red,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.end,
                children: [
                  InkWell(
                    onTap: () {
                      // TODO:[2021-8-18] djzhang
                      onEditPress!();
                    },
                    child: Text(
                      "edit",
                      style: TextStyle(color: Colors.orangeAccent, fontSize: 18),
                    ),
                  )
                ],
              ),
            ),
          );
        });
  }

  @override
  Widget build(BuildContext context) {
    return Container(
        height: 120,
        color: Colors.black,
        child: Container(
            padding: const EdgeInsets.only(top: 40.0),
            child: Stack(
              children: [_buildTitle(context), _buildPageIndex(), if (onEditPress != null) _buildRightEditBtn(context)],
            )));
  }
}
