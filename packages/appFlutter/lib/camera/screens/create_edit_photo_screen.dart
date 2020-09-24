import 'package:flutter/material.dart';
import 'package:ieatta/app/app_localizations.dart';
import 'package:ieatta/core/models/auth_user_model.dart';
import 'package:ieatta/core/providers/auth_provider.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/core/utils/location_utils.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/components/photos/image.dart';
import 'package:ieatta/src/logic/bloc.dart';
import 'package:location/location.dart';
import 'package:provider/provider.dart';

class CreateEditPhotoScreen extends StatefulWidget {
  @override
  _CreateEditPhotoScreenState createState() => _CreateEditPhotoScreenState();
}

class _CreateEditPhotoScreenState extends State<CreateEditPhotoScreen> {
  TextEditingController _extraNoteController;
  final _formKey = GlobalKey<FormState>();
  final _scaffoldKey = GlobalKey<ScaffoldState>();
  ParseModelPhotos _photo;
  String imagePath;

  @override
  void initState() {
    super.initState();
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final String _imagePath = ModalRoute.of(context).settings.arguments;

    String _extraNote = _photo != null ? _photo.extraNote : "";
    _extraNoteController = TextEditingController(text: _extraNote);
    bloc.noteVal(_extraNote);
    setState(() {
      imagePath = _imagePath;
    });
  }

  @override
  Widget build(BuildContext context) {
    return StreamBuilder(
        stream: bloc.noteStream,
        builder: (BuildContext context, AsyncSnapshot noteSnapshot) {
          String noteVal = noteSnapshot.data;
          return _buildBody(context, noteVal);
        });
  }

  Widget _buildBody(BuildContext context, String noteVal) {
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
        title: Text(_photo != null
            ? AppLocalizations.of(context)
                .translate("photosCreateEditAppBarTitleEditTxt")
            : AppLocalizations.of(context)
                .translate("photosCreateEditAppBarTitleNewTxt")),
        actions: <Widget>[
          FlatButton(
              onPressed: () async {
                if (_formKey.currentState.validate()) {
                  FocusScope.of(context).unfocus();

                  AuthUserModel authUserModel =
                      await authProvider.getAuthUserModel();

                  LocationData locationData = await getCurrentLocation();
                  ParseModelPhotos lastModel = ParseModelPhotos.emptyPhoto(
                    authUserModel: authUserModel,
                    filePath: imagePath,
                    locationData: locationData,
                  );
                  ParseModelPhotos nextModel = ParseModelPhotos.updatePhoto(
                    model: lastModel,
                    nextExtraNote:
                        (noteVal != null && noteVal.length > 0) ? noteVal : "",
                  );

                  final firestoreDatabase =
                      Provider.of<FirestoreDatabase>(context, listen: false);
                  await firestoreDatabase.setPhoto(
                      imagePath: imagePath, model: nextModel); // For photo.

                  // Navigate
                  Navigator.of(context).pop();
                }
              },
              child: Text("Save"))
        ],
      ),
      body: Center(
        child: _buildForm(context),
      ),
    );
  }

  @override
  void dispose() {
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
              Container(
                height: MediaQuery.of(context).size.height - 100,
                child: buildLocalImageView(imagePath),
              ),
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 16),
                child: TextFormField(
                  onChanged: (String txt) {
                    bloc.noteVal(txt);
                  },
                  controller: _extraNoteController,
                  style: Theme.of(context).textTheme.bodyText2,
                  maxLines: 5,
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
