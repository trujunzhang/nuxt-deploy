import 'package:app_models/app_models.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';

class DetailEventState {
  FirebaseController firebaseController = Get.find();
  final Rx<ParseModelEvents?> _event = Rx<ParseModelEvents?>(null);
  final Rx<ParseModelRestaurants?> _restaurant =
      Rx<ParseModelRestaurants?>(null);

  final RxMap<String, ParseModelPhotos> _waitersDict =
      RxMap<String, ParseModelPhotos>({});
  RxList<ParseModelPhotos> waitersInEvent = RxList<ParseModelPhotos>([]);

  RxList<ParseModelPeopleInEvent> peopleInEventsList =
      RxList<ParseModelPeopleInEvent>([]);
  RxList<ParseModelReviews> reviewsList = RxList<ParseModelReviews>([]);

  ParseModelEvents? get detailModel => _event.value;

  ParseModelRestaurants? get restaurant => _restaurant.value;

  listenChanged(String eventId, ReviewType reviewType) {
    firebaseController.onEventsChanged((value) {
      _event.value = firebaseController.eventsList.singleEvent(eventId);
      waitersInEvent.value = _waitersDict.filterForEvent(detailModel!.waiters!);
    });
    firebaseController.onPeopleInEventsChanged((value) {
      peopleInEventsList.value = firebaseController.peopleInEventsList
          .filterPeopleInEventsList(
              restaurantId: restaurant!.uniqueId!,
              eventId: detailModel!.uniqueId!);
    });
    firebaseController.onReviewsChanged((value) {
      reviewsList.value =
          firebaseController.reviewsList.filterReviewsList(eventId, reviewType);
    });
    firebaseController.onPhotosChanged((value) {
      _waitersDict.value =
          firebaseController.photosList.getWaitersDict(restaurant!.uniqueId!);
      waitersInEvent.value = _waitersDict.filterForEvent(detailModel!.waiters!);
    });
  }

  fetchData(String eventId, ReviewType reviewType) {
    // Model
    _event.value = firebaseController.eventsList.singleEvent(eventId);
    _restaurant.value = firebaseController.restaurantsList
        .singleRestaurant(detailModel!.restaurantId);
    // List
    peopleInEventsList.value = firebaseController.peopleInEventsList
        .filterPeopleInEventsList(
            restaurantId: restaurant!.uniqueId!,
            eventId: detailModel!.uniqueId!);
    reviewsList.value =
        firebaseController.reviewsList.filterReviewsList(eventId, reviewType);

    // Other
    _waitersDict.value = firebaseController.photosList
        .getWaitersDict(detailModel!.restaurantId!);
    waitersInEvent.value = _waitersDict.filterForEvent(detailModel!.waiters!);
  }
}
