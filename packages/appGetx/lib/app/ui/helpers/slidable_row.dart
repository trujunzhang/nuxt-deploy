import 'package:flutter/material.dart';
import 'package:flutter_slidable/flutter_slidable.dart';

class SlidableRow extends StatelessWidget {
  final String rowKey;
  final Widget row;
  final double ratio;
  final void Function(BuildContext context) onPress;

  const SlidableRow(
      {Key? key,
      required this.row,
      required this.rowKey,
      required this.onPress,
      this.ratio = 0.25})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Slidable(
        key: Key(rowKey),
        direction: Axis.horizontal,
        child: row,
        // The end action pane is the one at the right or the bottom side.
        endActionPane: ActionPane(
          motion: const BehindMotion(),
          extentRatio: ratio,
          // dismissible: DismissiblePane(onDismissed: () {}),
          children: [
            SlidableAction(
              backgroundColor: const Color(0xFFFE4A49),
              foregroundColor: Colors.white,
              icon: Icons.delete,
              label: 'Delete',
              onPressed: onPress,
            ),
          ],
        ));
  }
}
