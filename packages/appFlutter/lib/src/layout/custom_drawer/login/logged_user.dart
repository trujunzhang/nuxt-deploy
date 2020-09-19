import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:ieatta/core/models/auth_user_model.dart';
import 'package:ieatta/core/providers/auth_provider.dart';
import 'package:ieatta/src/components/users/image.dart';
import 'package:ieatta/src/layout/app_theme.dart';
import 'package:provider/provider.dart';

class LoggedUser extends StatefulWidget {
  LoggedUser({Key key, this.iconAnimationController}) : super(key: key);

  final AnimationController iconAnimationController;

  @override
  _LoggedUserState createState() => _LoggedUserState();
}

class _LoggedUserState extends State<LoggedUser> {
  @override
  Widget build(BuildContext context) {
    final authService = Provider.of<AuthProvider>(context, listen: false);

    return StreamBuilder<AuthUserModel>(
        stream: authService.user,
        builder: (BuildContext context, AsyncSnapshot<AuthUserModel> snapshot) {
          final AuthUserModel user = snapshot.data;
          if (user == null) {
            return Container();
          }
          return _buildBody(user);
        });
  }

  Widget _buildBody(AuthUserModel user) {
    return Container(
      child: Container(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.start,
          children: <Widget>[
            AnimatedBuilder(
              animation: widget.iconAnimationController,
              builder: (BuildContext context, Widget child) {
                return ScaleTransition(
                  scale: AlwaysStoppedAnimation<double>(
                      1.0 - (widget.iconAnimationController.value) * 0.2),
                  child: RotationTransition(
                    turns: AlwaysStoppedAnimation<double>(
                        Tween<double>(begin: 0.0, end: 24.0)
                                .animate(CurvedAnimation(
                                    parent: widget.iconAnimationController,
                                    curve: Curves.fastOutSlowIn))
                                .value /
                            360),
                    child: Container(
                      height: 120,
                      width: 120,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        boxShadow: <BoxShadow>[
                          BoxShadow(
                              color: AppTheme.grey.withOpacity(0.6),
                              offset: const Offset(2.0, 4.0),
                              blurRadius: 8),
                        ],
                      ),
                      child: ClipRRect(
                        borderRadius:
                            const BorderRadius.all(Radius.circular(60.0)),
                        child: buildAvatarImage(user),
                      ),
                    ),
                  ),
                );
              },
            ),
            Padding(
              padding: const EdgeInsets.only(top: 8, left: 4),
              child: Text(
                user.username,
                style: TextStyle(
                  fontWeight: FontWeight.w600,
                  color: AppTheme.grey,
                  fontSize: 18,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
