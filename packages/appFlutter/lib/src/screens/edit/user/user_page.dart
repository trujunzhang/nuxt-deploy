import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:ieatta/camera/screens/navigate_helper.dart';
import 'package:ieatta/common/langs/l10n.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/src/appModels/models/Users.dart';
import 'package:ieatta/src/components/users/image.dart';
import 'package:ieatta/src/providers/user_state.dart';
import 'package:ieatta/util/app_navigator.dart';
import 'package:ieatta/util/toast_utils.dart';
import 'package:provider/provider.dart';

class UserPage extends StatefulWidget {
  final ParseModelUsers loggedUser;

  const UserPage({Key? key, required this.loggedUser}) : super(key: key);

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
              AppNavigator.goBack(context);
            },
          ),
          title: Text(S.of(context).usersCreateEditAppBarTitleEditTxt),
          actions: <Widget>[
            TextButton(
                onPressed: _isButtonDisabled
                    ? null
                    : () async {

                        if (_formKey.currentState!.saveAndValidate()) {
                          FocusScope.of(context).unfocus();

                          setState(() {
                            _isButtonDisabled = true;
                          });

                          String displayName = userState.getUsername();

                          ParseModelUsers nextModel = ParseModelUsers.updateUserProfile(
                            model: widget.loggedUser,
                            username: displayName,
                          );

                          try {
                            final firestoreDatabase = Provider.of<FirestoreDatabase>(context, listen: false);
                            await firestoreDatabase.updateUser(nextModel); // For Restaurant.

                            // Update Firebase's user's name.
                            User? user = FirebaseAuth.instance.currentUser;

                            // TODO: DJZHANG(firebase)
                            await user!.updateDisplayName(displayName);
                            // await user!.updateProfile(
                            //     displayName: displayName,
                            //     photoURL: user.photoURL);
                          } catch (e) {
                            setState(() {
                              _isButtonDisabled = false;
                            });
                          }

                          Toast.show(S.of(context).toastForSaveSuccess);
                          // Navigate
                          AppNavigator.goBack(context);
                        }

                      },
                child: Text(S.of(context).editModelAppBarRightSaveTitle))
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
              TextButton(
                  child: const Text('(Add/Edit)', style: TextStyle(color: Color(0xff0073bb))),
                  onPressed: () async {
                    final Object? result = await PhotoNavigatorHelper.pop(context,
                        photoType: PhotoType.User, relatedId: widget.loggedUser.id);
                    if (result != null) {
                      userState.setCoverUrl(result as String);
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
                // TODO:[2021-8-18] djzhang
                // Form.of(primaryFocus.context).save();
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
                    labelText: S.of(context).usersCreateEditFirstNameTxt,
                  ),
                  onChanged: (String? val) {
                    userState.setFirstName(val!);
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
                    labelText: S.of(context).usersCreateEditLastNameTxt,
                  ),
                  onChanged: (String? val) {
                    userState.setSecondName(val!);
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
