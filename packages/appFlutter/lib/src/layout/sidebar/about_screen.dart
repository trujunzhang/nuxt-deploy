import 'package:flutter/material.dart';
import 'package:ieatta/src/layout/app_theme.dart';

class AboutScreen extends StatefulWidget {
  @override
  _AboutScreenState createState() => _AboutScreenState();
}

class _AboutScreenState extends State<AboutScreen> {
  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: Text('About'),
      ),
      body: SingleChildScrollView(
        child: SizedBox(
          height: MediaQuery.of(context).size.height,
          child: Column(
            children: <Widget>[
              Container(
                padding: EdgeInsets.only(
                    top: MediaQuery.of(context).padding.top,
                    left: 16,
                    right: 16),
                child: Image.asset('assets/images/feedbackImage.png'),
              ),
              Container(
                padding: const EdgeInsets.only(top: 8),
                child: Text(
                  'IEATTA',
                  style: TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
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
                child: const Text(
                  'Version: 10.2.1',
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    fontSize: 16,
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
