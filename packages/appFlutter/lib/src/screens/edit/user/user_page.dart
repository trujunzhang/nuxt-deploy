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
import 'package:ieatta/src/utils/toast.dart';
import 'package:provider/provider.dart';
import 'package:ieatta/camera/screens/types.dart';

class UserPage extends StatefulWidget {
  final ParseModelUsers loggedUser;

  const UserPage({Key key, @required this.loggedUser}) : super(key: key);

  @override
  _UserPageState createState() => _UserPageState();
}

class _UserPageState extends State<UserPage> {
  TextEditingController _firstNameController;
  TextEditingController __lastNameController;
  final _formKey = GlobalKey<FormState>();
  final _scaffoldKey = GlobalKey<ScaffoldState>();
  bool _isButtonDisabled = false;
  String userWithOriginalUrl;

  getFirstName() {
    return widget.loggedUser.username.split(' ')[0];
  }

  getLastName() {
    var s = widget.loggedUser.username.split(' ');
    return s.length == 2 ? s[1] : '';
  }

  @override
  void initState() {
    super.initState();
    _firstNameController = TextEditingController(text: getFirstName());
    __lastNameController = TextEditingController(text: getLastName());
    bloc.firstNameVal(getFirstName());
    bloc.lastNameVal(getLastName());

    setState(() {
      userWithOriginalUrl = widget.loggedUser.originalUrl;
    });
  }

  @override
  Widget build(BuildContext context) {
    return StreamBuilder(
        stream: bloc.firstNameStream,
        builder: (BuildContext context, AsyncSnapshot displayNameSnapshot) {
          return StreamBuilder(
              stream: bloc.lastNameStream,
              builder: (BuildContext context, AsyncSnapshot noteSnapshot) {
                String firstNameVal = displayNameSnapshot.data;
                String lastNameVal = noteSnapshot.data;
                return _buildBody(context, firstNameVal, lastNameVal);
              });
        });
  }

  Widget _buildBody(
      BuildContext context, String firstNameVal, String lastNameVal) {
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
                        if (_formKey.currentState.validate()) {
                          FocusScope.of(context).unfocus();

                          setState(() {
                            _isButtonDisabled = true;
                          });
                          var displayName =
                              [firstNameVal, lastNameVal].join(' ');
                          ParseModelUsers lastModel = widget.loggedUser;

                          ParseModelUsers nextModel =
                              ParseModelUsers.updateUserProfile(
                            model: lastModel,
                            username: displayName,
                          );

                          try {
                            final firestoreDatabase =
                                Provider.of<FirestoreDatabase>(context,
                                    listen: false);
                            await firestoreDatabase
                                .updateUser(nextModel); // For Restaurant.

                            // Update Firebase's user's name.
                            FirebaseUser user =
                                await FirebaseAuth.instance.currentUser();
                            UserUpdateInfo userUpdateInfo =
                                new UserUpdateInfo();
                            userUpdateInfo.displayName = displayName;
                            userUpdateInfo.photoUrl = user.photoUrl;
                            await user.updateProfile(userUpdateInfo);
                          } catch (e) {
                            setState(() {
                              _isButtonDisabled = false;
                            });
                          }

                          ToastUtils.showToast(AppLocalizations.of(context)
                              .translate("toastForSaveSuccess"));
                          // Navigate
                          Navigator.of(context).pop(firstNameVal);
                        }
                      },
                child: Text(AppLocalizations.of(context)
                    .translate("editModelAppBarRightSaveTitle")))
          ],
        ),
        body: _buildList());
  }

  Widget _buildList() {
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
                    Navigator.of(context).pushNamed(Routes.app_camera,
                        arguments: CameraScreenObject(
                            photoType: PhotoType.User,
                            relatedId: widget.loggedUser.id));
                    // final result = await Navigator.of(context).pushNamed(
                    //     Routes.app_camera,
                    //     arguments: CAMERA_EVENT.USER);
                    // if (result != null) {
                    //   setState(() {
                    //     userWithOriginalUrl = result;
                    //   });
                    // }
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
        ),
      ],
    );
  }

  @override
  void dispose() {
    _firstNameController.dispose();
    __lastNameController.dispose();
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
                controller: _firstNameController,
                onChanged: (String txt) {
                  bloc.firstNameVal(txt);
                },
                style: Theme.of(context).textTheme.bodyText2,
                validator: (value) => value.isEmpty
                    ? AppLocalizations.of(context)
                        .translate("usersCreateEditFirstNameValidatorMsg")
                    : null,
                decoration: InputDecoration(
                  enabledBorder: OutlineInputBorder(
                      borderSide: BorderSide(
                          color: Theme.of(context).iconTheme.color, width: 2)),
                  labelText: AppLocalizations.of(context)
                      .translate("usersCreateEditFirstNameTxt"),
                ),
              ),
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 16),
                child: TextFormField(
                  controller: __lastNameController,
                  onChanged: (String txt) {
                    bloc.lastNameVal(txt);
                  },
                  style: Theme.of(context).textTheme.bodyText2,
                  validator: (value) => value.isEmpty
                      ? AppLocalizations.of(context)
                          .translate("usersCreateEditLastNameValidatorMsg")
                      : null,
                  decoration: InputDecoration(
                    enabledBorder: OutlineInputBorder(
                        borderSide: BorderSide(
                            color: Theme.of(context).iconTheme.color,
                            width: 2)),
                    labelText: AppLocalizations.of(context)
                        .translate("usersCreateEditLastNameTxt"),
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
