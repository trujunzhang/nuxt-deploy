import 'package:flutter_test/flutter_test.dart';
import 'package:getx_firebase/src/data/model/index.dart';

void main() {
  Map<String, dynamic> json = {
    // Base(5)
    "uniqueId": '4918e004-9792-40e4-9b3e-2040e7f028d1',
    "creatorId": 'tiBfFJkC71',
    "createdAt": '2017-10-09T06:41:41.958+0000',
    "updatedAt": '2017-11-06T02:56:45.356+0000',
    "flag": '1',
    // Common(5+1)
    "displayName": 'Outdoor Skating and Holiday Festivities',
    'slug': "slug",
    "want": "Downtown Burbank Announces 2015 Return.",
    "start": '2017-06-28T10:30:57.566+0000',
    "end": '2017-06-30T11:30:57.566+0000',
    "waiters": [
      '56789012-b3a9-4302-9c23-c59b876da99e'
    ],
    // for review(2)
    'rate': 12,
    'reviewCount': 3,
    // point(1)
    "restaurantId": '035ac47c-5781-4da8-af21-35c97a46c101',
  };

  test('Map model should correctly', () {
    Map<String, dynamic> map = ParseModelEvents.fromJson(json).toMap();

    // Base(5)
    expect(map["uniqueId"], '4918e004-9792-40e4-9b3e-2040e7f028d1');
    expect(map["creatorId"], 'tiBfFJkC71');
    expect(map["createdAt"], '2017-10-09T06:41:41.958+0000');
    expect(map["updatedAt"], '2017-11-06T02:56:45.356+0000');
    expect(map["flag"], "1");
    // Common(5+1)
    expect(map["displayName"], 'Outdoor Skating and Holiday Festivities');
    expect(map["slug"], 'slug');
    expect(map["want"], "Downtown Burbank Announces 2015 Return.");
    expect(map["start"], '2017-06-28T10:30:57.566+0000');
    expect(map["end"], '2017-06-30T11:30:57.566+0000');
    expect(map["waiters"][0], '56789012-b3a9-4302-9c23-c59b876da99e');
    // for review(2)
    expect(map['rate'], 12);
    expect(map['reviewCount'], 3);
    // point(1)
    expect(map["restaurantId"], '035ac47c-5781-4da8-af21-35c97a46c101');
  });

  test('Model from json should correctly', () {
    ParseModelEvents model = ParseModelEvents.fromJson(json);

    // Base(5)
    expect(model.uniqueId, '4918e004-9792-40e4-9b3e-2040e7f028d1');
    expect(model.creatorId, 'tiBfFJkC71');
    expect(model.createdAt, '2017-10-09T06:41:41.958+0000');
    expect(model.updatedAt, '2017-11-06T02:56:45.356+0000');
    expect(model.flag, "1");
    // Common(5+1)
    expect(model.displayName, 'Outdoor Skating and Holiday Festivities');
    expect(model.slug, 'slug');
    expect(model.want, "Downtown Burbank Announces 2015 Return.");
    expect(model.start, '2017-06-28T10:30:57.566+0000');
    expect(model.end, '2017-06-30T11:30:57.566+0000');
    expect(model.waiters[0], '56789012-b3a9-4302-9c23-c59b876da99e');
    // for review(2)
    expect(model.rate, 12);
    expect(model.reviewCount, 3);
    // point(1)
    expect(model.restaurantId, '035ac47c-5781-4da8-af21-35c97a46c101');
  });
}
