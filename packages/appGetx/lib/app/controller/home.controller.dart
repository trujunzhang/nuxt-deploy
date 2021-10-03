import 'package:get/get.dart';
import 'package:ieatta/app/data/model/Users.dart';
import 'package:ieatta/app/data/repository/user.repository.dart';

class HomeController extends GetxController {
  final UserRepository repository = UserRepository.getInstance();

  HomeController();

// list of all story will be saved here
  RxList<ParseModelUsers> users = RxList<ParseModelUsers>([]);

  @override
  void onInit() {
    //stream coming from firebase
    users.bindStream(repository.getStreamAll());

    super.onInit();
  }
}
