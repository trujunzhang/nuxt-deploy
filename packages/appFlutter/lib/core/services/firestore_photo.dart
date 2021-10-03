import 'package:ieatta/core/utils/cloudinary_utils.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/appModels/models/photos_sql.dart';
import 'package:ieatta/util/network_utils.dart';

import 'firestore_database.dart';
import 'firestore_path.dart';
import 'firestore_service.dart';

class FirestorePhoto {
  savePhoto({required String imagePath, required ParseModelPhotos model}) async {
    bool isNetworkPresent = await NetworkCheck().check();
    // bool isNetworkPresent = false;

    if (isNetworkPresent) {
      try {
        await FirestorePhoto.savePhotoWithCloudinary(imagePath: imagePath, uniqueId: model.uniqueId);
      } catch (e) {
        // Exception throw from uploading image to cloudinary
        // Save it as Sqlite.
        await SqlPhotos(uniqueId: model.uniqueId, offlinePath: imagePath).insert();
      }
    } else {
      // No network.
      // Save it as Sqlite.
      await SqlPhotos(uniqueId: model.uniqueId, offlinePath: imagePath).insert();
    }
  }

  static savePhotoWithCloudinary({required String imagePath, required String uniqueId}) async {
    // Update the photo model.
    ParseModelPhotos model = await FirestoreDatabase().getPhoto(uniqueId: uniqueId);
    // Upload image to Cloudinary.
    String originalUrl = await CloudinaryUtils.uploadToCloudinary(imagePath: imagePath);
    ParseModelPhotos nextModel = ParseModelPhotos.updateFromCloudinary(model: model, originalUrl: originalUrl);
    // Finally: Save photo to Firebase collection.
    await FirestoreService.instance.setData(
      path: FirestorePath.singlePhoto(nextModel.uniqueId),
      data: nextModel.toMap(),
    );
  }
}
