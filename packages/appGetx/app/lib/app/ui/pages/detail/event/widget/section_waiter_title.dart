import 'package:app_config/app_config.dart';
import 'package:flutter/material.dart';

class WaitersSectionTitle extends StatelessWidget {
  final Function() onAddWaiterIconPress;

  const WaitersSectionTitle({Key? key, required this.onAddWaiterIconPress})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding:
          const EdgeInsets.only(left: 8.0, right: 8.0, top: 16, bottom: 4.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: <Widget>[
          const Text(
            "Waiters",
            style: AppTextStyles.sectionTitle,
          ),
          SizedBox(
              width: 40,
              height: 40,
              child: InkWell(
                onTap: onAddWaiterIconPress,
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
