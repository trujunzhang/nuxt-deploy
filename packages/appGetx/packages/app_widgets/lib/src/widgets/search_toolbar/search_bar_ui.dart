import 'package:flutter/material.dart';
import 'package:doc_widget/doc_widget.dart';

import 'widgets/index.dart';

@docWidget
class SearchToolbar extends StatelessWidget {
  /// Search bar
  final TextEditingController? searchController;
  final ValueChanged<String>? onSearchChanged;

  /// Track button
  final bool gpsTrackVal;
  final VoidCallback toggleTrackStatus;

  const SearchToolbar({
    Key? key,
    this.searchController,
    this.onSearchChanged,
    required this.gpsTrackVal,
    required this.toggleTrackStatus,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(left: 4, right: 4, top: 4, bottom: 4),
      child: Row(
        children: <Widget>[
          // Middle search textfield.
          Expanded(
              child: SearchBar(
            controller: searchController,
            onChanged: onSearchChanged,
          )),
          // Left toggle track icon.
          TrackIcon(
            gpsTrackVal: gpsTrackVal,
            toggleTrackStatus: toggleTrackStatus,
          ),
        ],
      ),
    );
  }
}
