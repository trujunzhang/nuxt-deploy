import 'package:ieatta/src/appModels/models/photos_sql.dart';
import 'package:ieatta/util/network_utils.dart';

import 'firestore_photo.dart';

class FirebaseSync {
  start() async {
    List<SqlPhotos> photos = await SqlPhotos.readPhotos();
    photos.forEach((SqlPhotos photo) async {
      bool isNetworkPresent = await NetworkCheck().check();
      // online
      if (isNetworkPresent) {
        bool hasException = false;
        // First of all, upload image to cloudinary.
        try {
          await FirestorePhoto.savePhotoWithCloudinary(imagePath: photo.offlinePath, uniqueId: photo.uniqueId);
        } catch (e) {
          hasException = true;
          // Exception throw from uploading image to cloudinary
          // continue;
        }
        // Finally, delete it in the sqlite.
        if (hasException == false) {
          await photo.deletePhoto();
          await photo.deleteLocalImage();
        }
      }
    });
  }
}
