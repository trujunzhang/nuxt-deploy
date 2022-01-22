import 'package:app_sql/app_sql.dart';

import '../../data/model/index.dart';
import '../../data/repository/index.dart';
import '../../helpers/firestore_path.dart';
import '../../utils/cloudinary_utils.dart';
import 'package:my_plugin/my_plugin.dart';

class FirestorePhoto {
  savePhoto(
      {required String imagePath, required ParseModelPhotos model}) async {
    bool isNetworkPresent = await NetworkCheck().check();
    // bool isNetworkPresent = false;

    if (isNetworkPresent) {
      try {
        await FirestorePhoto.savePhotoWithCloudinary(
            imagePath: imagePath, uniqueId: model.uniqueId);
      } catch (e) {
        // Exception throw from uploading image to cloudinary
        // Save it as Sqlite.
        await SqlPhotos(uniqueId: model.uniqueId, offlinePath: imagePath)
            .insert();
      }
    } else {
      // No network.
      // Save it as Sqlite.
      await SqlPhotos(uniqueId: model.uniqueId, offlinePath: imagePath)
          .insert();
    }
  }

  static savePhotoWithCloudinary(
      {required String imagePath, required String uniqueId}) async {
    final PhotoRepository photoRepository = PhotoRepository.getInstance();
    // Update the photo model.
    ParseModelPhotos model = await photoRepository.getId(uniqueId);
    // Upload image to Cloudinary.
    String originalUrl =
        await CloudinaryUtils.uploadToCloudinary(imagePath: imagePath);
    ParseModelPhotos nextModel = ParseModelPhotos.updateFromCloudinary(
        model: model, originalUrl: originalUrl);
    // Finally: Save photo to Firebase collection.
    await photoRepository.setData(
      path: FirestorePath.singlePhoto(nextModel.uniqueId),
      data: nextModel.toMap(),
    );
  }
}
