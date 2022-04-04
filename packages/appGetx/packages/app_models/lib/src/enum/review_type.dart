enum ReviewType {
  None,
  Restaurant,
  Event,
  Recipe,
}

extension ReviewTypeExtension on ReviewType {
  String get vnText {
    switch (this) {
      case ReviewType.Restaurant:
        return "restaurant";
      case ReviewType.Event:
        return "event";
      case ReviewType.Recipe:
        return "recipe";
      default:
        return "none";
    }
  }

  static ReviewType fromString(String text) {
    switch (text) {
      case 'restaurant':
        {
          return ReviewType.Restaurant;
        }
      case 'event':
        {
          return ReviewType.Event;
        }
      case 'recipe':
        {
          return ReviewType.Recipe;
        }
      default:
        return ReviewType.None;
    }
  }
}
