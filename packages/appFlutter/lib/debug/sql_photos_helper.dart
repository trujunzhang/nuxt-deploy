import 'package:ieatta/src/appModels/models/photos_sql.dart';

class SqlPhotosHelper {
  static generateDatabase() async {
    await SqlPhotos(
            uniqueId: '123',
            offlinePath: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507529351/politicl/o_h1fei1.jpg')
        .insert();
    await SqlPhotos(
            uniqueId: '234',
            offlinePath: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507529360/politicl/o_cz9lwf.jpg')
        .insert();
    await SqlPhotos(
            uniqueId: '345',
            offlinePath: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507529398/politicl/o_npi8ev.jpg')
        .insert();
    await SqlPhotos(
            uniqueId: '456',
            offlinePath: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507529417/politicl/o_nnaeic.jpg')
        .insert();
    await SqlPhotos(
            uniqueId: '567',
            offlinePath: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507532101/politicl/o_xinrso.jpg')
        .insert();
    await SqlPhotos(
            uniqueId: '678',
            offlinePath: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507532123/politicl/o_i93hfj.jpg')
        .insert();
  }
}
