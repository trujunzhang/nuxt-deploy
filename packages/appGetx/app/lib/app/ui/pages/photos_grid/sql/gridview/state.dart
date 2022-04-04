import 'package:app_sql/app_sql.dart';
import 'package:get/get.dart';

class SqlPhotosGridViewState {
  Rx<bool> isLoading = Rx<bool>(true);
  RxList<SqlPhoto> photosList = RxList<SqlPhoto>([]);
}
