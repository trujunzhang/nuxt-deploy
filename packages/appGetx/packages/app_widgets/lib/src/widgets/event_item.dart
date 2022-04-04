import 'package:flutter/material.dart';
import 'package:app_models/app_models.dart';
import 'package:doc_widget/doc_widget.dart';
import 'package:my_plugin/my_plugin.dart';

import 'themed_box.dart';

@docWidget
class EventItem extends StatelessWidget {
  final ParseModelEvents event;
  final GestureTapCallback? onTapItem;
  const EventItem({
    Key? key,
    required this.event,
    required this.onTapItem,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    bool isDarkMode = context.isDarkBrightness;
    return ThemedBox(
      child: ListTile(
        onTap: onTapItem,
        leading:
            Icon(Icons.event, color: isDarkMode ? Colors.white : Colors.grey),
        trailing: Icon(Icons.keyboard_arrow_right,
            color: isDarkMode ? Colors.white : Colors.grey),
        title: Text(event.displayName!),
        subtitle: Text(
          event.want!,
          overflow: TextOverflow.ellipsis,
          maxLines: 2,
          style: const TextStyle(color: Colors.grey),
        ),
      ),
    );
  }
}
