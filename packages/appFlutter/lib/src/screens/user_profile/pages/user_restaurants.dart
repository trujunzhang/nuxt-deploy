import 'package:flutter/material.dart';
import 'package:ieatta/app/app_localizations.dart';
import 'package:ieatta/core/filter/filter_models.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/components/navigation/arrow_helper.dart';
import 'package:ieatta/src/screens/restaurants/body/page_body.dart';

class UserRestaurants extends StatefulWidget {
  UserRestaurants({Key key}) : super(key: key);

  @override
  _UserRestaurantsState createState() => _UserRestaurantsState();
}

class _UserRestaurantsState extends State<UserRestaurants> {
  String _userId;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final String _userIdArg = ModalRoute.of(context).settings.arguments;
    if (_userIdArg != null) {
      _userId = _userIdArg;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          leading: IconButton(
            icon: Icon(getArrowBackIcon()),
            onPressed: () {
              Navigator.of(context).pop();
            },
          ),
          title: Text(AppLocalizations.of(context)
              .translate("userMenuRestaurantsAppBarTitle")),
        ),
        body: _buildBody(context));
  }

  Widget _buildBody(BuildContext context) {
    List<ParseModelRestaurants> restaurantsList =
        FilterModels.instance.getRestaurantsListByUser(context, _userId);
    if (restaurantsList.length == 0) {
      return Center(
        child: Text('No Data'),
      );
    }
    return PageBody(restaurantList: restaurantsList);
  }
}
