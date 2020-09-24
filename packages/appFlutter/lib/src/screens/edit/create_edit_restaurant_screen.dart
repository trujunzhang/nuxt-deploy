import 'package:flutter/services.dart';
import 'package:flutter/material.dart';
import 'package:ieatta/app/app_localizations.dart';
import 'package:ieatta/core/models/auth_user_model.dart';
import 'package:ieatta/core/providers/auth_provider.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/core/utils/location_utils.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/logic/bloc.dart';
import 'package:location/location.dart';
import 'package:provider/provider.dart';

class CreateEditRestaurantScreen extends StatefulWidget {
  @override
  _CreateEditRestaurantScreenState createState() =>
      _CreateEditRestaurantScreenState();
}

class _CreateEditRestaurantScreenState
    extends State<CreateEditRestaurantScreen> {
  TextEditingController _displayNameController;
  TextEditingController _extraNoteController;
  final _formKey = GlobalKey<FormState>();
  final _scaffoldKey = GlobalKey<ScaffoldState>();
  ParseModelRestaurants _restaurant;
  bool _isButtonDisabled = false;

  @override
  void initState() {
    super.initState();
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final ParseModelRestaurants _restaurantModel =
        ModalRoute.of(context).settings.arguments;
    if (_restaurantModel != null) {
      _restaurant = _restaurantModel;
    }

    String _displayName = _restaurant != null ? _restaurant.displayName : "";
    String _extraNote = _restaurant != null ? _restaurant.extraNote : "";
    _displayNameController = TextEditingController(text: _displayName);
    _extraNoteController = TextEditingController(text: _extraNote);

    bloc.displayNameVal(_displayName);
    bloc.noteVal(_extraNote);
  }

  @override
  Widget build(BuildContext context) {
    return StreamBuilder(
        stream: bloc.displayNameStream,
        builder: (BuildContext context, AsyncSnapshot displayNameSnapshot) {
          return StreamBuilder(
              stream: bloc.noteStream,
              builder: (BuildContext context, AsyncSnapshot noteSnapshot) {
                String displayNameVal = displayNameSnapshot.data;
                String noteVal = noteSnapshot.data;
                return _buildBody(context, displayNameVal, noteVal);
              });
        });
  }

  Widget _buildBody(
      BuildContext context, String displayNameVal, String noteVal) {
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
        title: Text(_restaurant != null
            ? AppLocalizations.of(context)
                .translate("restaurantsCreateEditAppBarTitleEditTxt")
            : AppLocalizations.of(context)
                .translate("restaurantsCreateEditAppBarTitleNewTxt")),
        actions: <Widget>[
          FlatButton(
              onPressed: _isButtonDisabled
                  ? null
                  : () async {
                      if (_formKey.currentState.validate()) {
                        FocusScope.of(context).unfocus();

                        setState(() {
                          _isButtonDisabled = true;
                        });

                        AuthUserModel authUserModel =
                            await authProvider.getAuthUserModel();

                        LocationData locationData = await getCurrentLocation();
                        ParseModelRestaurants lastModel = _restaurant != null
                            ? _restaurant
                            : ParseModelRestaurants.emptyRestaurant(
                                authUserModel: authUserModel,
                                latitude: locationData.latitude,
                                longitude: locationData.longitude,
                              );

                        ParseModelRestaurants nextModel =
                            ParseModelRestaurants.updateRestaurant(
                          model: lastModel,
                          nextDisplayName: displayNameVal,
                          nextExtraNote: noteVal,
                        );

                        try {
                          final firestoreDatabase =
                              Provider.of<FirestoreDatabase>(context,
                                  listen: false);
                          await firestoreDatabase.setRestaurant(
                              model: nextModel); // For Restaurant.
                        } catch (e) {
                          setState(() {
                            _isButtonDisabled = false;
                          });
                        }

                        // Navigate
                        Navigator.of(context).pop(displayNameVal);
                      }
                    },
              child: Text("Save"))
        ],
      ),
      body: Shortcuts(
        shortcuts: <LogicalKeySet, Intent>{
          // Pressing enter on the field will now move to the next field.
          LogicalKeySet(LogicalKeyboardKey.enter): NextFocusIntent(),
        },
        child: FocusTraversalGroup(
          child: Form(
            autovalidate: true,
            onChanged: () {
              Form.of(primaryFocus.context).save();
            },
            child: _buildForm(context),
          ),
        ),
      ),
    );
  }

  @override
  void dispose() {
    _displayNameController.dispose();
    _extraNoteController.dispose();
    super.dispose();
  }

  Widget _buildForm(BuildContext context) {
    return Form(
      key: _formKey,
      child: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: Column(
            mainAxisSize: MainAxisSize.max,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: <Widget>[
              TextFormField(
                controller: _displayNameController,
                onChanged: (String txt) {
                  bloc.displayNameVal(txt);
                },
                style: Theme.of(context).textTheme.bodyText2,
                validator: (value) => value.isEmpty
                    ? AppLocalizations.of(context)
                        .translate("restaurantsCreateEditTaskNameValidatorMsg")
                    : null,
                decoration: InputDecoration(
                  enabledBorder: OutlineInputBorder(
                      borderSide: BorderSide(
                          color: Theme.of(context).iconTheme.color, width: 2)),
                  labelText: AppLocalizations.of(context)
                      .translate("restaurantsCreateEditTaskNameTxt"),
                ),
              ),
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 16),
                child: TextFormField(
                  onChanged: (String txt) {
                    bloc.noteVal(txt);
                  },
                  controller: _extraNoteController,
                  style: Theme.of(context).textTheme.bodyText2,
                  maxLines: 15,
                  decoration: InputDecoration(
                    enabledBorder: OutlineInputBorder(
                        borderSide: BorderSide(
                            color: Theme.of(context).iconTheme.color,
                            width: 2)),
                    labelText: AppLocalizations.of(context)
                        .translate("modelCreateEditNotesTxt"),
                    alignLabelWithHint: true,
                    contentPadding: new EdgeInsets.symmetric(
                        vertical: 10.0, horizontal: 10.0),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
