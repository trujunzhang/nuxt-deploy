import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/components/restaurants/image.dart';
import 'package:ieatta/src/components/widgets/rating_image.dart';

import '../hotel_app_theme.dart';

class HotelListView extends StatefulWidget {
  HotelListView({
    Key? key,
    required this.restaurantData,
    this.callback,
    this.expandIconCallback,
    this.showThumbnail = true,
    this.showExpandIcon = false,
  }) : super(key: key);

  final bool showThumbnail;
  final bool showExpandIcon;
  final VoidCallback? callback;
  final Function? expandIconCallback;
  final ParseModelRestaurants restaurantData;

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
              if (widget.expandIconCallback != null) {
                widget.expandIconCallback!(!iconExpand);
              }
              setState(() {
                iconExpand = !iconExpand;
              });
            },
            child: Icon(
              iconExpand ? Icons.expand_more : Icons.expand_less,
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
        if (widget.callback != null) {
          widget.callback!();
        }
      },
      child: Container(
        decoration: BoxDecoration(
          borderRadius: const BorderRadius.all(Radius.circular(16.0)),
          boxShadow: <BoxShadow>[
            BoxShadow(
              color: Colors.grey.withOpacity(0.6),
              offset: const Offset(4, 4),
              blurRadius: 16,
            ),
          ],
        ),
        child: ClipRRect(
          borderRadius: const BorderRadius.all(Radius.circular(16.0)),
          child: Column(
            children: <Widget>[
              if (widget.showThumbnail)
                AspectRatio(
                  aspectRatio: 2,
                  child: buildRestaurantImage(widget.restaurantData),
                ),
              Container(
                color: HotelAppTheme.buildLightTheme().backgroundColor,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    Expanded(
                      child: Container(
                        child: Padding(
                          padding: const EdgeInsets.only(left: 16, top: 8, bottom: 8),
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: <Widget>[
                              Text(
                                widget.restaurantData.displayName,
                                textAlign: TextAlign.left,
                                style: TextStyle(fontWeight: FontWeight.w600, fontSize: 22, color: Colors.black),
                              ),
                              Row(
                                crossAxisAlignment: CrossAxisAlignment.center,
                                mainAxisAlignment: MainAxisAlignment.start,
                                children: <Widget>[
                                  Text(
                                    widget.restaurantData.locality!,
                                    style: TextStyle(fontSize: 14, color: Colors.grey.withOpacity(0.8)),
                                  ),
                                  const SizedBox(
                                    width: 4,
                                  ),
                                  Icon(
                                    FontAwesomeIcons.mapMarkerAlt,
                                    size: 12,
                                    color: HotelAppTheme.buildLightTheme().primaryColor,
                                  ),
                                  Expanded(
                                    child: Text(
                                      widget.restaurantData.route!,
                                      overflow: TextOverflow.ellipsis,
                                      style: TextStyle(fontSize: 14, color: Colors.grey.withOpacity(0.8)),
                                    ),
                                  ),
                                ],
                              ),
                              Padding(
                                padding: const EdgeInsets.only(top: 4),
                                child: Row(
                                  children: <Widget>[
                                    RatingImage(baseReview: widget.restaurantData),
                                    Text(
                                      ' ${widget.restaurantData.reviewCount} Reviews',
                                      style: TextStyle(fontSize: 14, color: Colors.grey.withOpacity(0.8)),
                                    ),
                                  ],
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                    _buildTopRight(),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
