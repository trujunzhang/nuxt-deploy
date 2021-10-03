import 'package:flutter/material.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/ui/helpers/avatar_widget.dart';
import 'package:ieatta/common/langs/l10n.dart';
import 'package:my_plugin/my_plugin.dart';

class TopBaseUserView extends StatelessWidget {
  const TopBaseUserView(
      {Key? key,
      required this.user,
      required this.selectedIndex,
      required this.totalCount,
      this.showEditBtn = false,
      this.onEditPress})
      : super(key: key);
  final bool showEditBtn;
  final AvatarUser user;
  final int selectedIndex;
  final int totalCount;
  final Function? onEditPress;

  @override
  Widget build(BuildContext context) {
    return Column(children: [
      MyAppBar(
        backgroundColor: Colors.transparent,
        leading: AppBarBack(AppBarBackType.Back, color: Colors.white),
        title: Row(
          children: [
            AvatarWidget(
              user: user,
              padding: EdgeInsets.only(left: 8.0, right: 8.0),
            ),
            Text(
              user.username!,
              style: TextStyle(color: Colors.white),
            )
          ],
        ),
        actions: [
          // Action1: edit photo icon.
          (showEditBtn)
              ? Padding(
                  padding: EdgeInsets.only(right: 20.0),
                  child: GestureDetector(
                      onTap: () {
                        onEditPress!();
                      },
                      child: Center(
                          child: Text(
                        S.of(context).pageAppBarRightEditBtnTitle,
                        style: TextStyle(color: Colors.white),
                      ))))
              : SizedBox.shrink()
        ],
      ),
      _buildPageIndex()
    ]);
  }

  Widget _buildPageIndex() {
    return Padding(
        padding: EdgeInsets.only(bottom: 6),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.end,
          children: [
            Center(
              child: Text(
                (selectedIndex + 1).toString() + '/' + totalCount.toString(),
                style: TextStyle(color: Colors.white),
              ),
            )
          ],
        ));
  }
}
