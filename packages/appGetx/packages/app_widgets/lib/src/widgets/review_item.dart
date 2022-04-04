import 'package:app_config/app_config.dart';
import 'package:app_models/app_models.dart';
import 'package:flutter/material.dart';
import 'package:app_widgets/app_widgets.dart';
import 'package:doc_widget/doc_widget.dart';

@docWidget
class ReviewItem extends StatelessWidget {
  final ParseModelReviews review;
  final bool showPreview;
  final Function() onUserItemTap;

  const ReviewItem({
    Key? key,
    required this.review,
    required this.onUserItemTap,
    this.showPreview = false,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        _buildInfo(context),
        ListTile(
          title: Row(
            children: [
              SizedBox(
                  width: 120,
                  height: 18,
                  child: Image(
                      image: AssetImage(
                          '${review.rate}'.toSmallStarImage),
                      fit: BoxFit.cover)),
            ],
          ),
          subtitle: Container(
              padding: const EdgeInsets.only(top: 12, bottom: 12),
              child: showPreview
                  ? Text(
                      review.body!,
                      style: Theme.of(context).textTheme.bodyText2,
                      overflow: TextOverflow.ellipsis,
                      maxLines: 3,
                    )
                  : Text(
                      review.body!,
                      style: Theme.of(context).textTheme.bodyText2,
                    )),
        ),
      ],
    );
  }

  Widget _buildInfo(BuildContext context) {
    return ListTile(
        onTap: onUserItemTap,
        leading: ProfileAvatar(avatarUrl: review.avatarUrl),
        title: Text(review.username!),
        trailing: Text(
          formatByTimeAgo(review.updatedAt!),
          style: const TextStyle(
            color: Colors.grey,
            // fontSize: 15
          ),
        ));
  }
}
