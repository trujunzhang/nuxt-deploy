import 'package:app_language/langs/l10n.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:get/get.dart';
import 'package:my_plugin/my_plugin.dart';

import 'index.dart';

class EditPhotoPage extends GetWidget<EditPhotoController> {
  const EditPhotoPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BaseSingleViewPage(
        appBar: MyAppBar(
            centerTitle: true,
            title: MyTitle(S.of(context).photosCreateEditAppBarTitleEditTxt),
            leadingType: AppBarBackType.Close,
            actions: [
              // Action1: save photo icon.
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
        body: Obx(() => _buildForm(context)));
  }

  Widget _buildForm(BuildContext context) {
    return Padding(
        padding: const EdgeInsets.all(10),
        child: FormBuilder(
            key: controller.formKey,
            autovalidateMode: AutovalidateMode.disabled,
            initialValue: {
              'extraNote': controller.state.extraNote.value,
            },
            child: Column(
              children: [
                FormBuilderTextField(
                  name: 'extraNote',
                  decoration: InputDecoration(
                    labelText: S.of(context).modelCreateEditNotesTxt,
                  ),
                  onChanged: (String? val) {
                    controller.state.extraNote.value = val!;
                  },
                  maxLines: 15,
                  textInputAction: TextInputAction.next,
                ),
              ],
            )));
  }
}
