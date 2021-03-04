import 'package:flutter/material.dart';
import 'package:ieatta/app/app_localizations.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:ieatta/core/services/firestore_database.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/components/navigation/arrow_helper.dart';
import 'package:ieatta/src/logic/photos_results.dart';
import 'package:ieatta/src/screens/photos_grid/fb/photos_body.dart';
import 'package:provider/provider.dart';

class UserPhotos extends StatefulWidget {
  UserPhotos({Key key}) : super(key: key);

  @override
  UserPhotosState createState() => UserPhotosState();
}

class UserPhotosState extends State<UserPhotos> {
  String _userId;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final String _userIdArg = ModalRoute.of(context).settings.arguments;
    if (_userIdArg != null) {
      _userId = _userIdArg;
    }
    // print('_userId: $_userId');
  }

  @override
  Widget build(BuildContext context) {
    final firestoreDatabase =
        Provider.of<FirestoreDatabase>(context, listen: false);
    return Scaffold(
        appBar: AppBar(
          leading: IconButton(
            icon: Icon(getArrowBackIcon()),
            onPressed: () {
              Navigator.of(context).pop();
            },
          ),
          title: Text(AppLocalizations.of(context)
              .translate("userMenuPhotosAppBarTitle")),
        ),
        body: StreamBuilder(
            stream: firestoreDatabase.userMenuStream(
              userId: _userId,
              path: FBCollections.Photos,
            ),
            builder: (BuildContext context, AsyncSnapshot fbSnapshot) {
              if (fbSnapshot.hasError) {}
              if (!fbSnapshot.hasData) {
                return Center(
                  child: CircularProgressIndicator(),
                );
              }

              List<ParseModelPhotos> photos =
                  parsePhotos(fbSnapshot.data.documents);
              if (photos.length == 0) {
                return Center(
                  child: Text('No Data'),
                );
              }
              return PhotosBody(
                photoList: photos,
              );
            }));
  }
}
