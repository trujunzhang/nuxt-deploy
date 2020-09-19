// Import the test package and Counter class
import 'package:ieatta/src/appConstants/Types.dart';
import 'package:ieatta/src/appConstants/appConstants.dart';
import 'package:ieatta/src/vendors/flutterEnumsToString/enum_to_string.dart';
import 'package:test_api/test_api.dart';

void main() {
  test('Types should return correctly', () {
//    var value = Types_Modal.PARSE_CONFIGURE.toString();
    var key = Types_modal.PARSE_RESTAURANTS;
    var modelObjectType = AppConstants.realmObjectTypes[key];
    expect(modelObjectType, 'Restaurants');
  });
}
