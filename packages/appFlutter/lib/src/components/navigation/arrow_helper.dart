import 'package:flutter/material.dart';
import 'dart:io';

getArrowBackIcon() {
  IconData icon = Platform.isIOS ? Icons.arrow_back_ios : Icons.arrow_back;
  return icon;
  // return Icons.arrow_back_ios;
}
