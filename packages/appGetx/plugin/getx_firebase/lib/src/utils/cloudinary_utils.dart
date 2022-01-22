import 'package:app_config/app_config.dart';
import 'package:cloudinary_sdk/cloudinary_sdk.dart';

class CloudinaryUtils {
  //
  // Upload photo file to cloudinary server.
  // https://pub.dev/packages/cloudinary_sdk
  static Future<String> uploadToCloudinary({required String imagePath}) async {
    final cloudinary = Cloudinary(
      CloudinaryConfig.Api_Key,
      CloudinaryConfig.Api_Secret,
      CloudinaryConfig.Cloud_Name,
    );
    final response = await cloudinary.uploadFile(
      filePath: imagePath,
      resourceType: CloudinaryResourceType.image,
    );
//    print(response);
    return response.url!;
  }
}
