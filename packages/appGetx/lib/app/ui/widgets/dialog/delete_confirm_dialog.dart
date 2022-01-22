import 'package:app_language/langs/l10n.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

void showDeleteConfirmDialog(BuildContext context, Function() onConfirmPress) {
  // set up the buttons
  Widget cancelButton = TextButton(
    child: Text(S.of(context).alertDialogCancelBtn),
    onPressed: () {
      Get.back();
    },
  );
  Widget continueButton = TextButton(
    child: Text(S.of(context).alertDialogYesBtn),
    onPressed: () {
      onConfirmPress();
      Get.back();
    },
  );
  // set up the AlertDialog
  AlertDialog alert = AlertDialog(
    backgroundColor: Theme.of(context).colorScheme.primaryVariant,
    title: Text(S.of(context).alertDialogTitle),
    content: Text(S.of(context).alertDeleteConfirmDialogMessage),
    actions: [
      cancelButton,
      continueButton,
    ],
  );
  // show the dialog
  showDialog(
    context: context,
    builder: (BuildContext context) {
      return alert;
    },
  );
}
