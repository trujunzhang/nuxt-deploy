import 'package:flutter/cupertino.dart';
import 'package:path/path.dart' as path;
import 'package:cloudinary_client/cloudinary_client.dart';
import 'package:cloudinary_client/models/CloudinaryResponse.dart';

const String Cloudinary_Api_Key = "886131238629743";
const String Cloudinary_Api_Secret = "X1baj0k868ACgxU-a6Wobw8OsY8";
const String Cloudinary_Cloud_Name = "di3fvexj8";

class CloudinaryUtils {

  // Upload photo file to cloudinary server.
  // https://pub.dev/packages/cloudinary_client
  // https://github.com/r4jiv007/CloudinaryClient
  static Future<String> uploadToCloudinary({@required String imagePath}) async {
    CloudinaryClient client = new CloudinaryClient(
        Cloudinary_Api_Key, Cloudinary_Api_Secret, Cloudinary_Cloud_Name);
    CloudinaryResponse response = await client.uploadImage(imagePath, // Path
        filename:  path.basename(imagePath));
//    print(response);
    return response.url;
  }

   static Future<CloudinaryResponse> uploadCloudinary({@required String imagePath}) {
    CloudinaryClient client = new CloudinaryClient(
        Cloudinary_Api_Key, Cloudinary_Api_Secret, Cloudinary_Cloud_Name);
    return client.uploadImage(imagePath, // Path
        filename:  path.basename(imagePath));
  }
}