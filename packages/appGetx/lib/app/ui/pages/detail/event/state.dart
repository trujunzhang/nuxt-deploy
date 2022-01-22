import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/filter/filter_models.dart';

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
      _event.value = FilterModels.instance
          .getSingleEvent(firebaseController.eventsList, eventId);
      waitersInEvent.value = FilterModels.instance
          .getWaitersListForEvent(_waitersDict, detailModel!.waiters);
    });
    firebaseController.onPeopleInEventsChanged((value) {
      peopleInEventsList.value = FilterModels.instance.getPeopleInEventsList(
          firebaseController.peopleInEventsList,
          restaurantId: restaurant!.uniqueId,
          eventId: detailModel!.uniqueId);
    });
    firebaseController.onReviewsChanged((value) {
      reviewsList.value = FilterModels.instance
          .getReviewsList(firebaseController.reviewsList, eventId, reviewType);
    });
    firebaseController.onPhotosChanged((value) {
      _waitersDict.value = FilterModels.instance
          .getWaitersDict(firebaseController.photosList, restaurant!.uniqueId);
      waitersInEvent.value = FilterModels.instance
          .getWaitersListForEvent(_waitersDict, detailModel!.waiters);
    });
  }

  fetchData(String eventId, ReviewType reviewType) {
    // Model
    _event.value = FilterModels.instance
        .getSingleEvent(firebaseController.eventsList, eventId);
    _restaurant.value = FilterModels.instance.getSingleRestaurant(
        firebaseController.restaurantsList, detailModel!.restaurantId);
    // List
    peopleInEventsList.value = FilterModels.instance.getPeopleInEventsList(
        firebaseController.peopleInEventsList,
        restaurantId: restaurant!.uniqueId,
        eventId: detailModel!.uniqueId);
    reviewsList.value = FilterModels.instance
        .getReviewsList(firebaseController.reviewsList, eventId, reviewType);

    // Other
    _waitersDict.value = FilterModels.instance.getWaitersDict(
        firebaseController.photosList, detailModel!.restaurantId);
    waitersInEvent.value = FilterModels.instance
        .getWaitersListForEvent(_waitersDict, detailModel!.waiters);
  }
}
