import 'package:flutter/material.dart';
import 'package:ieatta/common/langs/l10n.dart';
import 'package:ieatta/components/components.dart';
import 'package:ieatta/core/filter/filter_models.dart';
import 'package:ieatta/core/providers/theme_provider.dart';
import 'package:ieatta/routers/fluro_navigator.dart';
import 'package:ieatta/routers/params_helper.dart';
import 'package:ieatta/src/appModels/models/Users.dart';
import 'package:ieatta/src/components/users/image.dart';
import 'package:ieatta/src/layout/app_theme.dart';
import 'package:ieatta/src/screens/edit/edit_router.dart';
import 'package:ieatta/src/screens/user_profile/User_menu_model.dart';
import 'package:provider/provider.dart';

class SummaryPage extends StatelessWidget {
  final bool isLoggedUser;
  final String userId;
  final AppBarBackType? leadingType;

  SummaryPage({Key? key, required this.userId, required this.isLoggedUser, this.leadingType = AppBarBackType.Back})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BaseScaffold(
        appBar: MyAppBar(
          centerTitle: true,
          title: MyTitle(S.of(context).drawerMenuItemProfile),
          leadingType: leadingType,
        ),
        body: _buildBody(context));
  }

  Widget _buildBody(BuildContext context) {
    ParseModelUsers? userData = FilterModels.instance.getSingleUser(context, userId);
    if (userData == null) {
      return Container();
    }
    return Stack(
      children: [
        _buildPage(context),
        isLoggedUser
            ? Align(
                alignment: Alignment.topRight,
                child: Padding(
                  padding: const EdgeInsets.only(top: 50.0, right: 12.0),
                  child: IconButton(
                      icon: Icon(Icons.edit, color: Colors.blue),
                      onPressed: () {
                        NavigatorUtils.push(context, EditRouter.editUserPage);
                      }),
                ),
              )
            : SizedBox()
      ],
    );
  }

  Widget _buildInfo(BuildContext context) {
    ParseModelUsers? userData = FilterModels.instance.getSingleUser(context, userId);
    return Container(
        child: Card(
            child: Column(
      children: [
        SizedBox(height: 40),
        Container(
          height: 120,
          width: 120,
          decoration: BoxDecoration(
            shape: BoxShape.circle,
            boxShadow: <BoxShadow>[
              BoxShadow(color: AppTheme.grey.withOpacity(0.6), offset: const Offset(2.0, 4.0), blurRadius: 8),
            ],
          ),
          child: ClipRRect(
            borderRadius: const BorderRadius.all(Radius.circular(60.0)),
            child: buildParseModelUsersImage(userData!),
          ),
        ),
        SizedBox(height: 10),
        Text(
          userData.username,
          style: TextStyle(
            fontWeight: FontWeight.bold, fontSize: 22,
            // color: TEXT_COLOR
          ),
        ),
        // SizedBox(height: 20),
        // _buildActions(),
        SizedBox(height: 40),
        Padding(
          padding: EdgeInsets.symmetric(horizontal: 50),
          child: buildStatisticInfo(context),
        ),
        SizedBox(height: 16),
      ],
    )));
  }

  Widget _buildPage(BuildContext context) {
    return SingleChildScrollView(
      child: Container(
        width: MediaQuery.of(context).size.width,
        // color: Colors.lightBlue,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            _buildInfo(context),
            SizedBox(height: 4),
            Container(
              child: buildRows(context),
            )
          ],
        ),
      ),
    );
  }

  Widget buildStatisticInfo(BuildContext context) {
    List<UserMenu> userMenus = UserMenu.updateUserMenus(context, userId);
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: <Widget>[
        Column(
          children: <Widget>[
            Text(
              userMenus[0].value.toString(),
              style: TextStyle(
                fontWeight: FontWeight.bold, fontSize: 22,
                // color: TEXT_COLOR
              ),
            ),
            SizedBox(height: 4),
            Text(userMenus[0].title
                // style: TextStyle(color: TEXT_COLOR),
                ),
          ],
        ),

        Column(
          children: <Widget>[
            Text(
              userMenus[1].value.toString(),
              style: TextStyle(
                fontWeight: FontWeight.bold, fontSize: 22,
                // color: TEXT_COLOR
              ),
            ),
            SizedBox(height: 4),
            Text(userMenus[1].title
                // style: TextStyle(color: TEXT_COLOR),
                ),
          ],
        ),
        Column(
          children: <Widget>[
            Text(
              userMenus[2].value.toString(),
              style: TextStyle(
                fontWeight: FontWeight.bold, fontSize: 22,
                // color: TEXT_COLOR
              ),
            ),
            SizedBox(height: 4),
            Text(userMenus[2].title
                // style: TextStyle(color: TEXT_COLOR),
                ),
          ],
        ),

      ],
    );
  }

  Widget buildRows(BuildContext context) {
    List<UserMenu> userMenus = UserMenu.updateUserMenus(context, userId);
    ParseModelUsers? userData = FilterModels.instance.getSingleUser(context, userId);
    bool isDarkModeOn = Provider.of<ThemeProvider>(context).isDarkModeOn;
    return ListView.builder(
      shrinkWrap: true,
      physics: ScrollPhysics(),
      primary: false,
      padding: EdgeInsets.all(5),
      itemCount: userMenus.length,
      itemBuilder: (BuildContext context, int index) {
        UserMenu menu = userMenus[index];
        return ListTile(
          onTap: () {
            NavigatorUtils.push(
                context, ParamsHelper.getUserPagesPath(routePath: menu.routePath, userId: userData!.id));
          },
          leading: Icon(menu.icon, color: isDarkModeOn ? Colors.white : Colors.black),
          title: Row(
            children: [
              Text(
                menu.title,
                // style: TextStyle(color: Colors.black),
              ),
              SizedBox(
                width: 6,
              ),
              Text(
                menu.value.toString(),
                style: TextStyle(
                  color: Colors.grey,
                ),
              ),
            ],
          ),
        );
      },
    );
  }
}
