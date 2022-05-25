import 'package:app_language/langs/l10n.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:get/get.dart';
import 'package:my_plugin/my_plugin.dart';

import 'index.dart';

class EditReviewPage extends GetWidget<EditReviewController> {
  const EditReviewPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BaseSingleViewPage(
        appBar: MyAppBar(
            centerTitle: true,
            title: MyTitle(controller.state.editModel != null
                ? S.of(context).reviewsCreateEditAppBarTitleEditTxt
                : S.of(context).reviewsCreateEditAppBarTitleNewTxt),
            leadingType: AppBarBackType.Close,
            actions: [
              // Action1: save review icon.
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
        // Section1: Five stars
        const SizedBox(height: 12),
        Container(
          padding: const EdgeInsets.only(left: 12),
          width: 300,
          height: 50,
          child: _buildRatePanel(context),
        ),
        // Section2: Form
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
              'body': controller.state.body.value,
            },
            child: Column(
              children: [
                FormBuilderTextField(
                  name: 'body',
                  decoration: InputDecoration(
                    labelText: S.of(context).modelCreateEditNotesTxt,
                  ),
                  onChanged: (String? val) {
                    controller.state.body.value = val!;
                  },
                  validator: FormBuilderValidators.compose([
                    FormBuilderValidators.required(),
                  ]),
                  maxLines: 15,
                  textInputAction: TextInputAction.next,
                ),
              ],
            )));
  }

  Widget _buildRatePanel(BuildContext context) {
    double rating = controller.state.rate.value;
    return Stack(
      children: [
        SizedBox(
            width: 300,
            height: 50,
            child: Image(
                image: AssetImage('assets/stars/large/$rating.png'),
                fit: BoxFit.cover)),
        ListView.builder(
            itemCount: 5,
            scrollDirection: Axis.horizontal,
            itemBuilder: (context, index) {
              return Container(
                padding: const EdgeInsets.only(right: 10),
                width: 60,
                height: 50,
                child: InkWell(
                  onTap: () {
                    controller.state.rate.value = (index + 1).roundToDouble();
                  },
                  child: Container(
                      // color: Colors.red.withOpacity(0.2),
                      ),
                ),
              );
            })
      ],
    );
  }
}
