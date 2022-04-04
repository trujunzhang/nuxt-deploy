// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: prefer_single_quotes

// **************************************************************************
// DocWidgetGenerator
// **************************************************************************

import 'package:doc_widget/doc_widget.dart';

class PeopleInEventItemDocWidget implements Documentation {
  @override
  String get name => 'PeopleInEventItem';
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
          name: 'onTapItem',
          isRequired: true,
          isNamed: true,
          type: 'void Function()?',
        ),
        PropertyDoc(
          name: 'peopleInEvent',
          isRequired: true,
          isNamed: true,
          type: 'ParseModelPeopleInEvent',
        ),
        PropertyDoc(
          name: 'user',
          isRequired: false,
          isNamed: true,
          type: 'ParseModelUsers?',
        ),
      ];
  @override
  String get snippet => '''
''';
}
