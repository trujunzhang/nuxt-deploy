import 'package:flutter_test/flutter_test.dart';
import 'package:ieatta/src/appModels/models/Recipes.dart';

void main() {
  Map<String, dynamic> json = {
    // Base(5)
    "uniqueId": '5d30724f-4d13-456c-8a50-358ac3861786',
    "creatorId": 'tiBfFJkC71',
    "createdAt": '2017-10-09T06:41:41.958+0000',
    "updatedAt": '2017-11-06T02:56:45.356+0000',
    "flag": '1',
    // Common(4)
    "displayName": 'Chicken Tacos',
    "price": "20",
    "originalUrl":
        "http://res.cloudinary.com/di3fvexj8/image/upload/v1507529311/politicl/o_ugrhuw.jpg",
    "thumbnailUrl":
        "http://res.cloudinary.com/di3fvexj8/image/upload/s--TqIOho75--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_ugrhuw",
    // for review(2)
    'rate': 12,
    'reviewCount': 3,
    // point(1)
    "restaurantId": '035ac47c-5781-4da8-af21-35c97a46c101',
  };

  test('Map model should correctly', () {
    Map<String, dynamic> map = ParseModelRecipes.fromJson(json).toMap();

    // Base(5)
    expect(map["uniqueId"], '5d30724f-4d13-456c-8a50-358ac3861786');
    expect(map["creatorId"], 'tiBfFJkC71');
    expect(map["createdAt"], '2017-10-09T06:41:41.958+0000');
    expect(map["updatedAt"], '2017-11-06T02:56:45.356+0000');
    expect(map["flag"], "1");
    // Common(4)
    expect(map["displayName"], 'Chicken Tacos');
    expect(map["price"], "20");
    expect(map['originalUrl'],
        'http://res.cloudinary.com/di3fvexj8/image/upload/v1507529311/politicl/o_ugrhuw.jpg');
    expect(map['thumbnailUrl'],
        "http://res.cloudinary.com/di3fvexj8/image/upload/s--TqIOho75--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_ugrhuw");
    // for review(2)
    expect(map['rate'], 12);
    expect(map['reviewCount'], 3);
    // point(1)
    expect(map["restaurantId"], '035ac47c-5781-4da8-af21-35c97a46c101');
  });

  test('Model from json should correctly', () {
    ParseModelRecipes model = ParseModelRecipes.fromJson(json);

    // Base(5)
    expect(model.uniqueId, '5d30724f-4d13-456c-8a50-358ac3861786');
    expect(model.creatorId, 'tiBfFJkC71');
    expect(model.createdAt, '2017-10-09T06:41:41.958+0000');
    expect(model.updatedAt, '2017-11-06T02:56:45.356+0000');
    expect(model.flag, "1");
    // Common(4)
    expect(model.displayName, 'Chicken Tacos');
    expect(model.price, "20");
    expect(model.originalUrl,
        'http://res.cloudinary.com/di3fvexj8/image/upload/v1507529311/politicl/o_ugrhuw.jpg');
    expect(model.thumbnailUrl,
        "http://res.cloudinary.com/di3fvexj8/image/upload/s--TqIOho75--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_ugrhuw");
    // for review(2)
    expect(model.rate, 12);
    expect(model.reviewCount, 3);
    // point(1)
    expect(model.restaurantId, '035ac47c-5781-4da8-af21-35c97a46c101');
  });
}
