import 'package:flutter/material.dart';
import 'package:ieatta/src/appModels/models/PeopleInEvent.dart';
import 'package:ieatta/src/providers/select_state.dart';
import 'package:provider/provider.dart';

import 'select_recipe_screen.dart';

class SelectRecipeScreenObject {
  final ParseModelPeopleInEvent peopleInEvent;
  final List<String> unorderedRecipeIds;

  SelectRecipeScreenObject({required this.peopleInEvent, required this.unorderedRecipeIds});
}

class SelectRecipeProvider extends StatefulWidget {
  SelectRecipeProvider({Key? key}) : super(key: key);

  @override
  _SelectRecipeProviderState createState() => _SelectRecipeProviderState();
}

class _SelectRecipeProviderState extends State<SelectRecipeProvider> {
  late SelectRecipeScreenObject screenObject;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final Object? _screenObject = ModalRoute.of(context)!.settings.arguments;
    setState(() {
      screenObject = _screenObject as SelectRecipeScreenObject;
    });
  }

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider<SelectState>(
        create: (context) => SelectState(isSaving: false),
        child: SelectRecipeScreen(
          screenObject: screenObject,
        ));
  }
}
