// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: prefer_single_quotes

// **************************************************************************
// DocWidgetGenerator
// **************************************************************************

import 'package:doc_widget/doc_widget.dart';

class PhotoBaseViewDocWidget implements Documentation {
  @override
  String get name => 'PhotoBaseView';
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
          name: 'photo',
          isRequired: true,
          isNamed: true,
          type: 'ParseModelPhotos',
        ),
        PropertyDoc(
          name: 'customPlaceHolder',
          isRequired: false,
          isNamed: true,
          type: 'Widget?',
        ),
        PropertyDoc(
          name: 'fit',
          isRequired: false,
          isNamed: true,
          type: 'BoxFit',
          defaultValue: 'BoxFit.cover',
        ),
      ];
  @override
  String get snippet => '''
''';
}
