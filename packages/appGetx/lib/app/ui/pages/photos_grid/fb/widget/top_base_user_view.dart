import 'package:app_language/langs/l10n.dart';
import 'package:flutter/material.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/ui/helpers/avatar_widget.dart';
import 'package:my_plugin/my_plugin.dart';

class TopBaseUserView extends StatelessWidget {
  final bool showEditBtn;
  final Function()? onEditPress;
  final Function()? onDeletePress;
  final AvatarUser user;
  final int selectedIndex;
  final int totalCount;

  const TopBaseUserView({
    Key? key,
    required this.user,
    required this.selectedIndex,
    required this.totalCount,
    this.showEditBtn = false,
    this.onEditPress,
    this.onDeletePress,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.black,
      child: Column(children: [
        MyAppBar(
          backgroundColor: Colors.transparent,
          leading: const AppBarBack(AppBarBackType.Back, color: Colors.white),
          title: Row(
            children: [
              AvatarWidget(
                user: user,
                padding: const EdgeInsets.only(left: 8.0, right: 8.0),
              ),
              Text(
                user.username!,
                style: const TextStyle(color: Colors.white),
              )
            ],
          ),
          actions: [
            // Action1: edit photo icon.
            (showEditBtn)
                ? Padding(
                    padding: const EdgeInsets.only(right: 4.0),
                    child: GestureDetector(
                        onTap: onEditPress,
                        child: Center(
                            child: Text(
                          S.of(context).pageAppBarRightEditBtnTitle,
                          style: const TextStyle(color: Colors.white),
                        ))))
                : const SizedBox.shrink(),
            // (showEditBtn)
            //     ? Padding(
            //         padding: const EdgeInsets.only(right: 4.0),
            //         child: GestureDetector(
            //             onTap: onDeletePress,
            //             child: Center(
            //                 child: Text(
            //               S.of(context).pageAppBarRightDeleteBtnTitle,
            //               style: const TextStyle(color: Colors.white),
            //             ))))
            //     : const SizedBox.shrink()
          ],
        ),
        _buildPageIndex()
      ]),
    );
  }

  Widget _buildPageIndex() {
    return Padding(
        padding: const EdgeInsets.only(bottom: 6),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.end,
          children: [
            Center(
              child: Text(
                (selectedIndex + 1).toString() + '/' + totalCount.toString(),
                style: const TextStyle(color: Colors.white),
              ),
            )
          ],
        ));
  }
}
