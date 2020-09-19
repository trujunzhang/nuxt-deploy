import 'package:flutter/material.dart';

class SearchEmpty extends StatefulWidget {
  SearchEmpty({Key key}) : super(key: key);

  @override
  _SearchEmptyState createState() => _SearchEmptyState();
}

class _SearchEmptyState extends State<SearchEmpty> {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text('No Data'),
    );
  }
}
