import 'package:flutter/material.dart';
import 'package:mix/mix.dart';
import 'package:doc_widget/doc_widget.dart';

@docWidget
class ThemedBox extends StatelessWidget {
  final Widget? child;
  const ThemedBox({Key? key, this.child}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Box(
      mix: Mix(
        bgColor($onSecondary),
      ),
      child: child,
    );
  }
}
