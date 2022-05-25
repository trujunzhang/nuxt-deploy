import 'package:app_language/langs/l10n.dart';
import 'package:app_widgets/app_widgets.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:get/get.dart';
import 'package:my_plugin/my_plugin.dart';

import 'index.dart';

class EditUserPage extends GetWidget<EditUserController> {
  const EditUserPage({Key? key}) : super(key: key);

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
                  padding: const EdgeInsets.only(right: 20.0),
                  child: GestureDetector(
                      onTap: controller.state.isButtonDisabled.value
                          ? null
                          : () async {
                              controller.onSavePressed(context);
                            },
                      child: Center(
                          child: controller.state.isButtonDisabled.value
                              ? const SizedBox(
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
          padding: const EdgeInsets.only(left: 8),
          child: Row(
            children: [
              const Text(
                'Your Profile Photo',
                style: TextStyle(fontSize: 14),
              ),
              TextButton(
                child: const Text('(Add/Edit)',
                    style: TextStyle(color: Color(0xff0073bb))),
                onPressed: controller.onAddPhotoIconPress,
              )
            ],
          ),
        ),
        Container(
          height: 120,
          width: 120,
          padding: const EdgeInsets.only(left: 16),
          child: buildParseModelUsersImageWithOriginalUrl(
              controller.state.coverUrl.value),
        ),
        _buildForm(context),
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
                  name: 'firstName',
                  decoration: InputDecoration(
                    labelText: S.of(context).usersCreateEditFirstNameTxt,
                  ),
                  onChanged: (String? val) {
                    controller.state.firstName.value = val!;
                  },
                  validator: FormBuilderValidators.compose([
                    FormBuilderValidators.required(),
                    FormBuilderValidators.max(15),
                  ]),
                  textInputAction: TextInputAction.next,
                ),
                FormBuilderTextField(
                  name: 'secondName',
                  decoration: InputDecoration(
                    labelText: S.of(context).usersCreateEditLastNameTxt,
                  ),
                  onChanged: (String? val) {
                    controller.state.secondName.value = val!;
                  },
                  validator: FormBuilderValidators.compose([
                    FormBuilderValidators.required(),
                    FormBuilderValidators.max(15),
                  ]),
                  textInputAction: TextInputAction.next,
                ),
              ],
            )));
  }
}
