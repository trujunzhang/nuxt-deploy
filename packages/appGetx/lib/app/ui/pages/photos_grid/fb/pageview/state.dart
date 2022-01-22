import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/filter/filter_models.dart';
import 'package:ieatta/app/filter/filter_photo.dart';

class FBPhotosPageViewState {
  FirebaseController firebaseController = Get.find();

  Rx<bool> showInfoPanel = Rx<bool>(false);
  Rx<int> selectedIndex = Rx<int>(0);

  final RxList<ParseModelPhotos> _photos = RxList<ParseModelPhotos>([]);

  RxMap<String, ParseModelPhotos> photosDict =
      RxMap<String, ParseModelPhotos>({});

  int get photosCount => photosDict.keys.length;

  toggleFg() {
    showInfoPanel.toggle();
  }

  ParseModelPhotos? selectedPhoto() {
    String photoId = List.from(photosDict.keys)[selectedIndex.value];
    return photosDict[photoId];
  }

  firstInitPhotoDict() {
    // Generate the dict.
    photosDict.value = FilterPhoto.getPhotosDict(_photos);
  }

  fetchData(PhotoType photoType, String relatedId) {
    // List
    ParseModelEvents? event;
    Map<String, ParseModelPhotos> waitersDict = {};
    switch (photoType) {
      case PhotoType.None:
      case PhotoType.Restaurant:
      case PhotoType.Recipe:
      case PhotoType.User:
        break;
      case PhotoType.Waiter:
        {
          event = FilterModels.instance
              .getSingleEvent(firebaseController.eventsList, relatedId);

          waitersDict = FilterModels.instance.getWaitersDict(
              firebaseController.photosList, event!.restaurantId);
          break;
        }
    }
    _photos.value = FilterPhoto.getPhotos(firebaseController.photosList,
        photoType: photoType,
        relatedId: relatedId,
        event: event,
        waitersDict: waitersDict);
  }

  listenChanged(PhotoType photoType, String relatedId) {
    firebaseController.onPhotosChanged((value) {
      fetchData(photoType, relatedId);
      // Update photos dict.
      photosDict.value = FilterPhoto.refreshPhotosDict(photosDict, _photos);
    });
  }
}
