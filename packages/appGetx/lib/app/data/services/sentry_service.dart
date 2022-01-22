import 'package:app_config/app_config.dart';
import 'package:sentry_flutter/sentry_flutter.dart';

class SentryService {
  SentryService._();

  static final instance = SentryService._();

  void initialize() async {
    await SentryFlutter.init(
      (options) {
        options.dsn = SentryConfig.dsn;
        // To set a uniform sample rate
        options.tracesSampleRate = 1.0;
      },
    );
  }

  void setup(Function() runner) async {
    await SentryFlutter.init(
        (options) => options.dsn = 'https://<key>@sentry.io/<project>',
        appRunner: runner);
  }
}
