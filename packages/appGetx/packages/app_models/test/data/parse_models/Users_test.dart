import 'package:app_models/src/parse_models/parse_model_users.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  Map<String, dynamic> json = {
    // Base(3)
    "id": "PqAx0FCrEn",
    "createdAt": "2017-10-09T06:29:09.750+0000",
    "updatedAt": "2017-10-09T06:29:22.542+0000",
    // Common(3)
    "username": "Derek Hele",
    "slug": "Derek_Hele",
    "email": "derek@gmail.com",
    // Property(3)
    "loginType": "email",
    "originalUrl":
        "http://res.cloudinary.com/di3fvexj8/image/upload/v1507530557/politicl/o_dogqeq.jpg",
    "thumbnailUrl":
        "http://res.cloudinary.com/di3fvexj8/image/upload/s--9V2n6rtO--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_dogqeq",
  };

  test('Map model should correctly', () {
    Map<String, dynamic> map = ParseModelUsers.fromJson(json).toJson();

    // Base(3)
    expect(map['id'], 'PqAx0FCrEn');
    expect(map['createdAt'], "2017-10-09T06:29:09.750+0000");
    expect(map['updatedAt'], "2017-10-09T06:29:22.542+0000");
    // Common(3)
    expect(map['username'], 'Derek Hele');
    expect(map['slug'], 'Derek_Hele');
    expect(map['email'], 'derek@gmail.com');
    // Property(3)
    expect(map['loginType'], 'email');
    expect(map['originalUrl'],
        "http://res.cloudinary.com/di3fvexj8/image/upload/v1507530557/politicl/o_dogqeq.jpg");
    expect(map['thumbnailUrl'],
        "http://res.cloudinary.com/di3fvexj8/image/upload/s--9V2n6rtO--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_dogqeq");
  });

  test('Model from json should correctly', () {
    ParseModelUsers model = ParseModelUsers.fromJson(json);

    // Base(3)
    expect(model.uniqueId, 'PqAx0FCrEn');
    expect(model.createdAt, "2017-10-09T06:29:09.750+0000");
    expect(model.updatedAt, "2017-10-09T06:29:22.542+0000");
    // Common(3)
    expect(model.username, 'Derek Hele');
    expect(model.slug, 'Derek_Hele');
    expect(model.email, 'derek@gmail.com');
    // Property(3)
    expect(model.loginType, 'email');
    expect(model.originalUrl,
        "http://res.cloudinary.com/di3fvexj8/image/upload/v1507530557/politicl/o_dogqeq.jpg");
    expect(model.thumbnailUrl,
        "http://res.cloudinary.com/di3fvexj8/image/upload/s--9V2n6rtO--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_dogqeq");
  });
}
