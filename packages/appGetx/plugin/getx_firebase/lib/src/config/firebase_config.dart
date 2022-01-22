import 'package:firebase_core/firebase_core.dart';
import 'package:get/get.dart';
import '../global_controllers/index.dart';

class FirebaseConfig {
  static setup() async {
    await Firebase.initializeApp();
  }

  static initServices() {
    Get.put(AuthController(), permanent: true);
    Get.put(FirebaseController(), permanent: true);
  }
}
