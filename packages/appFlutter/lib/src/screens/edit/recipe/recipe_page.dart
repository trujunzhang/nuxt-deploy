import 'package:flutter/services.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:ieatta/app/app_localizations.dart';
import 'package:ieatta/core/models/auth_user_model.dart';
import 'package:ieatta/core/providers/auth_provider.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/src/appModels/models/Recipes.dart';
import 'package:ieatta/src/components/edit_restaurant/common.dart';
import 'package:ieatta/src/providers/recipe_state.dart';
import 'package:ieatta/src/utils/toast.dart';
import 'package:provider/provider.dart';

import 'select_recipe_cover.dart';

class RecipePage extends StatefulWidget {
  final ParseModelRecipes recipe;

  const RecipePage({Key key, this.recipe}) : super(key: key);

  @override
  _RecipePageState createState() => _RecipePageState();
}

class _RecipePageState extends State<RecipePage> {
  final _formKey = GlobalKey<FormBuilderState>();
  final _scaffoldKey = GlobalKey<ScaffoldState>();

  // Recipe
  bool _isButtonDisabled = false;

  @override
  Widget build(BuildContext context) {
    RecipeState recipeState = Provider.of<RecipeState>(context, listen: false);
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
          title: Text(widget.recipe != null
              ? AppLocalizations.of(context)
                  .translate("recipesCreateEditAppBarTitleEditTxt")
              : AppLocalizations.of(context)
                  .translate("recipesCreateEditAppBarTitleNewTxt")),
          actions: <Widget>[
            FlatButton(
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

                          ParseModelRecipes lastModel = widget.recipe != null
                              ? widget.recipe
                              : ParseModelRecipes.emptyRecipe(
                                  authUserModel: authUserModel,
                                  restaurantId: recipeState.restaurantId);

                          ParseModelRecipes nextModel =
                              ParseModelRecipes.updateRecipe(
                            model: lastModel,
                            nextDisplayName: recipeState.getDisplayName(),
                            nextPrice: recipeState.getPrice(),
                          );

                          try {
                            final firestoreDatabase =
                                Provider.of<FirestoreDatabase>(context,
                                    listen: false);
                            await firestoreDatabase.setRecipe(
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

  Widget _buildBody(BuildContext context) {
    List<Widget> list = new List<Widget>();
    list.add(_buildShortcuts());
    if (widget.recipe != null) {
      // list.add(buildCoverImage(_restaurantCoverUrl));
      list.add(buildCoverSectionTitle());
      list.add(SelectRecipeCover(
        recipe: widget.recipe,
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
    RecipeState recipeState = Provider.of<RecipeState>(context, listen: false);
    return Padding(
        padding: const EdgeInsets.all(10),
        child: FormBuilder(
            key: _formKey,
            autovalidateMode: AutovalidateMode.disabled,
            initialValue: {
              'displayName': recipeState.getDisplayName(),
              'price': recipeState.getPrice(),
            },
            child: Column(
              children: [
                FormBuilderTextField(
                  autovalidateMode: AutovalidateMode.always,
                  name: 'displayName',
                  decoration: InputDecoration(
                    labelText: AppLocalizations.of(context)
                        .translate("recipesCreateEditDisplayNameTxt"),
                  ),
                  onChanged: (String val) {
                    recipeState.setDisplayName(val);
                  },
                  validator: FormBuilderValidators.compose([
                    FormBuilderValidators.required(context),
                    FormBuilderValidators.max(context, 70),
                  ]),
                  textInputAction: TextInputAction.next,
                ),
                FormBuilderTextField(
                  autovalidateMode: AutovalidateMode.always,
                  name: 'price',
                  decoration: InputDecoration(
                    labelText: AppLocalizations.of(context)
                        .translate("recipesCreateEditPriceTxt"),
                  ),
                  onChanged: (String val) {
                    recipeState.setPrice(val);
                  },
                  // valueTransformer: (text) => num.tryParse(text),
                  validator: FormBuilderValidators.compose([
                    FormBuilderValidators.required(context),
                    FormBuilderValidators.numeric(context),
                  ]),
                  maxLines: 5,
                  textInputAction: TextInputAction.next,
                ),
              ],
            )));
  }
}
