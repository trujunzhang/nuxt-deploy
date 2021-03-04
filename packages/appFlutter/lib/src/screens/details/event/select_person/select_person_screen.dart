import 'package:flutter/material.dart';
import 'package:ieatta/app/app_localizations.dart';
import 'package:ieatta/core/filter/filter_models.dart';
import 'package:ieatta/core/models/auth_user_model.dart';
import 'package:ieatta/core/providers/auth_provider.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/src/appModels/models/PeopleInEvent.dart';
import 'package:ieatta/src/appModels/models/Users.dart';
import 'package:ieatta/src/components/users/image.dart';
import 'package:provider/provider.dart';

class SelectPersonScreenObject {
  final String restaurantId;
  final String eventId;
  final List<String> disorderedUserIds;

  SelectPersonScreenObject({
    @required this.restaurantId,
    @required this.eventId,
    @required this.disorderedUserIds,
  });
}

class SelectPersonScreen extends StatefulWidget {
  SelectPersonScreen({Key key}) : super(key: key);

  @override
  _SelectPersonScreenState createState() => _SelectPersonScreenState();
}

class _SelectPersonScreenState extends State<SelectPersonScreen> {
  // Model
  SelectPersonScreenObject screenObject;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final SelectPersonScreenObject _screenObject =
        ModalRoute.of(context).settings.arguments;
    setState(() {
      screenObject = _screenObject;
    });
  }

  @override
  Widget build(BuildContext context) {
    Map<String, ParseModelUsers> usersDict =
        FilterModels.instance.getUsersDict(context);
    List<String> userIds = List.from(usersDict.keys);

    return Scaffold(
        appBar: AppBar(
            title: Text(AppLocalizations.of(context)
                .translate("eventsSelectPersonTitleTxt"))),
        body: Container(
            padding: EdgeInsets.only(top: 16),
            child: ListView.separated(
              itemCount: screenObject.disorderedUserIds.length,
              separatorBuilder: (BuildContext context, int index) => Divider(),
              // itemExtent: 80.0,
              itemBuilder: (BuildContext context, int index) {
                return _buildUserItem(context, usersDict[userIds[index]]);
              },
            )));
  }

  Widget _buildUserItem(BuildContext context, ParseModelUsers user) {
    final authProvider = Provider.of<AuthProvider>(context);
    return ListTile(
      onTap: () async {
        AuthUserModel authUserModel = await authProvider.getAuthUserModel();
        ParseModelPeopleInEvent lastModel =
            ParseModelPeopleInEvent.emptyPeopleInEvent(
          authUserModel: authUserModel,
        );

        ParseModelPeopleInEvent nextModel =
            ParseModelPeopleInEvent.updatePeopleInEvent(
                model: lastModel,
                restaurantId: screenObject.restaurantId,
                eventId: screenObject.eventId,
                userId: user.id);

        try {
          final firestoreDatabase =
              Provider.of<FirestoreDatabase>(context, listen: false);
          await firestoreDatabase.setPeopleInEvent(
              model: nextModel); // For Restaurant.
        } catch (e) {}

        // Navigate
        Navigator.of(context).pop();
      },
      leading: CircleAvatar(
          radius: 25.0,
          child: ClipRRect(
            borderRadius: BorderRadius.circular(25.0),
            child: buildParseModelUsersImage(user),
          )),
      title: Text(user.username),
    );
  }
}
