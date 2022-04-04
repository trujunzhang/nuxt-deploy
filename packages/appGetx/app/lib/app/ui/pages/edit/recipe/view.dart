import 'package:app_config/app_config.dart';
import 'package:app_language/langs/l10n.dart';
import 'package:app_models/app_models.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/ui/widgets/page_section_title.dart';
import 'package:my_plugin/my_plugin.dart';

import 'index.dart';
import 'widget/select_recipe_cover.dart';

class EditRecipePage extends GetWidget<EditRecipeController> {
  const EditRecipePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BaseSingleViewPage(
        appBar: MyAppBar(
            centerTitle: true,
            title: MyTitle(controller.state.editModel != null
                ? S.of(context).recipesCreateEditAppBarTitleEditTxt
                : S.of(context).recipesCreateEditAppBarTitleNewTxt),
            leadingType: AppBarBackType.Close,
            actions: [
              // Action1: save recipe icon.
              Padding(
                  padding: const EdgeInsets.only(right: 20.0),
                  child: GestureDetector(
                      onTap: controller.state.isButtonDisabled.value
                          ? null
                          : () async {
                              await controller.onSavePressed(context);
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
    ParseModelRecipes? recipe = controller.state.editModel;
    return Column(
      children: [
        // Section1: Form
        _buildForm(context),
        // Section2: Cover Title
        if (recipe != null) buildCoverSectionTitle(),
        // Section2: Photos
        if (recipe != null) SelectRecipeCover(),
        if (recipe != null) Gaps.vGap24
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
              'price': controller.state.price.value,
            },
            child: Column(
              children: [
                FormBuilderTextField(
                  name: 'displayName',
                  decoration: InputDecoration(
                    labelText: S.of(context).recipesCreateEditDisplayNameTxt,
                  ),
                  onChanged: (String? val) {
                    controller.state.displayName.value = val!;
                  },
                  validator: FormBuilderValidators.compose([
                    FormBuilderValidators.required(context),
                    FormBuilderValidators.max(context, 70),
                  ]),
                  textInputAction: TextInputAction.next,
                ),
                FormBuilderTextField(
                  name: 'price',
                  decoration: InputDecoration(
                    labelText: S.of(context).recipesCreateEditPriceTxt,
                  ),
                  onChanged: (String? val) {
                    controller.state.price.value = val!;
                  },
                  validator: FormBuilderValidators.compose([
                    FormBuilderValidators.required(context),
                    FormBuilderValidators.numeric(context),
                  ]),
                  textInputAction: TextInputAction.next,
                ),
              ],
            )));
  }
}
