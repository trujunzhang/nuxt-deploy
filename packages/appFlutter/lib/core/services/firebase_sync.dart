import 'package:ieatta/core/utils/network_utils.dart';
import 'package:ieatta/src/appModels/models/photos_sql.dart';

import 'firestore_photo.dart';

class FirebaseSync {
  start() async {
    List<SqlPhotos> photos = await SqlPhotos.readPhotos();
    for (int i; i < photos.length; i++) {
      SqlPhotos photo = photos[i];
      bool isNetworkPresent = await NetworkCheck().check();
      if (isNetworkPresent) {
        // online
        // First of all, upload image to cloudinary.
        await FirestorePhoto.savePhotoWithCloudinary(
            imagePath: photo.offlinePath, uniqueId: photo.uniqueId);
        // Finally, delete it in the sqlite.
        await photo.deletePhoto();
        await photo.deleteLocalImage();
      }
    }
  }
}
