import 'package:flutter/material.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/ui/helpers/slidable_row.dart';
import 'package:ieatta/app/ui/widgets/photo_base_view.dart';

class WaiterItem extends StatelessWidget {
  final ParseModelPhotos waiterData;
  final Function() onWaiterItemClick;
  final Function(BuildContext context) onDeleteWaiterIconPress;

  const WaiterItem({
    Key? key,
    required this.waiterData,
    required this.onWaiterItemClick,
    required this.onDeleteWaiterIconPress,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SlidableRow(
      ratio: 0.6,
      rowKey: waiterData.uniqueId,
      row: _buildItem(context),
      onPress: onDeleteWaiterIconPress,
    );
  }

  Widget _buildItem(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 5.0, horizontal: 10.0),
      child: Container(
          width: 135.0,
          height: 180.0,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(20.0),
            color: Colors.white,
          ),
          child: InkWell(
              onTap: onWaiterItemClick,
              child: PhotoBaseView(photoData: waiterData))),
    );
  }
}
