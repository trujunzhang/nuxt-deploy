import 'package:app_language/langs/l10n.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/ui/helpers/images/user.dart';
import 'package:my_plugin/my_plugin.dart';

import 'index.dart';

class SelectPersonPage extends GetWidget<SelectPersonController> {
  const SelectPersonPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BaseScaffold(
        appBar: MyAppBar(
          centerTitle: true,
          title: MyTitle(S.of(context).eventsSelectPersonTitleTxt),
          leadingType: AppBarBackType.Close,
        ),
        body: _buildBody(context));
  }

  Widget _buildBody(BuildContext context) {
    Map<String, ParseModelUsers> usersDict = controller.usersDict;
    List<String> disorderedUserIds = controller.state.disorderedUserIds;

    return ListView.separated(
      padding: const EdgeInsets.only(top: 16),
      itemCount: disorderedUserIds.length,
      separatorBuilder: (BuildContext context, int index) => const Divider(),
      itemBuilder: (BuildContext context, int index) {
        var userId = disorderedUserIds[index];
        return Obx(() {
          return _buildUserItem(context, usersDict[userId]);
        });
      },
    );
  }

  Widget _buildUserItem(BuildContext context, ParseModelUsers? user) {
    bool isSelected = controller.state.contains(user!.id);
    return ListTile(
      onTap: isSelected
          ? null
          : () async {
              await controller.onAddIconPress(context, user);
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
