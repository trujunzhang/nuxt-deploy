import 'package:app_models/app_models.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';

class FBPhotosGridViewState {
  FirebaseController firebaseController = Get.find();

  RxList<ParseModelPhotos> photosList = RxList<ParseModelPhotos>([]);

  fetchData(PhotoType photoType, String relatedId) {
    // List
    photosList.value =
        firebaseController.photosList.filterPhotosList(relatedId, photoType);
  }

  listenChanged(PhotoType photoType, String relatedId) {
    firebaseController.onPhotosChanged((value) {
      photosList.value =
          firebaseController.photosList.filterPhotosList(relatedId, photoType);
    });
  }
}
