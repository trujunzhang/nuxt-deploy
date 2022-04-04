import 'package:app_config/app_config.dart';
import 'package:flutter/material.dart';
import 'package:app_language/langs/l10n.dart';
import 'package:doc_widget/doc_widget.dart';

import 'my_button.dart';

/// design/4商品/index.html#artboard2
@docWidget
class FBDeleteBottomSheet extends StatelessWidget {
  const FBDeleteBottomSheet({
    Key? key,
    required this.onTapDelete,
  }) : super(key: key);

  final VoidCallback onTapDelete;

  @override
  Widget build(BuildContext context) {
    return Material(
      child: SafeArea(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            SizedBox(
              height: 52.0,
              child: Center(
                child: Text(
                  S.of(context).alertDeleteConfirmDialogMessage,
                  style: AppTextStyles.textSize16,
                ),
              ),
            ),
            Gaps.line,
            MyButton(
              minHeight: 54.0,
              textColor: Theme.of(context).errorColor,
              text: S.of(context).alertDeleteConfirmDialogYes,
              backgroundColor: Colors.transparent,
              onPressed: () {
                Navigator.pop(context);
                onTapDelete();
              },
            ),
            Gaps.line,
            MyButton(
              minHeight: 54.0,
              textColor: AppColors.text_gray,
              text: S.of(context).alertDialogCancelBtn,
              backgroundColor: Colors.transparent,
              onPressed: () {
                Navigator.pop(context);
              },
            ),
          ],
        ),
      ),
    );
  }
}
