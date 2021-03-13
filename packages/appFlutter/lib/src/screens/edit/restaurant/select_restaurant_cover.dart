import 'package:flutter/material.dart';
import 'package:ieatta/core/filter/filter_models.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/components/edit_restaurant/common.dart';
import 'package:ieatta/src/components/photos/photo_base_view.dart';
import 'package:ieatta/src/providers/restaurant_state.dart';
import 'package:provider/provider.dart';

class SelectRestaurantCover extends StatefulWidget {
  final ParseModelRestaurants restaurant;

  SelectRestaurantCover({
    Key key,
    @required this.restaurant,
  }) : super(key: key);

  @override
  _SelectRestaurantCoverState createState() => _SelectRestaurantCoverState();
}

class _SelectRestaurantCoverState extends State<SelectRestaurantCover> {
  onSelectCoverClick(
      RestaurantState restaurantState, ParseModelPhotos item) async {
    restaurantState.setCoverUrl(item.originalUrl);
    ParseModelRestaurants nextRestaurant = ParseModelRestaurants.updateCover(
        model: widget.restaurant, originalUrl: item.originalUrl);
    await FirestoreDatabase().setRestaurant(model: nextRestaurant);
  }

  @override
  Widget build(BuildContext context) {
    RestaurantState restaurantState =
        Provider.of<RestaurantState>(context, listen: false);
    List<ParseModelPhotos> photosList = FilterModels.instance
        .getPhotosInRestaurantList(context, widget.restaurant.uniqueId);
    if (photosList.length == 0) {
      return Center(
        child: Text('No Data'),
      );
    }
    return GridView.builder(
      shrinkWrap: true,
      physics: ScrollPhysics(),
      primary: false,
      padding: EdgeInsets.all(5),
      itemCount: photosList.length,
      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 3,
        childAspectRatio: 200 / 200,
      ),
      itemBuilder: (BuildContext context, int index) {
        ParseModelPhotos photo = photosList[index];
        return buildGridItem(context, restaurantState, photo);
      },
    );
  }

  showSelectCoverIcon(RestaurantState restaurantState, ParseModelPhotos item) {
    if (item.originalUrl == '') {
      // Offline mode.
      return false;
    }
    return item.originalUrl == restaurantState.coverUrl;
  }

  Widget buildGridItem(BuildContext context, RestaurantState restaurantState,
      ParseModelPhotos photo) {
    var body = InkWell(
      onTap: () {
        onSelectCoverClick(restaurantState, photo);
      },
      child: Padding(
        padding: EdgeInsets.all(5.0),
        child: PhotoBaseView(photoData: photo),
      ),
    );
    var selection = Row(
      mainAxisAlignment: MainAxisAlignment.end,
      children: [buildSelectedIcon()],
    );
    List<Widget> list = new List<Widget>();
    list.add(body);
    if (showSelectCoverIcon(restaurantState, photo)) {
      list.add(selection);
    }
    return Stack(children: list);
  }
}
