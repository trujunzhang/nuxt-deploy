// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: prefer_single_quotes

// **************************************************************************
// DocWidgetGenerator
// **************************************************************************

import 'package:doc_widget/doc_widget.dart';

class AvatarWidgetDocWidget implements Documentation {
  @override
  String get name => 'AvatarWidget';
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
          name: 'user',
          isRequired: true,
          isNamed: true,
          type: 'AvatarUser',
        ),
        PropertyDoc(
          name: 'onTap',
          isRequired: false,
          isNamed: true,
          type: 'void Function()?',
        ),
        PropertyDoc(
          name: 'padding',
          isRequired: false,
          isNamed: true,
          type: 'EdgeInsetsGeometry',
          defaultValue: 'const EdgeInsets.all(8.0)',
        ),
        PropertyDoc(
          name: 'isLarge',
          isRequired: false,
          isNamed: true,
          type: 'bool',
          defaultValue: 'false',
        ),
        PropertyDoc(
          name: 'isShowingUsernameLabel',
          isRequired: false,
          isNamed: true,
          type: 'bool',
          defaultValue: 'false',
        ),
        PropertyDoc(
          name: 'isCurrentUserStory',
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
