import 'package:flutter/material.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/components/edit_restaurant/common.dart';
import 'package:ieatta/src/components/photos/image.dart';
import 'package:ieatta/src/logic/photos_results.dart';
import 'package:provider/provider.dart';

class SelectRestaurantCover extends StatefulWidget {
  final ParseModelRestaurants restaurant;
  final Function onSelectCoverClick;
  final String restaurantCoverUrl;

  SelectRestaurantCover(
      {Key key,
      @required this.restaurant,
      @required this.onSelectCoverClick,
      @required this.restaurantCoverUrl})
      : super(key: key);

  @override
  _SelectRestaurantCoverState createState() => _SelectRestaurantCoverState();
}

class _SelectRestaurantCoverState extends State<SelectRestaurantCover> {
  @override
  Widget build(BuildContext context) {
    final firestoreDatabase =
        Provider.of<FirestoreDatabase>(context, listen: false);

    return StreamBuilder(
        stream: firestoreDatabase.photosInRestaurantStream(widget.restaurant.uniqueId),
        builder: (BuildContext context, AsyncSnapshot fbSnapshot) {
          if (fbSnapshot.hasError) {}
          if (!fbSnapshot.hasData) {
            return Container();
          }

          List<ParseModelPhotos> photos = fbSnapshot.data;
          if (photos.length == 0) {
            return Center(
              child: Text('No Data'),
            );
          }
          return GridView.builder(
            shrinkWrap: true,
            physics: ScrollPhysics(),
            primary: false,
            padding: EdgeInsets.all(5),
            itemCount: photos.length,
            gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: 3,
              childAspectRatio: 200 / 200,
            ),
            itemBuilder: (BuildContext context, int index) {
              ParseModelPhotos photo = photos[index];
              return buildGridItem(photo);
            },
          );
        });
  }

  showSelectCoverIcon(ParseModelPhotos item) {
    return item.originalUrl == widget.restaurantCoverUrl;
  }

  Widget buildGridItem(ParseModelPhotos photo) {
    var body = InkWell(
      onTap: () {
        widget.onSelectCoverClick(photo);
      },
      child: Padding(
        padding: EdgeInsets.all(5.0),
        child: buildPhotoImage(photo),
      ),
    );
    var selection = Row(
      mainAxisAlignment: MainAxisAlignment.end,
      children: [buildSelectedIcon()],
    );
    List<Widget> list = new List<Widget>();
    list.add(body);
    if (showSelectCoverIcon(photo)) {
      list.add(selection);
    }
    return Stack(children: list);
  }
}
