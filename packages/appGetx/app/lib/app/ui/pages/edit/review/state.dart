import 'package:app_models/app_models.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';

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
    _review.value = firebaseController.reviewsList.singleReview(reviewId);
    // Variables
    rate.value = editModel!.rate!;
    lastRate = editModel!.rate!;
    body.value = editModel!.body!;
  }
}
