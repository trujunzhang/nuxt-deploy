import 'package:flutter/material.dart';
import 'package:ieatta/app/app_localizations.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/components/navigation/arrow_helper.dart';
import 'package:ieatta/src/logic/restaurants_results.dart';
import 'package:ieatta/src/screens/restaurants/body/page_body.dart';
import 'package:provider/provider.dart';

class UserRestaurants extends StatefulWidget {
  UserRestaurants({Key key}) : super(key: key);

  @override
  _UserRestaurantsState createState() => _UserRestaurantsState();
}

class _UserRestaurantsState extends State<UserRestaurants> {
  String _userId;
  List<ParseModelRestaurants> restaurantList = [];

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final String _userIdArg = ModalRoute.of(context).settings.arguments;
    if (_userIdArg != null) {
      _userId = _userIdArg;
    }
    // print('_userId: $_userId');
  }

  @override
  Widget build(BuildContext context) {
    final firestoreDatabase =
        Provider.of<FirestoreDatabase>(context, listen: false);
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
      body: StreamBuilder(
          stream: firestoreDatabase.userMenuStream(
            userId: _userId,
            path: FBCollections.Restaurants,
          ),
          builder: (BuildContext context, AsyncSnapshot fbSnapshot) {
            if (fbSnapshot.hasError) {}
            if (!fbSnapshot.hasData) {
              return Center(
                child: CircularProgressIndicator(),
              );
            }
            restaurantList = parseRestaurants(fbSnapshot.data.documents);
            if (restaurantList.length == 0) {
              return Center(
                child: Text('No Data'),
              );
            }
            return PageBody(restaurantList: restaurantList);
          }),
    );
  }
}
