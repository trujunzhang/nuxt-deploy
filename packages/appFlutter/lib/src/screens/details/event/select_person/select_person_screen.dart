import 'package:flutter/material.dart';
import 'package:ieatta/common/langs/l10n.dart';
import 'package:ieatta/core/filter/filter_models.dart';
import 'package:ieatta/core/models/auth_user_model.dart';
import 'package:ieatta/core/providers/auth_provider.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/src/appModels/models/PeopleInEvent.dart';
import 'package:ieatta/src/appModels/models/Users.dart';
import 'package:ieatta/src/components/users/image.dart';
import 'package:ieatta/src/providers/select_state.dart';
import 'package:ieatta/util/flushbar_utils.dart';
import 'package:provider/provider.dart';

import 'select_person_provider.dart';

class SelectPersonScreen extends StatelessWidget {
  SelectPersonScreen({Key? key, required this.screenObject}) : super(key: key);

  final SelectPersonScreenObject screenObject;

  List<String> selectedPerson = [];

  @override
  Widget build(BuildContext context) {
    return Scaffold(appBar: AppBar(title: Text(S.of(context).eventsSelectPersonTitleTxt)), body: _buildBody(context));
  }

  Widget _buildBody(BuildContext context) {
    Map<String, ParseModelUsers> usersDict = FilterModels.instance.getUsersDict(context);

    return ListView.separated(
      padding: EdgeInsets.only(top: 16),
      itemCount: screenObject.disorderedUserIds.length,
      separatorBuilder: (BuildContext context, int index) => Divider(),
      itemBuilder: (BuildContext context, int index) {
        return _buildUserItem(context, usersDict[screenObject.disorderedUserIds[index]]);
      },
    );
  }

  Widget _buildUserItem(BuildContext context, ParseModelUsers? user) {
    SelectState selectState = Provider.of<SelectState>(context, listen: true);
    bool isSelected = selectState.contains(user!.id);
    final authProvider = Provider.of<AuthProvider>(context);
    return ListTile(
      onTap: isSelected
          ? null
          : () async {
              if (selectState.getSaving() == true) {
                return;
              }

              selectState.setSaving(true);

              FlushBarUtils.show(context, title: 'Saving...', message: user.username);

              try {
                AuthUserModel? authUserModel = await authProvider.getAuthUserModel();
                ParseModelPeopleInEvent lastModel = ParseModelPeopleInEvent.emptyPeopleInEvent(
                  authUserModel: authUserModel,
                );

                ParseModelPeopleInEvent nextModel = ParseModelPeopleInEvent.updatePeopleInEvent(
                    model: lastModel,
                    restaurantId: screenObject.restaurantId,
                    eventId: screenObject.eventId,
                    userId: user.id);

                final firestoreDatabase = Provider.of<FirestoreDatabase>(context, listen: false);
                await firestoreDatabase.setPeopleInEvent(model: nextModel); // For Restaurant.
              } catch (e) {}

              selectState.pushId(user.id);
              selectState.setSaving(false);
            },
      leading: CircleAvatar(
          radius: 25.0,
          child: ClipRRect(
            borderRadius: BorderRadius.circular(25.0),
            child: buildParseModelUsersImage(user),
          )),
      title: Text(user.username),
      trailing: isSelected
          ? const Icon(
              Icons.check,
              semanticLabel: 'ADDED',
              color: Colors.blue,
            )
          : const Text(
              'ADD',
              style: TextStyle(color: Colors.blue),
            ),
    );
  }
}
