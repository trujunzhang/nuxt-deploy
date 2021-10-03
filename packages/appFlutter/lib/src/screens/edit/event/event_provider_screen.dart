import 'package:flutter/material.dart';
import 'package:ieatta/core/filter/filter_models.dart';
import 'package:ieatta/core/utils/timeago_utils.dart';
import 'package:ieatta/src/appModels/models/Events.dart';
import 'package:ieatta/src/providers/event_state.dart';
import 'package:provider/provider.dart';

import 'event_page.dart';

class CreateEditEventProviderScreen extends StatelessWidget {
  CreateEditEventProviderScreen({Key? key, required this.restaurantId, this.eventId, required this.isNew})
      : super(key: key);

  final bool isNew;
  final String restaurantId;
  final String? eventId;

  @override
  Widget build(BuildContext context) {
    ParseModelEvents? event;
    if (isNew == false) {
      event = FilterModels.instance.getSingleEvent(context, eventId!);
    }

    return ChangeNotifierProvider<EventState>(
        create: (context) => EventState(
              restaurantId: restaurantId,
              displayName: event != null ? event.displayName : "",
              want: event != null ? event.want : "",
              startDate: event != null ? event.start : getNowFormat(),
              endDate: event != null ? event.end : getNowFormat(),
            ),
        child: EventPage(event: event));
  }
}
