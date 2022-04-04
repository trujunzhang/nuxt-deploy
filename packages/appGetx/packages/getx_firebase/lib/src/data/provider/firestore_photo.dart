import 'package:app_sql/app_sql.dart';

import 'package:app_models/app_models.dart';
import '../../data/repository/index.dart';
import '../../helpers/firestore_path.dart';
import 'package:my_plugin/my_plugin.dart';

class FirestorePhoto {
  savePhoto(
      {required String imagePath, required ParseModelPhotos model}) async {
    bool isNetworkPresent = await NetworkCheck().check();
    // bool isNetworkPresent = false;

    if (isNetworkPresent) {
      try {
        await FirestorePhoto.savePhotoWithCloudinary(
            imagePath: imagePath, uniqueId: model.uniqueId!);
      } catch (e) {
        // Exception throw from uploading image to cloudinary
        // Save it as Sqlite.
        // await SqlPhotos(uniqueId: model.uniqueId, offlinePath: imagePath)
        // .insert();
        await _saveAsSqlPhoto(uniqueId: model.uniqueId!, imagePath: imagePath);
      }
    } else {
      // No network.
      // Save it as Sqlite.
      // await SqlPhotos(uniqueId: model.uniqueId, offlinePath: imagePath)
      // .insert();
      await _saveAsSqlPhoto(uniqueId: model.uniqueId!, imagePath: imagePath);
    }
  }

  _saveAsSqlPhoto({required String uniqueId, required String imagePath}) async {
    SqlPhoto photo = SqlPhoto(uniqueId, imagePath);
    SqlPhotoDao dao = await SqlHelper.getSqlPhotoDao();
    dao.insertPhoto(photo);
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
      path: FirestorePath.singlePhoto(nextModel.uniqueId!),
      data: nextModel.toJson(),
    );
  }
}
