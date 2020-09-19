import 'package:slugify/slugify.dart';

String slugifyToLower(String s) {
  return Slugify(s, lowercase: true);
}
