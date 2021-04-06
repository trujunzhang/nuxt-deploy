import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:ieatta/app/app_localizations.dart';
import 'package:ieatta/core/models/auth_user_model.dart';
import 'package:ieatta/core/providers/auth_provider.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/core/utils/timeago_utils.dart';
import 'package:ieatta/src/appModels/models/Events.dart';
import 'package:ieatta/src/providers/event_state.dart';
import 'package:ieatta/src/utils/toast.dart';
import 'package:provider/provider.dart';

class EventPage extends StatefulWidget {
  final ParseModelEvents event;

  const EventPage({Key key, this.event}) : super(key: key);

  @override
  _EventPageState createState() => _EventPageState();
}

class _EventPageState extends State<EventPage> {
  final _formKey = GlobalKey<FormBuilderState>();
  final _scaffoldKey = GlobalKey<ScaffoldState>();

  // Event
  bool _isButtonDisabled = false;

  @override
  Widget build(BuildContext context) {
    EventState eventState = Provider.of<EventState>(context, listen: false);
    final authProvider = Provider.of<AuthProvider>(context);
    return Scaffold(
        key: _scaffoldKey,
        appBar: AppBar(
          leading: IconButton(
            icon: Icon(Icons.cancel),
            onPressed: () {
              Navigator.of(context).pop();
            },
          ),
          title: Text(widget.event != null
              ? AppLocalizations.of(context)
                  .translate("eventsCreateEditAppBarTitleEditTxt")
              : AppLocalizations.of(context)
                  .translate("eventsCreateEditAppBarTitleNewTxt")),
          actions: <Widget>[
            TextButton(
                onPressed: _isButtonDisabled
                    ? null
                    : () async {
                        if (_formKey.currentState.saveAndValidate()) {
                          FocusScope.of(context).unfocus();

                          setState(() {
                            _isButtonDisabled = true;
                          });

                          AuthUserModel authUserModel =
                              await authProvider.getAuthUserModel();

                          ParseModelEvents lastModel = widget.event != null
                              ? widget.event
                              : ParseModelEvents.emptyEvent(
                                  authUserModel: authUserModel,
                                  restaurantId: eventState.restaurantId);

                          ParseModelEvents nextModel =
                              ParseModelEvents.updateEvent(
                                  model: lastModel,
                                  nextDisplayName: eventState.getDisplayName(),
                                  nextWant: eventState.getWant(),
                                  nextStartDate: eventState.getStartDate(),
                                  nextEndDate: eventState.getEndDate());

                          try {
                            final firestoreDatabase =
                                Provider.of<FirestoreDatabase>(context,
                                    listen: false);
                            await firestoreDatabase.setEvent(
                                model: nextModel); // For Restaurant.
                          } catch (e) {
                            setState(() {
                              _isButtonDisabled = false;
                            });
                          }

                          ToastUtils.showToast(AppLocalizations.of(context)
                              .translate("toastForSaveSuccess"));
                          // Navigate
                          Navigator.of(context).pop();
                        }
                      },
                child: Text(AppLocalizations.of(context)
                    .translate("editModelAppBarRightSaveTitle")))
          ],
        ),
        body: SingleChildScrollView(
            child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [_buildShortcuts()],
        )));
  }

  Widget _buildShortcuts() {
    return Shortcuts(
      shortcuts: <LogicalKeySet, Intent>{
        // Pressing enter on the field will now move to the next field.
        LogicalKeySet(LogicalKeyboardKey.enter): NextFocusIntent(),
      },
      child: FocusTraversalGroup(
        child: Form(
          onChanged: () {
            Form.of(primaryFocus.context).save();
          },
          child: _buildForm(context),
        ),
      ),
    );
  }

  Widget _buildForm(BuildContext context) {
    EventState eventState = Provider.of<EventState>(context, listen: false);
    return Padding(
        padding: const EdgeInsets.all(10),
        child: FormBuilder(
            key: _formKey,
            autovalidateMode: AutovalidateMode.disabled,
            initialValue: {
              'displayName': eventState.getDisplayName(),
              'want': eventState.getWant(),
              'startDate': convertDateFromString(eventState.getStartDate()),
              'endDate': convertDateFromString(eventState.getEndDate()),
            },
            child: Column(
              children: [
                FormBuilderTextField(
                  autovalidateMode: AutovalidateMode.always,
                  name: 'displayName',
                  decoration: InputDecoration(
                    labelText: AppLocalizations.of(context)
                        .translate("eventsCreateEditDisplayNameTxt"),
                  ),
                  onChanged: (String val) {
                    eventState.setDisplayName(val);
                  },
                  validator: FormBuilderValidators.compose([
                    FormBuilderValidators.required(context),
                    FormBuilderValidators.max(context, 70),
                  ]),
                  textInputAction: TextInputAction.next,
                ),
                FormBuilderTextField(
                  autovalidateMode: AutovalidateMode.always,
                  name: 'want',
                  decoration: InputDecoration(
                    labelText: AppLocalizations.of(context)
                        .translate("eventsCreateEditWantTxt"),
                  ),
                  onChanged: (String val) {
                    eventState.setWant(val);
                  },
                  // valueTransformer: (text) => num.tryParse(text),
                  validator: FormBuilderValidators.compose([
                    FormBuilderValidators.required(context),
                  ]),
                  maxLines: 15,
                  textInputAction: TextInputAction.next,
                ),
                FormBuilderDateTimePicker(
                  name: 'startDate',
                  // initialValue: DateTime.now(),
                  inputType: InputType.both,
                  decoration: InputDecoration(
                    labelText: AppLocalizations.of(context)
                        .translate("eventsCreateEditStartDateTxt"),
                  ),
                  initialTime: TimeOfDay(hour: 8, minute: 0),
                  onChanged: (DateTime dt) {
                    var val = getDateIso8610String(dt);
                    eventState.setStartDate(val);
                  },
                  pickerType: PickerType.cupertino,
                  validator: FormBuilderValidators.compose([
                    FormBuilderValidators.required(context),
                  ]),
                ),
                FormBuilderDateTimePicker(
                  name: 'endDate',
                  // initialValue: DateTime.now(),
                  inputType: InputType.both,
                  decoration: InputDecoration(
                    labelText: AppLocalizations.of(context)
                        .translate("eventsCreateEditEndDateTxt"),
                  ),
                  initialTime: TimeOfDay(hour: 8, minute: 0),
                  onChanged: (DateTime dt) {
                    var val = getDateIso8610String(dt);
                    eventState.setEndDate(val);
                  },
                  pickerType: PickerType.cupertino,
                  validator: FormBuilderValidators.compose([
                    FormBuilderValidators.required(context),
                  ]),
                ),
              ],
            )));
  }
}
