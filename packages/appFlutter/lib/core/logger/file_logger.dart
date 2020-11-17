import 'dart:io';
import 'dart:core';
import 'package:synchronized/synchronized.dart';

 /// A Flutter file logger (for iOS and Android simulators)
 /// https://alvinalexander.com/flutter/flutter-file-logger-ios-android-simulators/
class Lager {

    static final _lock = Lock();  // uses the “synchronized” package
    static File _logFile;

    static Future initializeLogging(String canonicalLogFileName) async {
        _logFile = _createLogFile(canonicalLogFileName);
        final text = '${new DateTime.now()}: LOGGING STARTED\n';
        /// per its documentation, `writeAsString` “Opens the file, writes 
        /// the string in the given encoding, and closes the file”
        return _logFile.writeAsString(text, mode: FileMode.write, flush: true);
    }

    static Future log(String s) async {
        final text = '${new DateTime.now()}: $s\n';
        return _lock.synchronized(() async {
            await _logFile.writeAsString(text, mode: FileMode.append, flush: true);
        });
    }

    static File _createLogFile(canonicalLogFileName) => File(canonicalLogFileName);

}
