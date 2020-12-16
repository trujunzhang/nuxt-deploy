import 'package:rxdart/rxdart.dart';
import './value_transformer.dart';

//This is going to be used as Global.
final bloc = Bloc();

class Bloc extends Object with ValueTransformer implements BaseBloc {
  var _gpsTrackController = BehaviorSubject<bool>();
  var _themeController = BehaviorSubject<String>();
  var _searchValController = BehaviorSubject<String>();
  var _restaurantCountValController = BehaviorSubject<int>();

  var _thumbnailController = BehaviorSubject<String>();
  var _displayNameController = BehaviorSubject<String>();
  var _noteController = BehaviorSubject<String>();
  var _rateController = BehaviorSubject<double>();

  // For user
  var _firstNameController = BehaviorSubject<String>();
  var _lastNameController = BehaviorSubject<String>();

  // The following is values.
  Function(bool) get gpsTrackStatus => _gpsTrackController.sink.add;
  Function(String) get sinkColorName => _themeController.sink.add;
  Function(String) get feedSearchVal => _searchValController.sink.add;
  Function(int) get restaurantCountVal => _restaurantCountValController.sink.add;

  Function(String) get thumbnailVal => _thumbnailController.sink.add;
  Function(String) get displayNameVal => _displayNameController.sink.add;
  Function(String) get noteVal => _noteController.sink.add;
  Function(double) get rateVal => _rateController.sink.add;

  // For user
  Function(String) get firstNameVal => _firstNameController.sink.add;
  Function(String) get lastNameVal => _lastNameController.sink.add;

  // The following is Stream.
  Stream<bool> get gpsTrackStatusStream => _gpsTrackController.stream;
  Stream<String> get recieveColorName => _themeController.stream;
  Stream<String> get recieveSearchVal => _searchValController.stream;
  Stream<int> get restaurantCountValStream => _restaurantCountValController.stream;

  Stream<String> get thumbnailStream=> _thumbnailController.stream;
  Stream<String> get displayNameStream=> _displayNameController.stream;
  Stream<String> get noteStream=> _noteController.stream;
  Stream<double> get rateStream=> _rateController.stream;

  // For user
  Stream<String> get firstNameStream=> _firstNameController.stream;
  Stream<String> get lastNameStream=> _lastNameController.stream;

  @override
  dispose() {
    _gpsTrackController?.close();
    _themeController?.close();
    _searchValController?.close();
    _restaurantCountValController?.close();

    _thumbnailController?.close();
    _displayNameController?.close();
    _noteController?.close();

    // For user
    _firstNameController?.close();
    _lastNameController?.close();
  }
}

class BaseBloc {
  dispose() {}
}
