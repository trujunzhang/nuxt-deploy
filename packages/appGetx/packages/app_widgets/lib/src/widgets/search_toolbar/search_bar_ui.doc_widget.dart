// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: prefer_single_quotes

// **************************************************************************
// DocWidgetGenerator
// **************************************************************************

import 'package:doc_widget/doc_widget.dart';

class SearchToolbarDocWidget implements Documentation {
  @override
  String get name => 'SearchToolbar';
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
          name: 'searchController',
          isRequired: false,
          isNamed: true,
          type: 'TextEditingController?',
          description: 'Search bar',
        ),
        PropertyDoc(
          name: 'onSearchChanged',
          isRequired: false,
          isNamed: true,
          type: 'void Function(String)?',
        ),
        PropertyDoc(
          name: 'gpsTrackVal',
          isRequired: true,
          isNamed: true,
          type: 'bool',
          description: 'Track button',
        ),
        PropertyDoc(
          name: 'toggleTrackStatus',
          isRequired: true,
          isNamed: true,
          type: 'void Function()',
        ),
      ];
  @override
  String get snippet => '''
''';
}
