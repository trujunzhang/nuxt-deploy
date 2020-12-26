import 'package:flutter/material.dart';
import 'package:ieatta/src/appModels/models/Avatar_user.dart';
import 'package:ieatta/src/config/palette.dart';

import 'users/image.dart';

class ProfileAvatar extends StatelessWidget {
  final AvatarUser user;
  final bool isActive;
  final bool hasBorder;

  const ProfileAvatar({
    Key key,
    @required this.user,
    this.isActive = false,
    this.hasBorder = false,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        CircleAvatar(
            radius: 20.0,
            backgroundColor: Palette.facebookBlue,
            child: ClipRRect(
              borderRadius: BorderRadius.circular(20.0),
              child: buildAvatarImage(user),
            )),
        isActive
            ? Positioned(
                bottom: 0.0,
                right: 0.0,
                child: Container(
                  height: 15.0,
                  width: 15.0,
                  decoration: BoxDecoration(
                    color: Palette.online,
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
