import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ieatta/app/ui/pages/reviews/body/review_item.dart';
import 'package:ieatta/common/langs/l10n.dart';
import 'package:my_plugin/my_plugin.dart';

import 'index.dart';

class DetailReviewPage extends GetWidget<DetailReviewController> {
  @override
  Widget build(BuildContext context) {
    var flatButton = TextButton(
        onPressed: controller.onEditReviewBtnPress,
        child: Text(
          S.of(context).pageAppBarRightEditBtnTitle,
          style: TextStyle(
            color: Theme.of(context).colorScheme.onPrimary,
          ),
        ));
    var actionsWidget = controller.shouldShowEditReviewBtn()
        ? <Widget>[flatButton]
        : <Widget>[];
    return BaseSingleViewPage(
        appBar: MyAppBar(
          centerTitle: true,
          title: MyTitle(S.of(context).reviewsDetailPageAppBarTitleTxt),
          leadingType: AppBarBackType.Back,
          actions: actionsWidget,
        ),
        body: Obx(() => _buildBody(context)));
  }

  Widget _buildBody(BuildContext context) {
    return SingleChildScrollView(
        padding: EdgeInsets.only(top: 8.0),
        child: Container(
          decoration: new BoxDecoration(
            color: Theme.of(context).colorScheme.primaryVariant,
          ),
          child: ReviewItem(
            reviewData: controller.state.detailModel!,
          ),
        ));
  }
}
