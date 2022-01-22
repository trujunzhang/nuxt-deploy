import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/filter/filter_models.dart';

class EditReviewState {
  FirebaseController firebaseController = Get.find();

  Rx<double> rate = Rx<double>(0.0);
  double lastRate = 0.0;
  Rx<String> body = Rx<String>('');
  Rx<bool> isButtonDisabled = Rx<bool>(false);

  final Rx<ParseModelReviews?> _review = Rx<ParseModelReviews?>(null);

  ParseModelReviews? get editModel => _review.value;

  initEditModel(String reviewId) {
    // Model
    _review.value = FilterModels.instance
        .getSingleReview(firebaseController.reviewsList, reviewId);
    // Variables
    rate.value = editModel!.rate;
    lastRate = editModel!.rate;
    body.value = editModel!.body;
  }
}
