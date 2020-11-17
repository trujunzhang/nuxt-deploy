import 'package:flutter/material.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/src/appModels/models/User_menu.dart';
import 'package:ieatta/src/appModels/models/Users.dart';
import 'package:ieatta/src/components/users/image.dart';
import 'package:ieatta/src/layout/app_theme.dart';

class SummaryPage extends StatefulWidget {
  final ParseModelUsers userData;
  final List<UserMenu> userMenus;

  SummaryPage({Key key, @required this.userData, @required this.userMenus})
      : super(key: key);

  @override
  _SummaryPageState createState() => _SummaryPageState();
}

class _SummaryPageState extends State<SummaryPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Container(
          width: MediaQuery.of(context).size.width,
          // color: Color(0xf5f5f5),
          // color: Color(0xcccccc),
          color: Colors.lightBlue,
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
                  fontWeight: FontWeight.bold,
                  fontSize: 22,
                ),
              ),
              SizedBox(height: 20),
              _buildActions(),
              SizedBox(height: 40),
              Padding(
                padding: EdgeInsets.symmetric(horizontal: 50),
                child: buildStatisticInfo(),
              ),
              SizedBox(height: 20),
              Container(
                color: Colors.white,
                child: buildRows(),
              )
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildActions() {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: <Widget>[
        FlatButton(
          child: Icon(
            Icons.message,
            color: Colors.white,
          ),
          color: Colors.grey,
          onPressed: () {},
        ),
        SizedBox(width: 10),
        FlatButton(
          child: Icon(
            Icons.add,
            color: Colors.white,
          ),
          color: Theme.of(context).accentColor,
          onPressed: () {},
        ),
      ],
    );
  }

  Widget buildStatisticInfo() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: <Widget>[
        Column(
          children: <Widget>[
            Text(
              123.toString(),
              style: TextStyle(
                fontWeight: FontWeight.bold,
                fontSize: 22,
              ),
            ),
            SizedBox(height: 4),
            Text(
              "Restaurants",
              style: TextStyle(),
            ),
          ],
        ),
        Column(
          children: <Widget>[
            Text(
              234.toString(),
              style: TextStyle(
                fontWeight: FontWeight.bold,
                fontSize: 22,
              ),
            ),
            SizedBox(height: 4),
            Text(
              "Reviews",
              style: TextStyle(),
            ),
          ],
        ),
        Column(
          children: <Widget>[
            Text(
              345.toString(),
              style: TextStyle(
                fontWeight: FontWeight.bold,
                fontSize: 22,
              ),
            ),
            SizedBox(height: 4),
            Text(
              "Photos",
              style: TextStyle(),
            ),
          ],
        ),
      ],
    );
  }

  Widget buildRows() {
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
          leading: Icon(menu.icon),
          title: Row(
            children: [
              Text(menu.title),
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
