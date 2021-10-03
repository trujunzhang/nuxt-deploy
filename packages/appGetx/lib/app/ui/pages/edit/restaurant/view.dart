import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/ui/widgets/page_section_title.dart';
import 'package:ieatta/common/langs/l10n.dart';
import 'package:my_plugin/my_plugin.dart';

import 'index.dart';
import 'select_restaurant_cover.dart';

class EditRestaurantPage extends GetWidget<EditRestaurantController> {
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
        body: Obx(() => _buildBody(context)));
  }

  Widget _buildBody(BuildContext context) {
    return Column(
      children: [
        // Section1: Form
        Shortcuts(
          shortcuts: <LogicalKeySet, Intent>{
            // Pressing enter on the field will now move to the next field.
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
        // Section2: Cover Title
        (controller.isNew == false)
            ? buildCoverSectionTitle()
            : SizedBox.shrink(),
        // Section2: Photos
        (controller.isNew == false)
            ? SelectRestaurantCover()
            : SizedBox.shrink(),
        (controller.isNew == false)
            ? SizedBox(
                height: 20,
              )
            : SizedBox.shrink(),
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
                  autovalidateMode: AutovalidateMode.always,
                  name: 'displayName',
                  decoration: InputDecoration(
                    labelText:
                        S.of(context).restaurantsCreateEditDisplayNameTxt,
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
                  autovalidateMode: AutovalidateMode.always,
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
