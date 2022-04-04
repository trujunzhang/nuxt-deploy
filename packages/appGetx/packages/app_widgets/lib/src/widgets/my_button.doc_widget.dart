// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: prefer_single_quotes

// **************************************************************************
// DocWidgetGenerator
// **************************************************************************

import 'package:doc_widget/doc_widget.dart';

class MyButtonDocWidget implements Documentation {
  @override
  String get name => 'MyButton';
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
          name: 'text',
          isRequired: false,
          isNamed: true,
          type: 'String',
          defaultValue: '',
        ),
        PropertyDoc(
          name: 'fontSize',
          isRequired: false,
          isNamed: true,
          type: 'double',
          defaultValue: 'Dimens.font_sp18',
        ),
        PropertyDoc(
          name: 'textColor',
          isRequired: false,
          isNamed: true,
          type: 'Color?',
        ),
        PropertyDoc(
          name: 'disabledTextColor',
          isRequired: false,
          isNamed: true,
          type: 'Color?',
        ),
        PropertyDoc(
          name: 'backgroundColor',
          isRequired: false,
          isNamed: true,
          type: 'Color?',
        ),
        PropertyDoc(
          name: 'disabledBackgroundColor',
          isRequired: false,
          isNamed: true,
          type: 'Color?',
        ),
        PropertyDoc(
          name: 'minHeight',
          isRequired: false,
          isNamed: true,
          type: 'double?',
          defaultValue: '48.0',
        ),
        PropertyDoc(
          name: 'minWidth',
          isRequired: false,
          isNamed: true,
          type: 'double?',
          defaultValue: 'double.infinity',
        ),
        PropertyDoc(
          name: 'padding',
          isRequired: false,
          isNamed: true,
          type: 'EdgeInsetsGeometry',
          defaultValue: 'const EdgeInsets.symmetric(horizontal: 16.0)',
        ),
        PropertyDoc(
          name: 'radius',
          isRequired: false,
          isNamed: true,
          type: 'double',
          defaultValue: '2.0',
        ),
        PropertyDoc(
          name: 'side',
          isRequired: false,
          isNamed: true,
          type: 'BorderSide',
          defaultValue: 'BorderSide.none',
        ),
        PropertyDoc(
          name: 'onPressed',
          isRequired: true,
          isNamed: true,
          type: 'void Function()?',
        ),
      ];
  @override
  String get snippet => '''
''';
}
