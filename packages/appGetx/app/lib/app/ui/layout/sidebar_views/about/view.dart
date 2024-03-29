import 'package:app_config/app_config.dart';
import 'package:app_language/langs/l10n.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:my_plugin/my_plugin.dart';

import 'index.dart';

class AboutScreen extends StatefulWidget {
  const AboutScreen({Key? key}) : super(key: key);

  @override
  _AboutScreenState createState() => _AboutScreenState();
}

class _AboutScreenState extends State<AboutScreen> {
  AboutController controller = Get.put<AboutController>(AboutController());

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return BaseSingleViewPage(
        appBar: MyAppBar(
          centerTitle: true,
          title: MyTitle(S.of(context).drawerMenuItemAbout),
          leadingType: AppBarBackType.None,
        ),
        body: Obx(() => _buildBody(context)));
  }

  Widget _buildLocationInfo() {
    return Table(
      children: [
        TableRow(children: [
          Container(
            padding: const EdgeInsets.only(right: 12),
            child: const Text(
              "latitude:",
              textAlign: TextAlign.end,
              style: TextStyle(fontSize: 15.0, fontWeight: FontWeight.bold),
            ),
          ),
          Text(
            controller.state.latitude.value,
            style: const TextStyle(fontSize: 15.0),
          ),
        ]),
        TableRow(children: [
          Container(
            padding: const EdgeInsets.only(right: 12),
            child: const Text(
              "longitude:",
              textAlign: TextAlign.end,
              style: TextStyle(fontSize: 15.0, fontWeight: FontWeight.bold),
            ),
          ),
          Text(
            controller.state.longitude.value,
            style: const TextStyle(fontSize: 15.0),
          ),
        ]),
      ],
    );
  }

  Widget _buildBody(BuildContext context) {
    return Column(
      children: <Widget>[
        Container(
          padding: EdgeInsets.only(
              top: MediaQuery.of(context).padding.top, left: 16, right: 16),
          child: Image.asset(
            R.ASSETS_IMAGES_FEEDBACKIMAGE_PNG,
          ),
        ),
        Container(
          padding: const EdgeInsets.only(top: 8),
          child: const Text(
            'IEATTA',
            style: TextStyle(
              fontSize: 20,
              fontWeight: FontWeight.bold,
            ),
          ),
        ),
        _buildLocationInfo(),
        Container(
          padding: const EdgeInsets.only(top: 16),
          child: const Text(
            'Eating Restaurant Tracker!',
            textAlign: TextAlign.center,
            style: TextStyle(
              fontSize: 16,
            ),
          ),
        ),
        Container(
          padding: const EdgeInsets.only(top: 16, left: 32, right: 32),
          child: const Text(
            "This app is used to track restaurant's ate at, food that was eaten and who you were with.",
            textAlign: TextAlign.center,
            style: TextStyle(
              fontSize: 16,
            ),
          ),
        ),
        Container(
          padding: const EdgeInsets.only(top: 16),
          child: Text(
            'VERSION: ${controller.state.version.value}',
            textAlign: TextAlign.center,
            style: const TextStyle(
              fontWeight: FontWeight.w600,
              fontSize: 16,
            ),
          ),
        ),
      ],
    );
  }

  @override
  void dispose() {
    Get.delete<AboutController>();
    super.dispose();
  }
}
