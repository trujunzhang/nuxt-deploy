import 'package:flutter_test/flutter_test.dart';
import 'package:getx_firebase/src/data/enum/index.dart';
import 'package:getx_firebase/src/data/model/index.dart';

void main() {
  Map<String, dynamic> json = {
    // Base(5)
    "flag": "1",
    "uniqueId": "c463206e-b39b-470c-b9c5-9d56642fd8e6",
    "creatorId": "W4Iqc2hYE5",
    "createdAt": "2017-11-06T03:22:28.364+0000",
    "updatedAt": "2017-11-06T03:24:11.265+0000",
    // Common(2)
    "rate": 4.5,
    "body":
        "Not a salad type of girl, but this place makes me act like one hehe. Love the salad bar, one of my favorite items here is the raisin nut broccoli mix. Adds just the right amount of sweetness to my salad. The balsamic dressing is yum as well. Get your money's worth by piling as much salad you can on that plate! \n\nChicken noodle soup is the only soup that's good here imo. Add a bit of black pepper and it tastes exactly like my mom's chicken soup. The broth is never too salty or bland unlike the other soups. Not a fan of the chicken inside the soup though, because its dry. The pastas and macaroni are pretty bad. Unless you enjoy bland overcooked/mushy pasta.\n\nI like to end my meal with the mini muffins. They're always refilled constantly therefore hot and delicious. Even the gluten free ones. The blueberry ones seems to be everybody's favorite. The top crust on these muffins are beyond yummy and addicting.\n\nBest time to eat is before 6pm on weekends. The place tends to get super crowded real quick.",
    // user(2)
    "username": "trujunzhang",
    "avatarUrl": "http://avatar.com",
    // point(4)
    "reviewType": "restaurant",
    "restaurantId": "035ac47c-5781-4da8-af21-35c97a46c101",
    "eventId": "",
    "recipeId": ""
  };

  test('Map model should correctly', () {
    Map<String, dynamic> map = ParseModelReviews.fromJson(json).toMap();

    // Base(5)
    expect(map["flag"], "1");
    expect(map["uniqueId"], "c463206e-b39b-470c-b9c5-9d56642fd8e6");
    expect(map["creatorId"], "W4Iqc2hYE5");
    expect(map["createdAt"], "2017-11-06T03:22:28.364+0000");
    expect(map["updatedAt"], "2017-11-06T03:24:11.265+0000");
    // Common(2)
    expect(map["rate"], 4.5);
    expect(map["body"],
        "Not a salad type of girl, but this place makes me act like one hehe. Love the salad bar, one of my favorite items here is the raisin nut broccoli mix. Adds just the right amount of sweetness to my salad. The balsamic dressing is yum as well. Get your money's worth by piling as much salad you can on that plate! \n\nChicken noodle soup is the only soup that's good here imo. Add a bit of black pepper and it tastes exactly like my mom's chicken soup. The broth is never too salty or bland unlike the other soups. Not a fan of the chicken inside the soup though, because its dry. The pastas and macaroni are pretty bad. Unless you enjoy bland overcooked/mushy pasta.\n\nI like to end my meal with the mini muffins. They're always refilled constantly therefore hot and delicious. Even the gluten free ones. The blueberry ones seems to be everybody's favorite. The top crust on these muffins are beyond yummy and addicting.\n\nBest time to eat is before 6pm on weekends. The place tends to get super crowded real quick.");
    // user(2)
    expect(map["username"], "trujunzhang");
    expect(map["avatarUrl"], "http://avatar.com");
    // point(4)
    expect(map["reviewType"], "restaurant");
    expect(map["restaurantId"], "035ac47c-5781-4da8-af21-35c97a46c101");
    expect(map["eventId"], "");
    expect(map["recipeId"], "");
  });

  test('Model from json should correctly', () {
    ParseModelReviews model = ParseModelReviews.fromJson(json);

    // Base(5)
    expect(model.flag, "1");
    expect(model.uniqueId, "c463206e-b39b-470c-b9c5-9d56642fd8e6");
    expect(model.creatorId, "W4Iqc2hYE5");
    expect(model.createdAt, "2017-11-06T03:22:28.364+0000");
    expect(model.updatedAt, "2017-11-06T03:24:11.265+0000");
    // Common(2)
    expect(model.rate, 4.5);
    expect(model.body,
        "Not a salad type of girl, but this place makes me act like one hehe. Love the salad bar, one of my favorite items here is the raisin nut broccoli mix. Adds just the right amount of sweetness to my salad. The balsamic dressing is yum as well. Get your money's worth by piling as much salad you can on that plate! \n\nChicken noodle soup is the only soup that's good here imo. Add a bit of black pepper and it tastes exactly like my mom's chicken soup. The broth is never too salty or bland unlike the other soups. Not a fan of the chicken inside the soup though, because its dry. The pastas and macaroni are pretty bad. Unless you enjoy bland overcooked/mushy pasta.\n\nI like to end my meal with the mini muffins. They're always refilled constantly therefore hot and delicious. Even the gluten free ones. The blueberry ones seems to be everybody's favorite. The top crust on these muffins are beyond yummy and addicting.\n\nBest time to eat is before 6pm on weekends. The place tends to get super crowded real quick.");
    // user(2)
    expect(model.username, "trujunzhang");
    expect(model.avatarUrl, "http://avatar.com");
    // point(4)
    expect(model.reviewType, "restaurant");
    expect(model.restaurantId, "035ac47c-5781-4da8-af21-35c97a46c101");
    expect(model.eventId, "");
    expect(model.recipeId, "");
  });

  test('Empty different reviewType should correctly', () {
    AuthUserModel authUserModel = AuthUserModel.mockedUser();

    // ===========================================================
    // Review: <For restaurant>
    // ===========================================================
    ParseModelReviews model = ParseModelReviews.emptyReview(
        authUserModel: authUserModel,
        reviewType: ReviewType.Restaurant,
        relatedId: 'restaurantId');
    // point(4)
    expect(model.reviewType, "restaurant");
    expect(model.restaurantId, 'restaurantId');
    expect(model.eventId, "");
    expect(model.recipeId, "");

    // ===========================================================
    // Review: <For event>
    // ===========================================================
    model = ParseModelReviews.emptyReview(
        authUserModel: authUserModel,
        reviewType: ReviewType.Event,
        relatedId: 'eventId');
    // point(4)
    expect(model.reviewType, "event");
    expect(model.restaurantId, '');
    expect(model.eventId, 'eventId');
    expect(model.recipeId, "");

    // ===========================================================
    // Review: <For recipe>
    // ===========================================================
    model = ParseModelReviews.emptyReview(
        authUserModel: authUserModel,
        reviewType: ReviewType.Recipe,
        relatedId: 'recipeId');
    // point(4)
    expect(model.reviewType, "recipe");
    expect(model.restaurantId, '');
    expect(model.eventId, '');
    expect(model.recipeId, "recipeId");
  });

  test('Empty review should correctly', () {
    AuthUserModel authUserModel = AuthUserModel.mockedUser();
    ParseModelReviews model = ParseModelReviews.emptyReview(
        authUserModel: authUserModel,
        reviewType: ReviewType.Restaurant,
        relatedId: 'restaurantId');

    // Base(5)
    expect(model.flag, "1");
    expect(model.uniqueId.length > 0, true);
    expect(model.creatorId, authUserModel.uid);
    expect(model.createdAt != "", true);
    expect(model.updatedAt != "", true);
    // Common(2)
    expect(model.rate, 0);
    expect(model.body, "");
    // user(2)
    expect(model.username, authUserModel.username);
    expect(model.avatarUrl, authUserModel.avatarUrl);
    // point(4)
    expect(model.reviewType, "restaurant");
    expect(model.restaurantId, 'restaurantId');
    expect(model.eventId, "");
    expect(model.recipeId, "");
  });
}
