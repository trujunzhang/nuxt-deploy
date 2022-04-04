// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: prefer_single_quotes

// **************************************************************************
// DocWidgetGenerator
// **************************************************************************

import 'package:doc_widget/doc_widget.dart';

class ReviewItemDocWidget implements Documentation {
  @override
  String get name => 'ReviewItem';
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
          name: 'review',
          isRequired: true,
          isNamed: true,
          type: 'ParseModelReviews',
        ),
        PropertyDoc(
          name: 'onUserItemTap',
          isRequired: true,
          isNamed: true,
          type: 'dynamic Function()',
        ),
        PropertyDoc(
          name: 'showPreview',
          isRequired: false,
          isNamed: true,
          type: 'bool',
          defaultValue: 'false',
        ),
      ];
  @override
  String get snippet => '''
''';
}
