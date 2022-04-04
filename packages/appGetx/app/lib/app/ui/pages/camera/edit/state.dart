import 'package:app_models/app_models.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';

class EditPhotoState {
  FirebaseController firebaseController = Get.find();

  Rx<String> extraNote = Rx<String>('');
  Rx<bool> isButtonDisabled = Rx<bool>(false);

  final Rx<ParseModelPhotos?> _photo = Rx<ParseModelPhotos?>(null);

  ParseModelPhotos? get editModel => _photo.value;

  initEdit(String photoId) {
    _photo.value = firebaseController.photosList.singlePhoto(photoId);
    extraNote.value = editModel!.extraNote!;
  }
}
