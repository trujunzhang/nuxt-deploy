import 'package:get/get.dart';
import 'package:ieatta/app/controller/firebase.controller.dart';
import 'package:ieatta/app/data/enum/fb_collections.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/filter/filter_models.dart';

class DetailEventState {
  FirebaseController firebaseController = Get.find();
  Rx<ParseModelEvents?> _event = Rx<ParseModelEvents?>(null);
  Rx<ParseModelRestaurants?> _restaurant = Rx<ParseModelRestaurants?>(null);

  RxMap<String, ParseModelPhotos> waitersDict =
      RxMap<String, ParseModelPhotos>({});
  RxList<ParseModelPhotos> waitersInEventList = RxList<ParseModelPhotos>([]);

  RxList<ParseModelPeopleInEvent> peopleInEventsList =
      RxList<ParseModelPeopleInEvent>([]);
  RxList<ParseModelReviews> reviewsList = RxList<ParseModelReviews>([]);

  ParseModelEvents? get detailModel => _event.value;

  List<String> get waiters => detailModel!.waiters;

  ParseModelRestaurants? get restaurant => _restaurant.value;

  listenChanged(String eventId, ReviewType reviewType) {
    firebaseController.onEventsChanged((value) {
      _event.value = FilterModels.instance
          .getSingleEvent(firebaseController.eventsList, eventId);
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
      waitersDict.value = FilterModels.instance
          .getWaitersDict(firebaseController.photosList, restaurant!.uniqueId);
      waitersInEventList.value = FilterModels.instance
          .getWaitersListForEvent(waitersDict, detailModel!);
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

    waitersDict.value = FilterModels.instance.getWaitersDict(
        firebaseController.photosList, detailModel!.restaurantId);
    waitersInEventList.value =
        FilterModels.instance.getWaitersListForEvent(waitersDict, detailModel!);
  }
}
