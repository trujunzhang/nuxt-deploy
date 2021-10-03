import 'package:get/get.dart';
import 'package:ieatta/app/data/model/index.dart';

class SqlPhotosGridViewState {
  Rx<bool> isLoading = Rx<bool>(true);
  RxList<SqlPhotos> photosList = RxList<SqlPhotos>([]);
}
