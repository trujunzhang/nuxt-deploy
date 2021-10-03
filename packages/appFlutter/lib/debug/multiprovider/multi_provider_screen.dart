import 'package:flutter/material.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/appModels/models/Users.dart';
import 'package:provider/provider.dart';

class MultiProviderScreen extends StatefulWidget {
  MultiProviderScreen({Key? key}) : super(key: key);

  @override
  _MultiProviderScreenState createState() => _MultiProviderScreenState();
}

class _MultiProviderScreenState extends State<MultiProviderScreen> {
  @override
  Widget build(BuildContext context) {
    return BigWidget(
      // ...huge widget tree
      child: TitleWidget(),
    );
  }

// @override
// Widget build(BuildContext context) {
//   final firestoreDatabase =
//       Provider.of<FirestoreDatabase>(context, listen: false);
//   return MultiProvider(
//     providers: [
//       StreamProvider<List<ParseModelUsers>>.value(
//           value: FirestoreList.instance.allUsersStream()),
//       StreamProvider<List<ParseModelRestaurants>>.value(
//           value: FirestoreList.instance.allRestaurantsStream()),
//     ],
//     child: BigWidget(
//       // ...huge widget tree
//       child: TitleWidget(),
//     ),
//   );
// }
}

class BigWidget extends StatelessWidget {
  final Widget child;

  const BigWidget({Key? key, required this.child}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    List<ParseModelUsers> users = Provider.of<List<ParseModelUsers>>(context);
    List<ParseModelRestaurants> restaurants = Provider.of<List<ParseModelRestaurants>>(context);
    print(users);
    if (users == null && restaurants == null) {
      return Container(
        child: Center(
          child: CircularProgressIndicator(),
        ),
      );
    }
    return child;
  }
}

class TitleWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    List<ParseModelUsers> users = Provider.of<List<ParseModelUsers>>(context);
    String userName = users.length > 0 ? users[0].username : 'empty';
    List<ParseModelRestaurants> restaurants = Provider.of<List<ParseModelRestaurants>>(context);
    return Center(child: Text('User name: ${userName}'));
  }
}
