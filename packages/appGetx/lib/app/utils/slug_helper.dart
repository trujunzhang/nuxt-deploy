import 'package:slugify/slugify.dart';

String slugifyToLower(String s) {
  return slugify(s, lowercase: true);
}
