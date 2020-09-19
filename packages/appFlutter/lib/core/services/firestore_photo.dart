import 'package:cloudinary_client/cloudinary_client.dart';
import 'package:cloudinary_client/models/CloudinaryResponse.dart';
import 'package:flutter/cupertino.dart';
import 'package:ieatta/core/utils/network_utils.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/appModels/models/photos_sql.dart';
import 'package:path/path.dart' as path;
import 'firestore_database.dart';
import 'firestore_path.dart';
import 'firestore_service.dart';

const String Cloudinary_Api_Key = "886131238629743";
const String Cloudinary_Api_Secret = "X1baj0k868ACgxU-a6Wobw8OsY8";
const String Cloudinary_Cloud_Name = "di3fvexj8";

class FirestorePhoto {
  savePhoto(
      {@required String imagePath, @required ParseModelPhotos model}) async {
//    bool isNetworkPresent = await NetworkCheck().check();
    bool isNetworkPresent = false;

    if (isNetworkPresent) {
      await FirestorePhoto.savePhotoWithCloudinary(
          imagePath: imagePath, uniqueId: model.uniqueId);
    } else {
      // No network.
      // Save it as Sqlite.
      await SqlPhotos(uniqueId: model.uniqueId, offlinePath: imagePath)
          .insert();
    }
  }

  static savePhotoWithCloudinary(
      {@required String imagePath, @required String uniqueId}) async {
    final _firestoreService = FirestoreService.instance;
    // Upload image to Cloudinary.
    String originalUrl = await uploadToCloudinary(imagePath: imagePath);
    // Update the photo model.
    ParseModelPhotos model =
        await FirestoreDatabase(uid: '').getPhoto(uniqueId: uniqueId);
    ParseModelPhotos nextModel = ParseModelPhotos.updateFromCloudinary(
        model: model, originalUrl: originalUrl);
    // Finally: Save photo to Firebase collection.
    await _firestoreService.setData(
      path: FirestorePath.photo(nextModel.uniqueId),
      data: nextModel.toMap(),
    );
  }

  // Upload photo file to cloudinary server.
  // https://pub.dev/packages/cloudinary_client
  // https://github.com/r4jiv007/CloudinaryClient
  static Future<String> uploadToCloudinary({@required String imagePath}) async {
    String fileName = path.basename(imagePath);

    CloudinaryClient client = new CloudinaryClient(
        Cloudinary_Api_Key, Cloudinary_Api_Secret, Cloudinary_Cloud_Name);
    CloudinaryResponse response = await client.uploadImage(imagePath, // Path
        filename: fileName);
//    print(response);
    return response.url;
  }
}
