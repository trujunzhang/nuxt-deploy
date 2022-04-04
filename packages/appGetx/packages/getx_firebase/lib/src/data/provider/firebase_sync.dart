import 'package:app_sql/app_sql.dart';

import 'firestore_photo.dart';

class FirebaseSync {
  static start() async {
    SqlPhotoDao dao = await SqlHelper.getSqlPhotoDao();
    List<SqlPhoto> photos = await dao.findAllPhotos();
    // List<SqlPhoto> photos = await SqlPhotos.readPhotos();
    for (SqlPhoto photo in photos) {
      // online mode
      bool hasException = false;
      // First of all, upload image to cloudinary.
      try {
        await FirestorePhoto.savePhotoWithCloudinary(
            imagePath: photo.offlinePath, uniqueId: photo.id);
      } catch (e) {
        hasException = true;
        // Exception throw from uploading image to cloudinary
        // continue;
      }
      // Finally, delete it in the sqlite.
      if (hasException == false) {
        await dao.deletePhoto(photo);
        // await photo.deletePhoto();
        await photo.deleteLocalImage();
      }
    }
  }
}
