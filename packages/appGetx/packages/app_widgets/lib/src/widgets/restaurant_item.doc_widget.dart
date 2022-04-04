// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: prefer_single_quotes

// **************************************************************************
// DocWidgetGenerator
// **************************************************************************

import 'package:doc_widget/doc_widget.dart';

class HotelListViewDocWidget implements Documentation {
  @override
  String get name => 'HotelListView';
  @override
  bool get hasState => true;
  @override
  List<PropertyDoc> get properties => [
        PropertyDoc(
          name: 'key',
          isRequired: false,
          isNamed: true,
          type: 'Key?',
        ),
        PropertyDoc(
          name: 'restaurant',
          isRequired: true,
          isNamed: true,
          type: 'ParseModelRestaurants',
        ),
        PropertyDoc(
          name: 'onTapItem',
          isRequired: false,
          isNamed: true,
          type: 'void Function()?',
        ),
        PropertyDoc(
          name: 'onExpandIconTap',
          isRequired: false,
          isNamed: true,
          type: 'dynamic Function(bool)?',
        ),
        PropertyDoc(
          name: 'showThumbnail',
          isRequired: false,
          isNamed: true,
          type: 'bool',
          defaultValue: 'true',
        ),
        PropertyDoc(
          name: 'showExpandIcon',
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
