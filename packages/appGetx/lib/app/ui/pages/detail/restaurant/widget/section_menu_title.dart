import 'package:app_config/app_config.dart';
import 'package:flutter/material.dart';

class MenusSectionTitle extends StatelessWidget {
  final Function() onNewMenuIconPress;

  const MenusSectionTitle({Key? key, required this.onNewMenuIconPress})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding:
          const EdgeInsets.only(left: 8.0, right: 8.0, top: 16, bottom: 2.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: <Widget>[
          const Text(
            "On the Menu",
            style: AppTextStyle.sectionTitle,
          ),
          SizedBox(
              width: 40,
              height: 40,
              child: InkWell(
                onTap: onNewMenuIconPress,
                child: const Icon(
                  Icons.add,
                  color: Colors.grey,
                ),
              )),
        ],
      ),
    );
  }
}
