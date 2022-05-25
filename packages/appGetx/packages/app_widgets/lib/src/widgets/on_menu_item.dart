import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:app_models/app_models.dart';
import 'package:app_widgets/app_widgets.dart';
import 'package:doc_widget/doc_widget.dart';
import 'package:app_config/app_config.dart';

@docWidget
class OnMenuItem extends StatelessWidget {
  final VoidCallback onTapItem;
  final ParseModelRecipes recipe;

  const OnMenuItem({
    Key? key,
    required this.onTapItem,
    required this.recipe,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 5.0, horizontal: 4.0),
      child: Container(
          width: 135.0,
          height: 180.0,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(2.0),
            color: Colors.white,
          ),
          child: InkWell(
            onTap: onTapItem,
            child: _buildBody(context),
          )),
    );
  }

  Widget _buildInfo() {
    return Positioned(
      left: 10.0,
      bottom: 10.0,
      right: 10.0,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Text(
            recipe.displayName!,
            overflow: TextOverflow.ellipsis,
            maxLines: 1,
            style: const TextStyle(
              fontSize: Dimens.font_sp16,
              fontWeight: FontWeight.bold,
              color: Colors.white,
            ),
          ),
          Gaps.vGap5,
          Row(
            children: <Widget>[
              // Rating star view
              RatingImage(
                baseReview: recipe,
                imageWidth: 70,
                imageHeight: 13,
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildBody(BuildContext context) {
    return ClipRRect(
      borderRadius: const BorderRadius.all(
        Radius.circular(10.0),
      ),
      child: Stack(
        children: <Widget>[
          SizedBox(
            height: 230.0,
            width: Get.width,
            child: buildRecipeImage(recipe),
          ),
          Positioned(
            left: 0.0,
            bottom: 0.0,
            width: Get.width,
            height: 60.0,
            child: Container(
              decoration: const BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.bottomCenter,
                  end: Alignment.topCenter,
                  colors: [Colors.black, Colors.black12],
                ),
              ),
            ),
          ),
          _buildInfo(),
          Positioned(
            left: 10.0,
            bottom: 10.0,
            right: 10.0,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                Container(),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.end,
                  children: <Widget>[
                    Text(
                      '\$' + recipe.price!,
                      style: const TextStyle(
                          fontSize: 14.0,
                          fontWeight: FontWeight.bold,
                          color: Colors.orangeAccent),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
