import 'package:app_language/langs/l10n.dart';
import 'package:app_models/app_models.dart';
import 'package:app_widgets/app_widgets.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:my_plugin/my_plugin.dart';
import 'package:ieatta/app/routes/app_pages.dart';
import 'package:ieatta/app/routes/params_helper.dart';

import 'index.dart';

class DetailReviewPage extends GetWidget<DetailReviewController> {
  const DetailReviewPage({Key? key}) : super(key: key);

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
    ParseModelReviews review = controller.state.detailModel!;
    return SingleChildScrollView(
        padding: const EdgeInsets.only(top: 8.0),
        child: ThemedBox(
          child: ReviewItem(
            review: review,
            onUserItemTap: () => Get.toNamed(
                '${Routes.USER_PROFILE}?${ParamsHelper.ID}=${review.creatorId}'),
          ),
        ));
  }
}
