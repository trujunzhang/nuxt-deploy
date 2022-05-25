import 'package:app_config/app_config.dart';
import 'package:app_language/langs/l10n.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/ui/widgets/page_section_title.dart';
import 'package:my_plugin/my_plugin.dart';

import 'index.dart';
import 'widget/select_restaurant_cover.dart';

class EditRestaurantPage extends GetWidget<EditRestaurantController> {
  const EditRestaurantPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BaseSingleViewPage(
        appBar: MyAppBar(
            centerTitle: true,
            title: MyTitle(controller.state.editModel != null
                ? S.of(context).restaurantsCreateEditAppBarTitleEditTxt
                : S.of(context).restaurantsCreateEditAppBarTitleNewTxt),
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
        body: Obx(() => _buildBody(context)));
  }

  Widget _buildBody(BuildContext context) {
    return Column(
      children: [
        // Section1: Form
        _buildForm(context),
        // Section2: Cover Title
        if (controller.isNew == false) buildCoverSectionTitle(),
        // Section2: Photos
        if (controller.isNew == false) const SelectRestaurantCover(),
        if (controller.isNew == false) Gaps.vGap24
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
              'displayName': controller.state.displayName.value,
              'note': controller.state.note.value
            },
            child: Column(
              children: [
                FormBuilderTextField(
                  name: 'displayName',
                  decoration: InputDecoration(
                    labelText:
                        S.of(context).restaurantsCreateEditDisplayNameTxt,
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
                  name: 'note',
                  decoration: InputDecoration(
                    labelText: S.of(context).modelCreateEditNotesTxt,
                  ),
                  onChanged: (String? val) {
                    controller.state.note.value = val!;
                  },
                  validator: FormBuilderValidators.compose([]),
                  maxLines: 15,
                  textInputAction: TextInputAction.next,
                ),
              ],
            )));
  }
}
