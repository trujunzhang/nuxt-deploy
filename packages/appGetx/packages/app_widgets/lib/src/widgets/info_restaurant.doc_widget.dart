// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: prefer_single_quotes

// **************************************************************************
// DocWidgetGenerator
// **************************************************************************

import 'package:doc_widget/doc_widget.dart';

class RestaurantInfoPanelDocWidget implements Documentation {
  @override
  String get name => 'RestaurantInfoPanel';
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
          name: 'restaurant',
          isRequired: true,
          isNamed: true,
          type: 'ParseModelRestaurants?',
        ),
        PropertyDoc(
          name: 'onEditPressed',
          isRequired: true,
          isNamed: true,
          type: 'void Function()',
        ),
        PropertyDoc(
          name: 'onNewEventIconPress',
          isRequired: true,
          isNamed: true,
          type: 'void Function()',
          description: 'action icon events.',
        ),
        PropertyDoc(
          name: 'onNewReviewButtonPress',
          isRequired: true,
          isNamed: true,
          type: 'void Function()',
        ),
        PropertyDoc(
          name: 'onSeeAllReviewsButtonPress',
          isRequired: true,
          isNamed: true,
          type: 'void Function()',
        ),
      ];
  @override
  String get snippet => '''
''';
}
