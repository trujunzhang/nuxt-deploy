import 'package:app_models/app_models.dart';
import 'package:app_widgets/app_widgets.dart';
import 'package:flutter/material.dart';
import 'package:doc_widget/doc_widget.dart';
import 'package:mix/mix.dart';

@docWidget
class WaiterItem extends StatelessWidget {
  final ParseModelPhotos waiter;
  final GestureTapCallback? onTapItem;
  final VoidCallback? onTapDeleteIcon;

  const WaiterItem({
    Key? key,
    required this.waiter,
    this.onTapItem,
    this.onTapDeleteIcon,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 4.0),
      child: Stack(
        children: [
          _buildBody(context),
          AspectRatio(
            aspectRatio: 135 / 160,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.end,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Box(
                  mix: Mix(
                    marginRight(8),
                    marginTop(4),
                    width(40),
                    height(40),
                    rounded(20),
                    bgColor($onSecondary),
                  ),
                  child: _buildDeleteIcon(),
                )
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildDeleteIcon() {
    return SizedBox(
      width: 18,
      height: 18,
      child: IconButton(
        icon: const Icon(
          Icons.delete_forever_outlined,
          color: Colors.red,
        ),
        onPressed: onTapDeleteIcon,
      ),
    );
  }

  Widget _buildBody(BuildContext context) {
    return AspectRatio(
      aspectRatio: 135 / 160,
      child: InkWell(
        onTap: onTapItem,
        child: PhotoBaseView(photo: waiter),
      ),
    );
  }

  Widget _buildBodyxxx(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 5.0, horizontal: 10.0),
      child: Container(
        width: 135.0,
        height: 160.0,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(20.0),
          color: Colors.white,
        ),
        child: InkWell(
          onTap: onTapItem,
          child: PhotoBaseView(photo: waiter),
        ),
      ),
    );
  }
}
