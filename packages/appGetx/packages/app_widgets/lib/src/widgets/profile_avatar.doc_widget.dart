// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: prefer_single_quotes

// **************************************************************************
// DocWidgetGenerator
// **************************************************************************

import 'package:doc_widget/doc_widget.dart';

class ProfileAvatarDocWidget implements Documentation {
  @override
  String get name => 'ProfileAvatar';
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
          name: 'avatarUrl',
          isRequired: false,
          isNamed: true,
          type: 'String?',
        ),
        PropertyDoc(
          name: 'isActive',
          isRequired: false,
          isNamed: true,
          type: 'bool',
          defaultValue: 'false',
        ),
        PropertyDoc(
          name: 'hasBorder',
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
