import 'package:get/get.dart';
import 'package:ieatta/app/controller/firebase.controller.dart';
import 'package:ieatta/app/data/enum/fb_collections.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/filter/filter_models.dart';

class FBPhotosGridViewState {
  FirebaseController firebaseController = Get.find();

  RxList<ParseModelPhotos> photosList = RxList<ParseModelPhotos>([]);

  fetchData(PhotoType photoType, String relatedId) {
    // List
    photosList.value = FilterModels.instance
        .getPhotosList(firebaseController.photosList, relatedId, photoType);
  }
}
