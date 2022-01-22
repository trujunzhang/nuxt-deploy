import 'package:app_config/app_config.dart';
import 'package:flutter/material.dart';

import 'images/user.dart';

class ProfileAvatar extends StatelessWidget {
  final String? avatarUrl;
  final bool isActive;
  final bool hasBorder;

  const ProfileAvatar({
    Key? key,
    this.avatarUrl,
    this.isActive = false,
    this.hasBorder = false,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        CircleAvatar(
            radius: 20.0,
            backgroundColor: AppColors.facebookBlue,
            child: ClipRRect(
              borderRadius: BorderRadius.circular(20.0),
              child: buildParseModelUsersImageWithOriginalUrl(avatarUrl),
            )),
        isActive
            ? Positioned(
                bottom: 0.0,
                right: 0.0,
                child: Container(
                  height: 15.0,
                  width: 15.0,
                  decoration: BoxDecoration(
                    color: AppColors.online,
                    shape: BoxShape.circle,
                    border: Border.all(
                      width: 2.0,
                      color: Colors.white,
                    ),
                  ),
                ),
              )
            : const SizedBox.shrink(),
      ],
    );
  }
}
