class AppConfigs {
  static const String appName = 'Flutter IEATTA';

  static const double appbarHeight = 56.0;

  ///DEV

  ///STAGING
  static const envName = "Staging";
  static const webUrl = "https://www.themoviedb.org";
  static const baseUrl = "https://api.themoviedb.org";
  static const socketUrl = 'wss://socket.themoviedb.org'; //Todo: change this

  ///PRODUCTION

  ///Paging
  static const pageReviewSize = 6;
  static const pageSize = 20;
  static const pageSizeMax = 1000;

  ///DateFormat

  static const dateAPIFormat = 'dd/MM/yyyy';
  static const dateDisplayFormat = 'dd/MM/yyyy';

  static const dateTimeAPIFormat =
      "MM/dd/yyyy'T'hh:mm:ss.SSSZ"; //Use DateTime.parse(date) instead of ...
  static const dateTimeDisplayFormat = 'dd/MM/yyyy HH:mm';

  ///Date range
  static final identityMinDate = DateTime(1900, 1, 1);
  static final identityMaxDate = DateTime.now();
  static final birthMinDate = DateTime(1900, 1, 1);
  static final birthMaxDate = DateTime.now();

  ///Font
  static const fontFamily = 'Roboto';

  ///Max file
  static const maxAttachFile = 5;
}

class SentryConfig {
  static const dsn =
      'https://adc255269e9045beaeb7e8a228950497@o76508.ingest.sentry.io/5901358';
}

class CloudinaryConfig {
  static const String Api_Key = "886131238629743";
  static const String Api_Secret = "X1baj0k868ACgxU-a6Wobw8OsY8";
  static const String Cloud_Name = "di3fvexj8";
}

class UpGraderAPIConfig {
  static const String APIKey = '';
}
