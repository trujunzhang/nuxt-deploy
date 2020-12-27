import 'package:flutter_test/flutter_test.dart';
import 'package:ieatta/core/models/auth_user_model.dart';
import 'package:ieatta/src/appModels/models/PeopleInEvent.dart';

void main() {
  Map<String, dynamic> json = {
    // Base(5)
    "uniqueId": '3245f143-8281-51f6-7c4m-3160e8g136f1_MpNc0BKhXl',
    "flag": '1',
    "createdAt": '2017-10-09T07:07:24.318+0000',
    "updatedAt": '2017-10-23T02:14:02.088+0000',
    "creatorId": 'zis2vkx9G2',
    // Common(1)
    "recipes": [
      '5d30724f-4d13-456c-8a50-358ac3861786',
      '2b5308bb-3fb0-4dc0-88fc-6c37ea2d4795'
    ],
    // point(3)
    "restaurantId": '035ac47c-5781-4da8-af21-35c97a46c101',
    "eventId": '4918e004-9792-40e4-9b3e-2040e7f028d1',
    "userId": 'zis2vkx9G2',
  };

  test('Map model should correctly', () {
    Map<String, dynamic> map = ParseModelPeopleInEvent.fromJson(json).toMap();

    // Base(5)
    expect(map["uniqueId"], '3245f143-8281-51f6-7c4m-3160e8g136f1_MpNc0BKhXl');
    expect(map["creatorId"], 'zis2vkx9G2');
    expect(map["createdAt"], '2017-10-09T07:07:24.318+0000');
    expect(map["updatedAt"], '2017-10-23T02:14:02.088+0000');
    expect(map["flag"], "1");
    // Common(4)
    expect(map["recipes"][0], '5d30724f-4d13-456c-8a50-358ac3861786');
    expect(map["recipes"][1], '2b5308bb-3fb0-4dc0-88fc-6c37ea2d4795');
    // point(1)
    expect(map["restaurantId"], '035ac47c-5781-4da8-af21-35c97a46c101');
    expect(map["eventId"], '4918e004-9792-40e4-9b3e-2040e7f028d1');
    expect(map["userId"], 'zis2vkx9G2');
  });

  test('Model from json should correctly', () {
    ParseModelPeopleInEvent model = ParseModelPeopleInEvent.fromJson(json);

    // Base(5)
    expect(model.uniqueId, '3245f143-8281-51f6-7c4m-3160e8g136f1_MpNc0BKhXl');
    expect(model.creatorId, 'zis2vkx9G2');
    expect(model.createdAt, '2017-10-09T07:07:24.318+0000');
    expect(model.updatedAt, '2017-10-23T02:14:02.088+0000');
    expect(model.flag, "1");
    // Common(4)
    expect(model.recipes[0], '5d30724f-4d13-456c-8a50-358ac3861786');
    expect(model.recipes[1], '2b5308bb-3fb0-4dc0-88fc-6c37ea2d4795');
    // point(1)
    expect(model.restaurantId, '035ac47c-5781-4da8-af21-35c97a46c101');
    expect(model.eventId, '4918e004-9792-40e4-9b3e-2040e7f028d1');
    expect(model.userId, 'zis2vkx9G2');
  });
}
