import 'package:flutter/material.dart';
import 'package:ieatta/src/providers/select_state.dart';
import 'package:provider/provider.dart';

import 'select_person_screen.dart';

class SelectPersonScreenObject {
  final String restaurantId;
  final String eventId;
  final List<String> disorderedUserIds;

  SelectPersonScreenObject({required this.restaurantId, required this.eventId, required this.disorderedUserIds});
}

class SelectPersonProvider extends StatefulWidget {
  SelectPersonProvider({Key? key}) : super(key: key);

  @override
  _SelectPersonProviderState createState() => _SelectPersonProviderState();
}

class _SelectPersonProviderState extends State<SelectPersonProvider> {
  late SelectPersonScreenObject screenObject;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final Object? _screenObject = ModalRoute.of(context)!.settings.arguments;
    setState(() {
      screenObject = _screenObject as SelectPersonScreenObject;
    });
  }

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider<SelectState>(
        create: (context) => SelectState(isSaving: false),
        child: SelectPersonScreen(
          screenObject: screenObject,
        ));
  }
}
