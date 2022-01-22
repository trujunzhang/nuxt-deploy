import 'package:app_language/langs/l10n.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/ui/helpers/images/photo.dart';
import 'package:my_plugin/my_plugin.dart';

import 'index.dart';

class CreatePhotoPage extends GetWidget<CreatePhotoController> {
  const CreatePhotoPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BaseSingleViewPage(
        appBar: MyAppBar(
            centerTitle: true,
            title: MyTitle(S.of(context).photosCreateEditAppBarTitleNewTxt),
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
        body: Obx(() => _buildBody(context)));
  }

  Widget _buildBody(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.start,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const SizedBox(height: 0),
        _buildImagePanel(context),
        _buildForm(context)
      ],
    );
  }

  Widget _buildImagePanel(BuildContext context) {
    return SizedBox(
      width: Get.width,
      // height: MediaQuery.of(context).size.height,
      child: buildLocalImageView(controller.imgPath!),
    );
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
