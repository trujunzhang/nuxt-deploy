import 'dart:convert';

import 'package:crypto/crypto.dart';
import 'package:dio/dio.dart';
import 'package:ieatta/third/CloudinaryClient/lib/models/CloudinaryResponse.dart';

import 'BaseApi.dart';

class ImageClient extends BaseApi {
  String? _cloudName;
  String? _apiKey;
  String? _apiSecret;

  ImageClient(String apiKey, String apiSecret, String cloudName) {
    this._apiKey = apiKey;
    this._apiSecret = apiSecret;
    this._cloudName = cloudName;
  }

  Future<CloudinaryResponse> uploadImage(String imagePath, {String? imageFilename, String? folder}) async {
    int timeStamp = new DateTime.now().millisecondsSinceEpoch;

    Map<String, dynamic> params = new Map();
    if (_apiSecret == null || _apiKey == null) {
      throw Exception("apiKey and apiSecret must not be null");
    }

    params["api_key"] = _apiKey;

    if (imagePath == null) {
      throw Exception("imagePath must not be null");
    }
    String publicId = imagePath.split('/').last;
    publicId = publicId.split('.')[0];

    if (imageFilename != null) {
      publicId = imageFilename.split('.')[0] + "_" + timeStamp.toString();
    } else {
      imageFilename = publicId;
    }

    if (folder != null) {
      params["folder"] = folder;
    }

    if (publicId != null) {
      params["public_id"] = publicId;
    }

    params["file"] = await MultipartFile.fromFile(imagePath, filename: imageFilename);
    params["timestamp"] = timeStamp;
    params["signature"] = getSignature(folder!, publicId, timeStamp);

    FormData formData = new FormData.fromMap(params);

    Dio dio = await getApiClient();
    Response response = await dio.post(_cloudName! + "/image/upload", data: formData);
    try {
      return CloudinaryResponse.fromJsonMap(response.data);
    } catch (error, stacktrace) {
      print("Exception occured: $error stackTrace: $stacktrace");
      return CloudinaryResponse.fromError("$error");
    }
  }

  String getSignature(String folder, String publicId, int timeStamp) {
    var buffer = new StringBuffer();
    if (folder != null) {
      buffer.write("folder=" + folder + "&");
    }
    if (publicId != null) {
      buffer.write("public_id=" + publicId + "&");
    }
    buffer.write("timestamp=" + timeStamp.toString() + _apiSecret!);

    var bytes = utf8.encode(buffer.toString().trim()); // data being hashed

    return sha1.convert(bytes).toString();
  }
}
