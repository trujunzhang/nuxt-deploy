import 'package:app_models/src/enum/index.dart';
import 'package:app_models/src/model/auth_user_model.dart';
import 'package:app_models/src/parse_models/parse_model_photos.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  Map<String, dynamic> json = {
    // Base(5)
    "uniqueId": "00f31aaa-05f9-4dc4-aa02-fb4997834917",
    "creatorId": "",
    "createdAt": "2017-10-10T06:06:40.578+0000",
    "updatedAt": "2017-10-10T06:06:40.578+0000",
    "flag": "1",
    // Common(3)
    "thumbnailUrl":
        "http://res.cloudinary.com/di3fvexj8/image/upload/s--zE0P3i_b--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/b2eccd155ad6639c29e51f9b0d2549f6_image_bjvqag",
    "originalUrl":
        "http://res.cloudinary.com/di3fvexj8/image/upload/v1507615599/politicl/b2eccd155ad6639c29e51f9b0d2549f6_image_bjvqag.jpg",
    // "url": "",
    // point(4)
    "photoType": "restaurant",
    "restaurantId": "f1c0aff9-728b-4041-9560-c09578ce7b01",
    "recipeId": "",
    "userId": "",
    // offline(1)
    "offlinePath": "",
    // extra(1)
    "extraNote": "",
    // user(2)
    "username": 'Nkechi Jim',
    "avatarUrl":
        'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530628/politicl/o_luk1is.jpg'
  };

  test('Map model should correctly', () {
    Map<String, dynamic> map = ParseModelPhotos.fromJson(json).toJson();

    // Base(5)
    expect(map["uniqueId"], "00f31aaa-05f9-4dc4-aa02-fb4997834917");
    expect(map["creatorId"], "");
    expect(map["createdAt"], "2017-10-10T06:06:40.578+0000");
    expect(map["updatedAt"], "2017-10-10T06:06:40.578+0000");
    expect(map["flag"], "1");
    // Common(2)
    expect(map["thumbnailUrl"],
        "http://res.cloudinary.com/di3fvexj8/image/upload/s--zE0P3i_b--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/b2eccd155ad6639c29e51f9b0d2549f6_image_bjvqag");
    expect(map["originalUrl"],
        "http://res.cloudinary.com/di3fvexj8/image/upload/v1507615599/politicl/b2eccd155ad6639c29e51f9b0d2549f6_image_bjvqag.jpg");
    // point(4)
    expect(map["photoType"], "restaurant");
    expect(map["restaurantId"], "f1c0aff9-728b-4041-9560-c09578ce7b01");
    expect(map["recipeId"], "");
    expect(map["userId"], "");
    // offline(1)
    expect(map["offlinePath"], "");
    // extra(1)
    expect(map["extraNote"], "");
    // user(2)
    expect(map["username"], 'Nkechi Jim');
    expect(map["avatarUrl"],
        'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530628/politicl/o_luk1is.jpg');
  });

  test('Model from json should correctly', () {
    ParseModelPhotos model = ParseModelPhotos.fromJson(json);

    // Base(5)
    expect(model.uniqueId, "00f31aaa-05f9-4dc4-aa02-fb4997834917");
    expect(model.creatorId, "");
    expect(model.createdAt, "2017-10-10T06:06:40.578+0000");
    expect(model.updatedAt, "2017-10-10T06:06:40.578+0000");
    expect(model.flag, "1");
    // Common(2)
    expect(model.thumbnailUrl,
        "http://res.cloudinary.com/di3fvexj8/image/upload/s--zE0P3i_b--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/b2eccd155ad6639c29e51f9b0d2549f6_image_bjvqag");
    expect(model.originalUrl,
        "http://res.cloudinary.com/di3fvexj8/image/upload/v1507615599/politicl/b2eccd155ad6639c29e51f9b0d2549f6_image_bjvqag.jpg");
    // point(4)
    expect(model.photoType, "restaurant");
    expect(model.restaurantId, "f1c0aff9-728b-4041-9560-c09578ce7b01");
    expect(model.recipeId, "");
    expect(model.userId, "");
    // offline(1)
    expect(model.offlinePath, "");
    // extra(1)
    expect(model.extraNote, "");
    // user(2)
    expect(model.username, 'Nkechi Jim');
    expect(model.avatarUrl,
        'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530628/politicl/o_luk1is.jpg');
  });

  test('Updated model should correctly', () {
    ParseModelPhotos model = ParseModelPhotos.updatePhoto(
        model: ParseModelPhotos.fromJson(json), nextExtraNote: 'nextExtraNote');

    // Base(5)
    expect(model.uniqueId, "00f31aaa-05f9-4dc4-aa02-fb4997834917");
    expect(model.creatorId, "");
    expect(model.createdAt, "2017-10-10T06:06:40.578+0000");
    expect(model.updatedAt != "2017-10-10T06:06:40.578+0000", true);
    expect(model.flag, "1");
    // Common(2)
    expect(model.thumbnailUrl,
        "http://res.cloudinary.com/di3fvexj8/image/upload/s--zE0P3i_b--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/b2eccd155ad6639c29e51f9b0d2549f6_image_bjvqag");
    expect(model.originalUrl,
        "http://res.cloudinary.com/di3fvexj8/image/upload/v1507615599/politicl/b2eccd155ad6639c29e51f9b0d2549f6_image_bjvqag.jpg");
    // point(4)
    expect(model.photoType, "restaurant");
    expect(model.restaurantId, "f1c0aff9-728b-4041-9560-c09578ce7b01");
    expect(model.recipeId, "");
    expect(model.userId, "");
    // offline(1)
    expect(model.offlinePath, "");
    // extra(1)
    expect(model.extraNote, "nextExtraNote"); // Updated
    // user(2)
    expect(model.username, 'Nkechi Jim');
    expect(model.avatarUrl,
        'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530628/politicl/o_luk1is.jpg');
  });

  test('Updated model From Cloudinary should correctly', () {
    String originalUrl = 'From Cloudinary';
    ParseModelPhotos model = ParseModelPhotos.updateFromCloudinary(
        model: ParseModelPhotos.fromJson(json), originalUrl: originalUrl);

    // Base(5)
    expect(model.uniqueId, "00f31aaa-05f9-4dc4-aa02-fb4997834917");
    expect(model.creatorId, "");
    expect(model.createdAt, "2017-10-10T06:06:40.578+0000");
    expect(model.updatedAt, "2017-10-10T06:06:40.578+0000");
    expect(model.flag, "1");
    // Common(2)
    expect(model.thumbnailUrl,
        "http://res.cloudinary.com/di3fvexj8/image/upload/s--zE0P3i_b--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/b2eccd155ad6639c29e51f9b0d2549f6_image_bjvqag");
    expect(
      model.originalUrl,
      originalUrl,
    ); // Updated
    // point(4)
    expect(model.photoType, "restaurant");
    expect(model.restaurantId, "f1c0aff9-728b-4041-9560-c09578ce7b01");
    expect(model.recipeId, "");
    expect(model.userId, "");
    // offline(1)
    expect(model.offlinePath, "");
    // extra(1)
    expect(model.extraNote, "");
    // user(2)
    expect(model.username, 'Nkechi Jim');
    expect(model.avatarUrl,
        'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530628/politicl/o_luk1is.jpg');
  });

  test('Empty different photoType should correctly', () {
    AuthUserModel authUserModel = AuthUserModel.mockedUser();

    // ===========================================================
    // Review: <For restaurant>
    // ===========================================================
    ParseModelPhotos model = ParseModelPhotos.create(
        filePath: '',
        authUserModel: authUserModel,
        photoType: PhotoType.Restaurant,
        relatedId: 'restaurantId');
    // point(4)
    expect(model.photoType, "restaurant");
    expect(model.restaurantId, 'restaurantId');
    expect(model.recipeId, "");
    expect(model.userId, "");

    // ===========================================================
    // Review: <For recipe>
    // ===========================================================
    model = ParseModelPhotos.create(
        filePath: '',
        authUserModel: authUserModel,
        photoType: PhotoType.Recipe,
        relatedId: 'recipeId');
    // point(4)
    expect(model.photoType, "recipe");
    expect(model.restaurantId, '');
    expect(model.recipeId, "recipeId");
    expect(model.userId, "");

    // ===========================================================
    // Review: <For user>
    // ===========================================================
    model = ParseModelPhotos.create(
        filePath: '',
        authUserModel: authUserModel,
        photoType: PhotoType.User,
        relatedId: 'userId');
    // point(4)
    expect(model.photoType, "user");
    expect(model.restaurantId, '');
    expect(model.recipeId, "");
    expect(model.userId, "userId");

    // ===========================================================
    // Review: <For waiter>
    // ===========================================================
    model = ParseModelPhotos.create(
        filePath: '',
        authUserModel: authUserModel,
        photoType: PhotoType.Waiter,
        relatedId: 'restaurantId');
    // point(4)
    expect(model.photoType, "waiter");
    expect(model.restaurantId, 'restaurantId');
    expect(model.recipeId, "");
    expect(model.userId, "");
  });

  test('Empty photo should correctly', () {
    AuthUserModel authUserModel = AuthUserModel.mockedUser();
    String filePath = 'localFile';
    ParseModelPhotos model = ParseModelPhotos.create(
      authUserModel: authUserModel,
      photoType: PhotoType.Restaurant,
      relatedId: 'restaurantId',
      filePath: filePath,
    );

    // Base(5)
    expect(model.uniqueId!.length > 0, true);
    expect(model.creatorId, authUserModel.uid); // updated
    expect(model.createdAt != "", true);
    expect(model.updatedAt != '', true);
    expect(model.flag, '1');
    // Common(2)
    expect(model.thumbnailUrl, '');
    expect(model.originalUrl, '');
    // point(4)
    expect(model.photoType, "restaurant");
    expect(model.restaurantId, "restaurantId");
    expect(model.recipeId, "");
    expect(model.userId, "");
    // offline(1)
    expect(model.offlinePath, filePath); // updated
    // extra(1)
    expect(model.extraNote, "");
    // user(2)
    expect(model.username, authUserModel.username); // updated
    expect(model.avatarUrl, authUserModel.avatarUrl); // updated
  });
}
