import 'package:flutter_test/flutter_test.dart';

import 'dart:convert';
import 'package:convert/convert.dart';
import 'package:crypto/crypto.dart';
import 'package:ieatta/src/utils/tools.dart';

void main() {
  testWidgets('crypto functions test', (WidgetTester tester) async {
    String content = 'trujunzhang@gmail.com';
    var generateMd52 = generateMd5(content);

    expect(generateMd52, '5a2e128c8e254657efa89d713274266a');
  });
}
