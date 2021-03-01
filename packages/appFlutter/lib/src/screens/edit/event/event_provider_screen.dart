import 'package:flutter/material.dart';
import 'package:ieatta/src/appModels/models/Events.dart';
import 'package:ieatta/src/providers/event_state.dart';
import 'package:provider/provider.dart';

import 'event_page.dart';

class CreateEditEventScreenObject {
  final String restaurantId;
  final ParseModelEvents eventModel;

  CreateEditEventScreenObject({
    @required this.restaurantId,
    this.eventModel,
  });
}

class CreateEditEventProviderScreen extends StatefulWidget {
  @override
  _CreateEditEventProviderScreenState createState() =>
      _CreateEditEventProviderScreenState();
}

class _CreateEditEventProviderScreenState
    extends State<CreateEditEventProviderScreen> {
  // Model
  CreateEditEventScreenObject screenObject;

  @override
  void initState() {
    super.initState();
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final CreateEditEventScreenObject _screenObject =
        ModalRoute.of(context).settings.arguments;
    setState(() {
      screenObject = _screenObject;
    });
  }

  @override
  Widget build(BuildContext context) {
    ParseModelEvents event = screenObject.eventModel;
    return ChangeNotifierProvider<EventState>(
        create: (context) => EventState(
              restaurantId: screenObject.restaurantId,
              displayName: event != null ? event.displayName : "",
              want: event != null ? event.want : "",
              startDate: event != null ? event.start : "",
              endDate: event != null ? event.end : "",
            ),
        child: EventPage(event: event));
  }
}