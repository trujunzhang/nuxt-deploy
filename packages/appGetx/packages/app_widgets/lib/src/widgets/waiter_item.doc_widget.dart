// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: prefer_single_quotes

// **************************************************************************
// DocWidgetGenerator
// **************************************************************************

import 'package:doc_widget/doc_widget.dart';

class WaiterItemDocWidget implements Documentation {
  @override
  String get name => 'WaiterItem';
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
          name: 'waiter',
          isRequired: true,
          isNamed: true,
          type: 'ParseModelPhotos',
        ),
        PropertyDoc(
          name: 'onTapItem',
          isRequired: false,
          isNamed: true,
          type: 'void Function()?',
        ),
        PropertyDoc(
          name: 'onTapDeleteIcon',
          isRequired: false,
          isNamed: true,
          type: 'void Function()?',
        ),
      ];
  @override
  String get snippet => '''
''';
}
