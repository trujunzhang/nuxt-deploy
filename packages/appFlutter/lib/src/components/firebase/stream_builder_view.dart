import 'package:flutter/material.dart';

class StreamBuilderView<T> extends StatelessWidget {
  final Stream<T> stream;
  final Function render;

  const StreamBuilderView(
      {Key key, @required this.stream, @required this.render})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return StreamBuilder(
        stream: stream,
        builder: (BuildContext context, AsyncSnapshot fbSnapshot) {
          if (fbSnapshot.hasError) {}
          if (!fbSnapshot.hasData) {
            return Container();
          }
          return render(fbSnapshot);
        });
  }
}
