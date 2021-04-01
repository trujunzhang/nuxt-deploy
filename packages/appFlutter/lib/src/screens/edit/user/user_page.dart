import 'package:flutter/services.dart';
import 'package:flutter/material.dart';
import 'package:ieatta/app/app_localizations.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:ieatta/app/routes.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/src/appModels/models/Users.dart';
import 'package:ieatta/src/components/users/image.dart';
import 'package:ieatta/src/logic/bloc.dart';
import 'package:ieatta/src/providers/user_state.dart';
import 'package:ieatta/src/utils/toast.dart';
import 'package:provider/provider.dart';
import 'package:ieatta/camera/screens/types.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';

class UserPage extends StatefulWidget {
  final ParseModelUsers loggedUser;

  const UserPage({Key key, @required this.loggedUser}) : super(key: key);

  @override
  _UserPageState createState() => _UserPageState();
}

class _UserPageState extends State<UserPage> {
  final _formKey = GlobalKey<FormBuilderState>();
  final _scaffoldKey = GlobalKey<ScaffoldState>();
  bool _isButtonDisabled = false;

  @override
  Widget build(BuildContext context) {
    UserState userState = Provider.of<UserState>(context, listen: false);
    return Scaffold(
        key: _scaffoldKey,
        appBar: AppBar(
          leading: IconButton(
            icon: Icon(Icons.cancel),
            onPressed: () {
              Navigator.of(context).pop();
            },
          ),
          title: Text(AppLocalizations.of(context)
              .translate("usersCreateEditAppBarTitleEditTxt")),
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

                          String displayName = userState.getUsername();

                          ParseModelUsers nextModel =
                              ParseModelUsers.updateUserProfile(
                            model: widget.loggedUser,
                            username: displayName,
                          );

                          try {
                            final firestoreDatabase =
                                Provider.of<FirestoreDatabase>(context,
                                    listen: false);
                            await firestoreDatabase
                                .updateUser(nextModel); // For Restaurant.

                            // Update Firebase's user's name.
                            User user = await FirebaseAuth.instance.currentUser;

                            await user.updateProfile(
                                displayName:displayName, photoURL:user.photoURL);
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
        body: _buildList(context));
  }

  Widget _buildList(BuildContext context) {
    UserState userState = Provider.of<UserState>(context, listen: true);
    String userWithOriginalUrl = userState.getCoverUrl();
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: EdgeInsets.only(left: 8),
          child: Row(
            children: [
              Text(
                'Your Profile Photo',
                style: TextStyle(fontSize: 14),
              ),
              FlatButton(
                  child: const Text('(Add/Edit)'),
                  textColor: Color(0xff0073bb),
                  onPressed: () async {
                    final result = await Navigator.of(context).pushNamed(
                        Routes.app_camera,
                        arguments: CameraScreenObject(
                            photoType: PhotoType.User,
                            relatedId: widget.loggedUser.id));
                    if (result != null) {
                      userState.setCoverUrl(result);
                    }
                  })
            ],
          ),
        ),
        Container(
          height: 120,
          width: 120,
          padding: EdgeInsets.only(left: 16),
          child: buildParseModelUsersImageWithOriginalUrl(userWithOriginalUrl),
        ),
        Shortcuts(
          shortcuts: <LogicalKeySet, Intent>{
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
        ),
      ],
    );
  }

  Widget _buildForm(BuildContext context) {
    UserState userState = Provider.of<UserState>(context, listen: false);
    return Padding(
        padding: const EdgeInsets.all(10),
        child: FormBuilder(
            key: _formKey,
            autovalidateMode: AutovalidateMode.disabled,
            initialValue: {
              'firstName': userState.getFirstName(),
              'secondName': userState.getSecondName(),
            },
            child: Column(
              children: [
                FormBuilderTextField(
                  autovalidateMode: AutovalidateMode.always,
                  name: 'firstName',
                  decoration: InputDecoration(
                    labelText: AppLocalizations.of(context)
                        .translate("usersCreateEditFirstNameTxt"),
                  ),
                  onChanged: (String val) {
                    userState.setFirstName(val);
                  },
                  validator: FormBuilderValidators.compose([
                    FormBuilderValidators.required(context),
                    FormBuilderValidators.max(context, 15),
                  ]),
                  textInputAction: TextInputAction.next,
                ),
                FormBuilderTextField(
                  autovalidateMode: AutovalidateMode.always,
                  name: 'secondName',
                  decoration: InputDecoration(
                    labelText: AppLocalizations.of(context)
                        .translate("usersCreateEditLastNameTxt"),
                  ),
                  onChanged: (String val) {
                    userState.setSecondName(val);
                  },
                  // valueTransformer: (text) => num.tryParse(text),
                  validator: FormBuilderValidators.compose([
                    FormBuilderValidators.required(context),
                    FormBuilderValidators.max(context, 15),
                  ]),
                  textInputAction: TextInputAction.next,
                ),
              ],
            )));
  }
}
