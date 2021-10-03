import 'package:sentry_flutter/sentry_flutter.dart';

const dsn = 'https://adc255269e9045beaeb7e8a228950497@o76508.ingest.sentry.io/5901358';

class SentryService {
  SentryService._();

  static final instance = SentryService._();

  void initialize() async {
    await SentryFlutter.init(
      (options) {
        options.dsn = dsn;
      },
    );
  }

  void setup(Function() runner) async {
    await SentryFlutter.init((options) => options.dsn = 'https://<key>@sentry.io/<project>', appRunner: runner);
  }
}
