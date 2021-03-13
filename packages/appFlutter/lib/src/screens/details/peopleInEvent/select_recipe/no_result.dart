import 'package:flutter/material.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/src/screens/edit/recipe/recipe_provider_screen.dart';
import 'package:ieatta/src/screens/restaurants/hotel_app_theme.dart';

class RecipesEmpty extends StatefulWidget {
  final String restaurantId;
  RecipesEmpty({Key key,@required this.restaurantId}) : super(key: key);

  @override
  _RecipesEmptyState createState() => _RecipesEmptyState();
}

class _RecipesEmptyState extends State<RecipesEmpty> {
  Widget buildBtn() {
    return Container(
      decoration: BoxDecoration(
        color: Theme.of(context).primaryColor,
        borderRadius: const BorderRadius.all(
          Radius.circular(38.0),
        ),
        boxShadow: <BoxShadow>[
          BoxShadow(
              color: Colors.grey.withOpacity(0.4),
              offset: const Offset(0, 2),
              blurRadius: 8.0),
        ],
      ),
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          borderRadius: const BorderRadius.all(
            Radius.circular(32.0),
          ),
          onTap: () {
            Navigator.of(context).pushNamed(Routes.create_edit_recipe,
                arguments:
                CreateEditRecipeScreenObject(restaurantId: widget.restaurantId));
          },
          child: Padding(
            padding: const EdgeInsets.all(16.0),
            child: Icon(Icons.add,
                size: 20,
                color: HotelAppTheme.buildLightTheme().backgroundColor),
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Center(
        child: Column(
      children: <Widget>[
        Container(
          height: 100,
        ),
        Container(
          margin: const EdgeInsets.only(bottom: 12),
          child: Text('No Unordered Recipes'),
        ),
        buildBtn()
      ],
    ));
  }
}
