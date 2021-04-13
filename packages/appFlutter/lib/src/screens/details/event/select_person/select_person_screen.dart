import 'package:flutter/material.dart';
import 'package:ieatta/app/app_localizations.dart';
import 'package:ieatta/core/filter/filter_models.dart';
import 'package:ieatta/core/filter/filter_utils.dart';
import 'package:ieatta/core/models/auth_user_model.dart';
import 'package:ieatta/core/providers/auth_provider.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/src/appModels/models/PeopleInEvent.dart';
import 'package:ieatta/src/appModels/models/Users.dart';
import 'package:ieatta/src/components/users/image.dart';
import 'package:another_flushbar/flushbar.dart';
import 'package:provider/provider.dart';

class SelectPersonScreenObject {
  final String restaurantId;
  final String eventId;

  SelectPersonScreenObject({
    @required this.restaurantId,
    @required this.eventId,
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

  bool isSaving = false;

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
    return Scaffold(
        appBar: AppBar(
            title: Text(AppLocalizations.of(context)
                .translate("eventsSelectPersonTitleTxt"))),
        body: _buildBody(context));
  }

  Widget _buildBody(BuildContext context) {
    List<ParseModelPeopleInEvent> peopleInEventsList = FilterModels.instance
        .getPeopleInEventsList(context, screenObject.restaurantId, screenObject.eventId);

    Map<String, ParseModelUsers> usersDict =
        FilterModels.instance.getUsersDict(context);

    List<String> disorderedUserIds = FilterUtils.instance
        .getDisorderedUserIds(List.from(usersDict.keys), peopleInEventsList);

    return ListView.separated(
      padding: EdgeInsets.only(top: 16),
      itemCount: disorderedUserIds.length,
      separatorBuilder: (BuildContext context, int index) => Divider(),
      itemBuilder: (BuildContext context, int index) {
        return _buildUserItem(context, usersDict[disorderedUserIds[index]]);
      },
    );
  }

  Widget _buildUserItem(BuildContext context, ParseModelUsers user) {
    final authProvider = Provider.of<AuthProvider>(context);
    return ListTile(
      onTap: () async {
        if (isSaving == true) {
          return;
        }
        setState(() {
          isSaving = true;
        });

        var _flushBar = Flushbar(
          flushbarPosition: FlushbarPosition.TOP,
          flushbarStyle: FlushbarStyle.GROUNDED,
          backgroundColor: Colors.red,
          boxShadows: [
            BoxShadow(
              color: Colors.red[800],
              offset: Offset(0.0, 2.0),
              blurRadius: 3.0,
            )
          ],
          isDismissible: false,
          duration: Duration(seconds: 4),
          // now we want to swipe to the sides
          dismissDirection: FlushbarDismissDirection.HORIZONTAL,
          // The default curve is Curves.easeOut
          forwardAnimationCurve: Curves.fastLinearToSlowEaseIn,
          title: 'Saving...',
          message: user.username,
          icon: Icon(
            Icons.save_rounded,
            color: Colors.blue,
          ),
        );

        _flushBar.show(context);

        try {
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

          final firestoreDatabase =
              Provider.of<FirestoreDatabase>(context, listen: false);
          await firestoreDatabase.setPeopleInEvent(
              model: nextModel); // For Restaurant.
        } catch (e) {}

        setState(() {
          isSaving = false;
        });
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
