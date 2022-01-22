import 'package:flutter/material.dart';

class SearchEmpty extends StatelessWidget {
  const SearchEmpty({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: const [
        SizedBox(height: 160),
        Text('No Data'),
      ],
    );
  }
}
