import 'package:app_language/langs/l10n.dart';
import 'package:app_models/app_models.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:get/get.dart';
import 'package:my_plugin/my_plugin.dart';

import 'index.dart';

class EditEventPage extends GetWidget<EditEventController> {
  const EditEventPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BaseSingleViewPage(
        appBar: MyAppBar(
            centerTitle: true,
            title: MyTitle(controller.state.editModel != null
                ? S.of(context).eventsCreateEditAppBarTitleEditTxt
                : S.of(context).eventsCreateEditAppBarTitleNewTxt),
            leadingType: AppBarBackType.Close,
            actions: [
              // Action1: save Restaurant icon.
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
              'displayName': controller.state.displayName.value,
              'want': controller.state.want.value,
              'startDate':
                  convertDateFromString(controller.state.startDate.value),
              'endDate': convertDateFromString(controller.state.endDate.value),
            },
            child: Column(
              children: [
                FormBuilderTextField(
                  name: 'displayName',
                  decoration: InputDecoration(
                    labelText: S.of(context).eventsCreateEditDisplayNameTxt,
                  ),
                  onChanged: (String? val) {
                    controller.state.displayName.value = val!;
                  },
                  validator: FormBuilderValidators.compose([
                    FormBuilderValidators.required(),
                    FormBuilderValidators.max(70),
                  ]),
                  textInputAction: TextInputAction.next,
                ),
                FormBuilderTextField(
                  name: 'want',
                  decoration: InputDecoration(
                    labelText: S.of(context).eventsCreateEditWantTxt,
                  ),
                  onChanged: (String? val) {
                    controller.state.want.value = val!;
                  },
                  validator: FormBuilderValidators.compose([
                    FormBuilderValidators.required(),
                  ]),
                  maxLines: 15,
                  textInputAction: TextInputAction.next,
                ),
                FormBuilderDateTimePicker(
                  name: 'startDate',
                  inputType: InputType.both,
                  decoration: InputDecoration(
                    labelText: S.of(context).eventsCreateEditStartDateTxt,
                  ),
                  initialTime: const TimeOfDay(hour: 8, minute: 0),
                  onChanged: (DateTime? dt) {
                    var val = getDateIso8610String(dt!);
                    controller.state.startDate.value = val;
                  },
                  validator: FormBuilderValidators.compose([
                    FormBuilderValidators.required(),
                  ]),
                ),
                FormBuilderDateTimePicker(
                  name: 'endDate',
                  inputType: InputType.both,
                  decoration: InputDecoration(
                    labelText: S.of(context).eventsCreateEditEndDateTxt,
                  ),
                  initialTime: const TimeOfDay(hour: 8, minute: 0),
                  onChanged: (DateTime? dt) {
                    var val = getDateIso8610String(dt!);
                    controller.state.endDate.value = val;
                  },
                  validator: FormBuilderValidators.compose([
                    FormBuilderValidators.required(),
                  ]),
                ),
              ],
            )));
  }
}
