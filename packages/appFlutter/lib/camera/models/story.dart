import 'user.dart';

class Story {
  User user;
  String id;
  bool isSeen;
  List data;
  DateTime publishedAt;

  Story(
    this.id,
    this.user,
    this.isSeen,
    this.data,
    this.publishedAt,
  );
}
