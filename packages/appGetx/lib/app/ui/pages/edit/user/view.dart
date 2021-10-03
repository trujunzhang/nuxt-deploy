import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/ui/helpers/images/user.dart';
import 'package:ieatta/common/langs/l10n.dart';
import 'package:my_plugin/my_plugin.dart';

import 'index.dart';

class EditUserPage extends GetWidget<EditUserController> {
  @override
  Widget build(BuildContext context) {
    return BaseSingleViewPage(
        appBar: MyAppBar(
            centerTitle: true,
            title: MyTitle(S.of(context).usersCreateEditAppBarTitleEditTxt),
            leadingType: AppBarBackType.Close,
            actions: [
              // Action1: save user icon.
              Padding(
                  padding: EdgeInsets.only(right: 20.0),
                  child: GestureDetector(
                      onTap: controller.state.isButtonDisabled.value
                          ? null
                          : () async {
                              controller.onSavePressed(context);
                            },
                      child: Center(
                          child: controller.state.isButtonDisabled.value
                              ? Container(
                                  width: 20,
                                  height: 20,
                                  child: CircularProgressIndicator(
                                      color: Colors.white))
                              : Text(S
                                  .of(context)
                                  .editModelAppBarRightSaveTitle)))),
            ]),
        body: Obx(() => _buildList(context)));
  }

  Widget _buildList(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: EdgeInsets.only(left: 8),
          child: Row(
            children: [
              Text(
                'Your Profile Photo',
                style: TextStyle(fontSize: 14),
              ),
              TextButton(
                  child: const Text('(Add/Edit)',
                      style: TextStyle(color: Color(0xff0073bb))),
                  onPressed: () async {
                    controller.onAddPhotoIconPress();
                  })
            ],
          ),
        ),
        Container(
          height: 120,
          width: 120,
          padding: EdgeInsets.only(left: 16),
          child: buildParseModelUsersImageWithOriginalUrl(
              controller.state.coverUrl.value),
        ),
        Shortcuts(
          shortcuts: <LogicalKeySet, Intent>{
            LogicalKeySet(LogicalKeyboardKey.enter): NextFocusIntent(),
          },
          child: FocusTraversalGroup(
            child: Form(
              onChanged: () {
                Form.of(primaryFocus!.context!)!.save();
              },
              child: _buildForm(context),
            ),
          ),
        ),
      ],
    );
  }

  Widget _buildForm(BuildContext context) {
    return Padding(
        padding: const EdgeInsets.all(10),
        child: FormBuilder(
            key: controller.formKey,
            autovalidateMode: AutovalidateMode.disabled,
            initialValue: {
              'firstName': controller.state.firstName.value,
              'secondName': controller.state.secondName.value,
            },
            child: Column(
              children: [
                FormBuilderTextField(
                  autovalidateMode: AutovalidateMode.always,
                  name: 'firstName',
                  decoration: InputDecoration(
                    labelText: S.of(context).usersCreateEditFirstNameTxt,
                  ),
                  onChanged: (String? val) {
                    controller.state.firstName.value = val!;
                  },
                  validator: FormBuilderValidators.compose([
                    FormBuilderValidators.required(context),
                    FormBuilderValidators.max(context, 15),
                  ]),
                  textInputAction: TextInputAction.next,
                ),
                FormBuilderTextField(
                  autovalidateMode: AutovalidateMode.always,
                  name: 'secondName',
                  decoration: InputDecoration(
                    labelText: S.of(context).usersCreateEditLastNameTxt,
                  ),
                  onChanged: (String? val) {
                    controller.state.secondName.value = val!;
                  },
                  validator: FormBuilderValidators.compose([
                    FormBuilderValidators.required(context),
                    FormBuilderValidators.max(context, 15),
                  ]),
                  textInputAction: TextInputAction.next,
                ),
              ],
            )));
  }
}
