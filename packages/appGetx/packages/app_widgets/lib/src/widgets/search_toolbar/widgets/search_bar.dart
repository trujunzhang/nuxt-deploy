import 'package:app_config/app_config.dart';
import 'package:flutter/material.dart';
import 'package:mix/mix.dart';

class SearchBar extends StatelessWidget {
  final TextEditingController? controller;
  final ValueChanged<String>? onChanged;
  const SearchBar({
    Key? key,
    this.controller,
    this.onChanged,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Box(
      mix: Mix(
        bgColor($onSecondary),
        rounded(38.0),
        shadow(
          color: Colors.grey.withOpacity(0.2),
          offset: const Offset(0, 2),
          blurRadius: 8.0,
        ),
      ),
      child: Box(
        mix: Mix(
          paddingInsets(
            const EdgeInsets.only(left: 16, right: 16, top: 4, bottom: 4),
          ),
        ),
        child: TextField(
          controller: controller,
          onChanged: onChanged,
          style: const TextStyle(
            fontSize: 16,
          ),
          decoration: const InputDecoration(
            fillColor: $onSecondary,
            filled: true,
            border: InputBorder.none,
            hintText: 'London...',
          ),
        ),
      ),
    );
  }

  Widget buildxxxx(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(right: 16, top: 8, bottom: 8),
      child: Container(
        decoration: BoxDecoration(
          // color: HotelAppTheme.buildLightTheme().backgroundColor,
          // color: Colors.white,
          color: Colors.black,
          borderRadius: const BorderRadius.all(
            Radius.circular(38.0),
          ),
          boxShadow: <BoxShadow>[
            BoxShadow(
              color: Colors.grey.withOpacity(0.2),
              offset: const Offset(0, 2),
              blurRadius: 8.0,
            ),
          ],
        ),
        child: Padding(
          padding:
              const EdgeInsets.only(left: 16, right: 16, top: 4, bottom: 4),
          child: TextField(
            controller: controller,
            onChanged: onChanged,
            style: const TextStyle(
              fontSize: 18,
            ),
            decoration: const InputDecoration(
              border: InputBorder.none,
              hintText: 'London...',
            ),
          ),
        ),
      ),
    );
  }

  Widget buildxxx(BuildContext context) {
    return Padding(
      padding:
          const EdgeInsets.only(left: 6, right: 6, top: 8 + 4, bottom: 8 + 4),
      child: TextField(
        controller: controller,
        onChanged: onChanged,
        // style: const TextStyle(fontSize: 18, color: Colors.black),
        decoration: AppDecoration.searchTextField.copyWith(
          prefixIcon: const Icon(Icons.search),
          hintText: 'London...',
        ),
      ),
    );
  }
}
