import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/filter/filter_models.dart';

class FBPhotosGridViewState {
  FirebaseController firebaseController = Get.find();

  RxList<ParseModelPhotos> photosList = RxList<ParseModelPhotos>([]);

  fetchData(PhotoType photoType, String relatedId) {
    // List
    photosList.value = FilterModels.instance
        .getPhotosList(firebaseController.photosList, relatedId, photoType);
  }

  listenChanged(PhotoType photoType, String relatedId) {
    firebaseController.onPhotosChanged((value) {
      photosList.value = FilterModels.instance
          .getPhotosList(firebaseController.photosList, relatedId, photoType);
    });
  }
}
