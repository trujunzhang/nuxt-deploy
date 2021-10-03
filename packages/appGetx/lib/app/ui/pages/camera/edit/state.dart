import 'package:get/get.dart';
import 'package:ieatta/app/controller/firebase.controller.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/filter/filter_models.dart';

class EditPhotoState {
  FirebaseController firebaseController = Get.find();

  Rx<String> extraNote = Rx<String>('');
  Rx<bool> isButtonDisabled = Rx<bool>(false);

  Rx<ParseModelPhotos?> _photo = Rx<ParseModelPhotos?>(null);

  ParseModelPhotos? get editModel => _photo.value;

  initEdit(String photoId) {
    _photo.value = FilterModels.instance
        .getSinglePhoto(firebaseController.photosList, photoId);
    extraNote.value = editModel!.extraNote!;
  }
}
