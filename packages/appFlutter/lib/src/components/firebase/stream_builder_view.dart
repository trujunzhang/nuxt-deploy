import 'package:flutter/material.dart';

Widget defaultPlaceHolder() {
  return Container(
      height: 80,
      child: Center(
          // child: CircularProgressIndicator(
          //   backgroundColor: Colors.grey,
          // ),
          ));
}

class StreamBuilderView<T> extends StatelessWidget {
  final Stream<T> stream;
  final Function render;
  final Widget? placeHolder;

  const StreamBuilderView({Key? key, required this.stream, required this.render, this.placeHolder}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return StreamBuilder(
        stream: stream,
        builder: (BuildContext context, AsyncSnapshot fbSnapshot) {
          if (fbSnapshot.hasError) {
            var error = fbSnapshot.error;
          }
          if (!fbSnapshot.hasData) {
            if (placeHolder == null) {
              return defaultPlaceHolder();
            }
            return Container();
          }
          return render(fbSnapshot);
        });
  }
}
