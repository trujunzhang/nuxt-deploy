import 'package:flutter/material.dart';

class SelectState with ChangeNotifier {
  bool isSaving;
  List<String> selected = [];

  SelectState({required this.isSaving});

  bool getSaving() {
    return isSaving;
  }

  void setSaving(bool _saving) {
    isSaving = _saving;
    notifyListeners();
  }

  void pushId(String id) {
    selected.add(id);
  }

  bool contains(String id) {
    return selected.contains(id);
  }
}
