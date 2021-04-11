import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:ieatta/app/app_localizations.dart';
import 'package:ieatta/core/models/auth_user_model.dart';
import 'package:ieatta/core/providers/auth_provider.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/core/utils/location_utils.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/components/edit_restaurant/common.dart';
import 'package:ieatta/src/providers/restaurant_state.dart';
import 'package:ieatta/src/utils/toast.dart';
import 'package:location/location.dart';
import 'package:provider/provider.dart';

import 'select_restaurant_cover.dart';

class RestaurantPage extends StatefulWidget {
  final ParseModelRestaurants restaurant;

  const RestaurantPage({Key key, this.restaurant}) : super(key: key);

  @override
  _RestaurantPageState createState() => _RestaurantPageState();
}

class _RestaurantPageState extends State<RestaurantPage> {
  final _formKey = GlobalKey<FormBuilderState>();
  final _scaffoldKey = GlobalKey<ScaffoldState>();

  // Event
  bool _isButtonDisabled = false;

  @override
  Widget build(BuildContext context) {
    RestaurantState restaurantState =
        Provider.of<RestaurantState>(context, listen: false);
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
          title: Text(widget.restaurant != null
              ? AppLocalizations.of(context)
                  .translate("restaurantsCreateEditAppBarTitleEditTxt")
              : AppLocalizations.of(context)
                  .translate("restaurantsCreateEditAppBarTitleNewTxt")),
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

                          ParseModelRestaurants lastModel = widget.restaurant;
                          if (widget.restaurant == null) {
                            // New restaurant.
                            LocationData locationData =
                                await getCurrentLocation();

                            lastModel = ParseModelRestaurants.emptyRestaurant(
                              authUserModel: authUserModel,
                              latitude: locationData.latitude,
                              longitude: locationData.longitude,
                            );
                          }

                          ParseModelRestaurants nextModel =
                              ParseModelRestaurants.updateRestaurant(
                            model: lastModel,
                            nextDisplayName: restaurantState.getDisplayName(),
                            nextExtraNote: restaurantState.getExtraNote(),
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
        body: _buildBody(context));
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

  Widget _buildBody(BuildContext context) {
    List<Widget> list = [];
    list.add(_buildShortcuts());
    if (widget.restaurant != null) {
      // list.add(buildCoverImage(_restaurantCoverUrl));
      list.add(buildCoverSectionTitle());
      list.add(SelectRestaurantCover(
        restaurant: widget.restaurant,
      ));
      list.add(SizedBox(
        height: 20,
      ));
    }

    return SingleChildScrollView(
        child: Column(
      mainAxisAlignment: MainAxisAlignment.start,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: list,
    ));
  }

  Widget _buildForm(BuildContext context) {
    RestaurantState restaurantState =
        Provider.of<RestaurantState>(context, listen: false);
    return Padding(
        padding: const EdgeInsets.all(10),
        child: FormBuilder(
            key: _formKey,
            autovalidateMode: AutovalidateMode.disabled,
            initialValue: {
              'displayName': restaurantState.getDisplayName(),
              'note': restaurantState.getExtraNote()
            },
            child: Column(
              children: [
                FormBuilderTextField(
                  autovalidateMode: AutovalidateMode.always,
                  name: 'displayName',
                  decoration: InputDecoration(
                    labelText: AppLocalizations.of(context)
                        .translate("restaurantsCreateEditDisplayNameTxt"),
                  ),
                  onChanged: (String val) {
                    restaurantState.setDisplayName(val);
                  },
                  // valueTransformer: (text) => num.tryParse(text),
                  validator: FormBuilderValidators.compose([
                    FormBuilderValidators.required(context),
                    FormBuilderValidators.max(context, 70),
                  ]),
                  textInputAction: TextInputAction.next,
                ),
                FormBuilderTextField(
                  autovalidateMode: AutovalidateMode.always,
                  name: 'note',
                  decoration: InputDecoration(
                    labelText: AppLocalizations.of(context)
                        .translate("modelCreateEditNotesTxt"),
                  ),
                  onChanged: (String val) {
                    restaurantState.setExtraNote(val);
                  },
                  // valueTransformer: (text) => num.tryParse(text),
                  validator: FormBuilderValidators.compose([]),
                  maxLines: 15,
                  textInputAction: TextInputAction.next,
                ),
              ],
            )));
  }
}
