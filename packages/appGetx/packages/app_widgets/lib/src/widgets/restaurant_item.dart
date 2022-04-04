import 'package:app_config/app_config.dart';
import 'package:app_widgets/src/images/index.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:app_models/app_models.dart';
import 'package:doc_widget/doc_widget.dart';
import 'package:my_plugin/my_plugin.dart';

import 'rating_image.dart';
import 'themed_box.dart';

/// hotel_list_view.dart
@docWidget
class HotelListView extends StatefulWidget {
  const HotelListView({
    Key? key,
    required this.restaurant,
    this.onTapItem,
    this.onExpandIconTap,
    this.showThumbnail = true,
    this.showExpandIcon = false,
  }) : super(key: key);

  final bool showThumbnail;
  final bool showExpandIcon;
  final VoidCallback? onTapItem;
  final Function(bool iconExpand)? onExpandIconTap;
  final ParseModelRestaurants restaurant;

  @override
  _HotelListViewState createState() => _HotelListViewState();
}

class _HotelListViewState extends State<HotelListView> {
  bool iconExpand = false;

  @override
  void initState() {
    super.initState();
    iconExpand = widget.showThumbnail;
  }

  Widget _buildTopRight() {
    if (!widget.showExpandIcon) {
      return Container();
    }
    return Padding(
      padding: const EdgeInsets.only(right: 16, top: 8),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.end,
        children: <Widget>[
          InkWell(
            onTap: () {
              if (widget.onExpandIconTap != null) {
                widget.onExpandIconTap!(!iconExpand);
              }
              setState(() {
                iconExpand = !iconExpand;
              });
            },
            child: Icon(
              iconExpand ? Icons.expand_more : Icons.expand_less,
              // color:Colors.black,
              size: 32,
            ),
          )
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return InkWell(
      splashColor: Colors.transparent,
      onTap: () {
        if (widget.onTapItem != null) {
          widget.onTapItem!();
        }
      },
      child: _buildItem(context),
    );
  }

  Widget _buildInfo(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        Expanded(
          child: Padding(
            padding: const EdgeInsets.only(left: 16, top: 8, bottom: 8),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Text(
                  widget.restaurant.displayName!,
                  textAlign: TextAlign.left,
                  style: const TextStyle(
                    fontWeight: FontWeight.w600,
                    fontSize: Dimens.font_sp22,
                  ),
                ),
                Row(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: <Widget>[
                    Text(
                      widget.restaurant.locality!,
                      style: TextStyle(
                        fontSize: Dimens.font_sp14,
                        color: Colors.grey.withOpacity(0.8),
                      ),
                    ),
                    Gaps.hGap4,
                    const Icon(
                      FontAwesomeIcons.mapMarkerAlt,
                      size: Dimens.icon_sp12,
                    ),
                    Gaps.hGap4,
                    Expanded(
                      child: Text(
                        widget.restaurant.route!,
                        overflow: TextOverflow.ellipsis,
                        style: TextStyle(
                          fontSize: Dimens.font_sp14,
                          color: Colors.grey.withOpacity(0.8),
                        ),
                      ),
                    ),
                  ],
                ),
                Padding(
                  padding: const EdgeInsets.only(top: 4),
                  child: Row(
                    children: <Widget>[
                      RatingImage(baseReview: widget.restaurant),
                      Text(
                        ' ${widget.restaurant.reviewCount} Reviews',
                        style: TextStyle(
                          fontSize: Dimens.font_sp14,
                          color: Colors.grey.withOpacity(0.8),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
        _buildTopRight(),
      ],
    );
  }

  Widget _buildItem(BuildContext context) {
    bool isDarkMode = context.isDarkBrightness;
    BoxDecoration? boxDecoration = isDarkMode
        ? const BoxDecoration()
        : BoxDecoration(
            borderRadius: const BorderRadius.all(Radius.circular(16.0)),
            boxShadow: <BoxShadow>[
              BoxShadow(
                color: Colors.grey.withOpacity(0.6),
                offset: const Offset(4, 4),
                blurRadius: 16,
              ),
            ],
          );
    return Container(
      decoration: boxDecoration,
      child: ClipRRect(
        borderRadius: const BorderRadius.all(Radius.circular(16.0)),
        child: Column(
          children: <Widget>[
            if (widget.showThumbnail)
              AspectRatio(
                aspectRatio: 2,
                child: buildRestaurantImage(widget.restaurant),
              ),
            ThemedBox(child: _buildInfo(context)),
          ],
        ),
      ),
    );
  }
}
