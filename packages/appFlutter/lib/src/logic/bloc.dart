import 'package:rxdart/rxdart.dart';

import './value_transformer.dart';

//This is going to be used as Global.
final bloc = Bloc();

class Bloc extends Object with ValueTransformer implements BaseBloc {
  var _restaurantCountValController = BehaviorSubject<int>();

  // The following is values.
  Function(int) get restaurantCountVal => _restaurantCountValController.sink.add;

  Stream<int> get restaurantCountValStream => _restaurantCountValController.stream;

  @override
  dispose() {
    _restaurantCountValController.close();
  }
}

class BaseBloc {
  dispose() {}
}
