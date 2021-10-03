import 'package:simple_connection_checker/simple_connection_checker.dart';

class NetworkCheck {
  Future<bool> check() async {
    bool isConnected = await SimpleConnectionChecker.isConnectedToInternet();
    return isConnected;
  }

  dynamic checkInternet(Function func) {
    check().then((internet) {
      if (internet) {
        func(true);
      } else {
        func(false);
      }
    });
  }
}
