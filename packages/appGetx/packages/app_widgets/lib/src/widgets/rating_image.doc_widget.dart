// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: prefer_single_quotes

// **************************************************************************
// DocWidgetGenerator
// **************************************************************************

import 'package:doc_widget/doc_widget.dart';

class RatingImageDocWidget implements Documentation {
  @override
  String get name => 'RatingImage';
  @override
  bool get hasState => false;
  @override
  List<PropertyDoc> get properties => [
        PropertyDoc(
          name: 'key',
          isRequired: false,
          isNamed: true,
          type: 'Key?',
        ),
        PropertyDoc(
          name: 'baseReview',
          isRequired: true,
          isNamed: true,
          type: 'BaseReview?',
        ),
        PropertyDoc(
          name: 'imageWidth',
          isRequired: false,
          isNamed: true,
          type: 'double',
          defaultValue: '100',
        ),
        PropertyDoc(
          name: 'imageHeight',
          isRequired: false,
          isNamed: true,
          type: 'double',
          defaultValue: '15',
        ),
      ];
  @override
  String get snippet => '''
''';
}
