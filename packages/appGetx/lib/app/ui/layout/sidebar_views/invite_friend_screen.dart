import 'package:app_config/app_config.dart';
import 'package:app_language/langs/l10n.dart';
import 'package:flutter/material.dart';
import 'package:my_plugin/my_plugin.dart';

class InviteFriend extends StatelessWidget {
  const InviteFriend({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BaseScaffold(
        appBar: MyAppBar(
          centerTitle: true,
          title: MyTitle(S.of(context).drawerMenuItemInvite),
          leadingType: AppBarBackType.None,
        ),
        body: _buildBody(context));
  }

  Widget _buildBody(BuildContext context) {
    return Column(
      children: <Widget>[
        Container(
          padding: EdgeInsets.only(
              top: MediaQuery.of(context).padding.top, left: 16, right: 16),
          child: Image.asset(
            R.ASSETS_IMAGES_INVITEIMAGE_PNG,
          ),
        ),
        Container(
          padding: const EdgeInsets.only(top: 8),
          child: const Text(
            'Invite Your Friends',
            style: TextStyle(
              fontSize: 20,
              fontWeight: FontWeight.bold,
            ),
          ),
        ),
        Container(
          padding: const EdgeInsets.only(top: 16,left: 8,right: 8),
          child: const Text(
            'Are you one of those who makes everything\n at the last moment?',
            textAlign: TextAlign.center,
            style: TextStyle(
              fontSize: 16,
            ),
          ),
        ),
        Expanded(
          child: Padding(
            padding: const EdgeInsets.all(8.0),
            child: Center(
              child: Container(
                width: 120,
                height: 40,
                decoration: BoxDecoration(
                  color: Colors.blue,
                  borderRadius: const BorderRadius.all(Radius.circular(4.0)),
                  boxShadow: <BoxShadow>[
                    BoxShadow(
                        color: AppColors.grey.withOpacity(0.6),
                        offset: const Offset(4, 4),
                        blurRadius: 8.0),
                  ],
                ),
                child: Material(
                  color: Colors.transparent,
                  child: InkWell(
                    onTap: () {},
                    child: Center(
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: const <Widget>[
                          Icon(
                            Icons.share,
                            color: Colors.white,
                            size: 22,
                          ),
                          Padding(
                            padding: EdgeInsets.all(4.0),
                            child: Text(
                              'Invite',
                              style: TextStyle(
                                fontWeight: FontWeight.w500,
                                color: Colors.white,
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        )
      ],
    );
  }
}
