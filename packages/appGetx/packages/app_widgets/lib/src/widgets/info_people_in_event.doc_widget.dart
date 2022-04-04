// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: prefer_single_quotes

// **************************************************************************
// DocWidgetGenerator
// **************************************************************************

import 'package:doc_widget/doc_widget.dart';

class PeopleInEventInfoPanelDocWidget implements Documentation {
  @override
  String get name => 'PeopleInEventInfoPanel';
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
          name: 'peopleInEvent',
          isRequired: true,
          isNamed: true,
          type: 'ParseModelPeopleInEvent?',
        ),
        PropertyDoc(
          name: 'restaurant',
          isRequired: true,
          isNamed: true,
          type: 'ParseModelRestaurants?',
        ),
        PropertyDoc(
          name: 'event',
          isRequired: true,
          isNamed: true,
          type: 'ParseModelEvents?',
        ),
        PropertyDoc(
          name: 'user',
          isRequired: true,
          isNamed: true,
          type: 'ParseModelUsers?',
        ),
        PropertyDoc(
          name: 'onSelectRecipesIconPress',
          isRequired: true,
          isNamed: true,
          type: 'void Function()',
        ),
      ];
  @override
  String get snippet => '''
''';
}
