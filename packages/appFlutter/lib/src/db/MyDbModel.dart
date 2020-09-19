import 'SqfEntityBase.dart';
import 'dbModels/TableCategory.dart';
import 'dbModels/TableRestaurant.dart';
import 'dbModels/TableTodo.dart';

// STEP 2: Create your Database Model to be extended from SqfEntityModel
// Note: SqfEntity provides support for the use of multiple databases. So you can create many Database Models and use them in the application.
class MyDbModel extends SqfEntityModel {
  MyDbModel() {
    databaseName = "sampleORM.db";
    databaseTables = [
      TableRestaurant.getInstance,
      TableCategory.getInstance,
      TableTodo.getInstance
    ]; // put defined tables into the list. ex: [TableProduct.getInstance, TableCategory.getInstance]
    bundledDatabasePath =
        null; // "assets/sample.db"; // This value is optional. When bundledDatabasePath is empty then EntityBase creats a new database when initializing the database
  }
}
