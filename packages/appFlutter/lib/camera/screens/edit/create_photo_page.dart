import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:ieatta/app/app_localizations.dart';
import 'package:ieatta/camera/providers/photo_state.dart';
import 'package:ieatta/core/models/auth_user_model.dart';
import 'package:ieatta/core/providers/auth_provider.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/components/photos/image.dart';
import 'package:ieatta/src/utils/toast.dart';
import 'package:provider/provider.dart';

class CreatePhotoPage extends StatefulWidget {
  @override
  _CreatePhotoPageState createState() => _CreatePhotoPageState();
}

class _CreatePhotoPageState extends State<CreatePhotoPage> {
  final _formKey = GlobalKey<FormBuilderState>();
  final _scaffoldKey = GlobalKey<ScaffoldState>();
  bool _isButtonDisabled = false;

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    final authProvider = Provider.of<AuthProvider>(context);
    PhotoState photoState = Provider.of<PhotoState>(context, listen: false);
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
              .translate("photosCreateEditAppBarTitleNewTxt")),
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

                          ParseModelPhotos lastModel =
                              ParseModelPhotos.emptyPhoto(
                                  authUserModel: authUserModel,
                                  filePath: photoState.getImgPath(),
                                  photoType: photoState.getPhotoType(),
                                  relatedId: photoState.getRelatedId());
                          ParseModelPhotos nextModel =
                              ParseModelPhotos.updatePhoto(
                                  model: lastModel,
                                  nextExtraNote: photoState.getExtraNote());

                          try {
                            final firestoreDatabase =
                                Provider.of<FirestoreDatabase>(context,
                                    listen: false);
                            await firestoreDatabase.setNewPhoto(
                                imagePath: photoState.getImgPath(),
                                model: nextModel); // For photo.
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
          children: [
            SizedBox(height: 0),
            _buildImagePanel(context),
            _buildShortcuts()
          ],
        )));
  }

  Widget _buildImagePanel(BuildContext context) {
    PhotoState photoState = Provider.of<PhotoState>(context, listen: false);
    return Container(
      width: MediaQuery.of(context).size.width,
      // height: MediaQuery.of(context).size.height,
      child: buildLocalImageView(photoState.getImgPath()),
    );
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
    PhotoState photoState = Provider.of<PhotoState>(context, listen: false);
    return Padding(
        padding: const EdgeInsets.all(10),
        child: FormBuilder(
            key: _formKey,
            autovalidateMode: AutovalidateMode.disabled,
            initialValue: {
              'extraNote': photoState.getExtraNote(),
            },
            child: Column(
              children: [
                FormBuilderTextField(
                  autovalidateMode: AutovalidateMode.always,
                  name: 'extraNote',
                  decoration: InputDecoration(
                    labelText: AppLocalizations.of(context)
                        .translate("modelCreateEditNotesTxt"),
                  ),
                  onChanged: (String val) {
                    photoState.setExtraNote(val);
                  },
                  maxLines: 15,
                  textInputAction: TextInputAction.next,
                ),
              ],
            )));
  }
}
