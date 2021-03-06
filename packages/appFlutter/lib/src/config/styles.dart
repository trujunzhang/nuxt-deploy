import 'package:flutter/material.dart';

import 'dimens.dart';

class RegisterTextStyles {
  static TextStyle pageTitle = TextStyle(
    fontSize: 22,
    fontWeight: FontWeight.w800,
  );
  static TextStyle signIn = TextStyle(
    fontSize: 16,
    fontWeight: FontWeight.bold,
  );
  static TextStyle signUp = TextStyle(
    fontSize: 16,
    fontWeight: FontWeight.bold,
  );
}

class TextStyles {
  static TextStyle listTitle = TextStyle(
    fontSize: Dimens.font_sp16,
//    color: Colours.text_dark,
    fontWeight: FontWeight.bold,
  );
  static TextStyle listContent = TextStyle(
    fontSize: Dimens.font_sp14,
//    color: Colours.text_normal,
  );
  static TextStyle listExtra = TextStyle(
    fontSize: Dimens.font_sp12,
//    color: Colours.text_gray,
  );
}

//  间隔
class Gaps {
  // 水平间隔
  static Widget hGap5 = new SizedBox(width: Dimens.gap_dp5);
  static Widget hGap10 = new SizedBox(width: Dimens.gap_dp10);

  // 垂直间隔
  static Widget vGap5 = new SizedBox(height: Dimens.gap_dp5);
  static Widget vGap10 = new SizedBox(height: Dimens.gap_dp10);
}
