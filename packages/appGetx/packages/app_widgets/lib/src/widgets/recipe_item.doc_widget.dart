// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: prefer_single_quotes

// **************************************************************************
// DocWidgetGenerator
// **************************************************************************

import 'package:doc_widget/doc_widget.dart';

class RecipeItemDocWidget implements Documentation {
  @override
  String get name => 'RecipeItem';
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
          name: 'recipe',
          isRequired: true,
          isNamed: true,
          type: 'ParseModelRecipes',
        ),
        PropertyDoc(
          name: 'onTapItem',
          isRequired: true,
          isNamed: true,
          type: 'dynamic Function()',
        ),
      ];
  @override
  String get snippet => '''
''';
}
