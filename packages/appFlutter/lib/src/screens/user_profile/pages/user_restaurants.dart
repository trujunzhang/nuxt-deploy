import 'package:flutter/material.dart';
import 'package:ieatta/common/langs/l10n.dart';
import 'package:ieatta/core/filter/filter_models.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/components/navigation/arrow_helper.dart';
import 'package:ieatta/src/screens/restaurants/body/page_body.dart';
import 'package:ieatta/util/app_navigator.dart';

class UserRestaurants extends StatelessWidget {
  UserRestaurants({Key? key, required this.userId}) : super(key: key);

  final String userId;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          leading: IconButton(
            icon: Icon(getArrowBackIcon()),
            onPressed: () {
              AppNavigator.goBack(context);
            },
          ),
          title: Text(S.of(context).userMenuRestaurantsAppBarTitle),
        ),
        body: _buildBody(context));
  }

  Widget _buildBody(BuildContext context) {
    List<ParseModelRestaurants> restaurantsList = FilterModels.instance.getRestaurantsListByUser(context, userId);
    if (restaurantsList.length == 0) {
      return Center(
        child: Text('No Data'),
      );
    }
    return PageBody(restaurantList: restaurantsList);
  }
}
