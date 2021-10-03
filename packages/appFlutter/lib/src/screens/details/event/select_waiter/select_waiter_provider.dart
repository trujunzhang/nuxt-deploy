import 'package:flutter/material.dart';
import 'package:ieatta/src/appModels/models/Events.dart';
import 'package:ieatta/src/providers/select_state.dart';
import 'package:provider/provider.dart';

import 'select_waiter_screen.dart';

class SelectWaiterScreenObject {
  final ParseModelEvents event;
  final List<String> unselectedWaiterIds;

  SelectWaiterScreenObject({required this.event, required this.unselectedWaiterIds});
}

class SelectWaiterProvider extends StatefulWidget {
  SelectWaiterProvider({Key? key}) : super(key: key);

  @override
  _SelectWaiterProviderState createState() => _SelectWaiterProviderState();
}

class _SelectWaiterProviderState extends State<SelectWaiterProvider> {
  late SelectWaiterScreenObject screenObject;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final Object? _screenObject = ModalRoute.of(context)!.settings.arguments;
    setState(() {
      screenObject = _screenObject as SelectWaiterScreenObject;
    });
  }

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider<SelectState>(
        create: (context) => SelectState(isSaving: false),
        child: SelectWaiterScreen(
          screenObject: screenObject,
        ));
  }
}
