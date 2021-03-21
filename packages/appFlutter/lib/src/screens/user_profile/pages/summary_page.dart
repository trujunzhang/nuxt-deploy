import 'package:flutter/material.dart';
import 'package:ieatta/app/app_localizations.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/core/providers/theme_provider.dart';
import 'package:ieatta/src/appModels/models/User_menu.dart';
import 'package:ieatta/src/appModels/models/Users.dart';
import 'package:ieatta/src/components/users/image.dart';
import 'package:ieatta/src/layout/app_theme.dart';
import 'package:provider/provider.dart';

class SummaryPage extends StatefulWidget {
  final bool isLoggedUser;
  final ParseModelUsers userData;
  final List<UserMenu> userMenus;

  SummaryPage(
      {Key key,
      @required this.userData,
      @required this.userMenus,
      @required this.isLoggedUser})
      : super(key: key);

  @override
  _SummaryPageState createState() => _SummaryPageState();
}

class _SummaryPageState extends State<SummaryPage> {
  // final Color TEXT_COLOR = Colors.white;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: Text('Profile'),
      ),
      body: Stack(
        children: [
          _buildPage(context),
          widget.isLoggedUser
              ? Align(
                  alignment: Alignment.topRight,
                  child: Padding(
                    padding: const EdgeInsets.only(top: 50.0, right: 12.0),
                    child: IconButton(
                        icon: Icon(Icons.edit),
                        onPressed: () {
                          Navigator.of(context).pushNamed(
                            Routes.edit_user,
                          );
                        }),
                  ),
                )
              : null
        ],
      ),
    );
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
            SizedBox(height: 40),
            Container(
              height: 120,
              width: 120,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                boxShadow: <BoxShadow>[
                  BoxShadow(
                      color: AppTheme.grey.withOpacity(0.6),
                      offset: const Offset(2.0, 4.0),
                      blurRadius: 8),
                ],
              ),
              child: ClipRRect(
                borderRadius: const BorderRadius.all(Radius.circular(60.0)),
                child: buildParseModelUsersImage(widget.userData),
              ),
            ),
            SizedBox(height: 10),
            Text(
              widget.userData.username,
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
              child: buildStatisticInfo(),
            ),
            SizedBox(height: 20),
            Container(
              child: buildRows(context),
            )
          ],
        ),
      ),
    );
  }

  Widget buildStatisticInfo() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: <Widget>[
        Column(
          children: <Widget>[
            Text(
              widget.userMenus[0].value.toString(),
              style: TextStyle(
                fontWeight: FontWeight.bold, fontSize: 22,
                // color: TEXT_COLOR
              ),
            ),
            SizedBox(height: 4),
            Text(widget.userMenus[0].title
                // style: TextStyle(color: TEXT_COLOR),
                ),
          ],
        ),
        Column(
          children: <Widget>[
            Text(
              widget.userMenus[1].value.toString(),
              style: TextStyle(
                fontWeight: FontWeight.bold, fontSize: 22,
                // color: TEXT_COLOR
              ),
            ),
            SizedBox(height: 4),
            Text(widget.userMenus[1].title
                // style: TextStyle(color: TEXT_COLOR),
                ),
          ],
        ),
        Column(
          children: <Widget>[
            Text(
              widget.userMenus[2].value.toString(),
              style: TextStyle(
                fontWeight: FontWeight.bold, fontSize: 22,
                // color: TEXT_COLOR
              ),
            ),
            SizedBox(height: 4),
            Text(widget.userMenus[2].title
                // style: TextStyle(color: TEXT_COLOR),
                ),
          ],
        ),
      ],
    );
  }

  Widget buildRows(BuildContext context) {
    var isDarkModeOn = Provider.of<ThemeProvider>(context).isDarkModeOn;
    return ListView.builder(
      shrinkWrap: true,
      physics: ScrollPhysics(),
      primary: false,
      padding: EdgeInsets.all(5),
      itemCount: widget.userMenus.length,
      itemBuilder: (BuildContext context, int index) {
        UserMenu menu = widget.userMenus[index];
        return ListTile(
          onTap: () {
            Navigator.of(context)
                .pushNamed(menu.routeName, arguments: widget.userData.id);
          },
          leading: Icon(menu.icon,
              color: isDarkModeOn ? Colors.white : Colors.black),
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
