import 'resource.dart';

Map<String, String> starsSmallDict = {
  // Double
  "0.0": R.ASSETS_STARS_SMALL_0_0_PNG,
  "1.0": R.ASSETS_STARS_SMALL_1_0_PNG,
  "1.5": R.ASSETS_STARS_SMALL_1_5_PNG,
  "2.0": R.ASSETS_STARS_SMALL_2_0_PNG,
  "2.5": R.ASSETS_STARS_SMALL_2_5_PNG,
  "3.0": R.ASSETS_STARS_SMALL_3_0_PNG,
  "3.5": R.ASSETS_STARS_SMALL_3_5_PNG,
  "4.0": R.ASSETS_STARS_SMALL_4_0_PNG,
  "4.5": R.ASSETS_STARS_SMALL_4_5_PNG,
  "5.0": R.ASSETS_STARS_SMALL_5_0_PNG,
  // Int
  "0": R.ASSETS_STARS_SMALL_0_0_PNG,
  "1": R.ASSETS_STARS_SMALL_1_0_PNG,
  "2": R.ASSETS_STARS_SMALL_2_0_PNG,
  "3": R.ASSETS_STARS_SMALL_3_0_PNG,
  "4": R.ASSETS_STARS_SMALL_4_0_PNG,
  "5": R.ASSETS_STARS_SMALL_5_0_PNG,
};

extension StarImages on String {
  String get toSmallStarImage {
    return starsSmallDict[this]!;
  }
}
