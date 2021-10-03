class FilterDict {
  FilterDict._();

  static final instance = FilterDict._();

  List<String> updateNewId(List<String> newIds, List<String> oldIds) {
    if (oldIds.length == 0) {
      return [...newIds];
    }
    for (int i = 0; i < newIds.length; i++) {
      String id = newIds[i];
      if (oldIds.contains(id)) {
        break;
      }
      oldIds.insert(i, id);
    }
    return [...oldIds];
  }
}
