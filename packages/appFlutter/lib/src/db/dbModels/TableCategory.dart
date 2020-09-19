import '../SqfEntityBase.dart';

// STEP 1: define your tables as shown in the example Classes below.
// Define the "TableCategory" sample table as extended from "SqfEntityTable".

class TableCategory extends SqfEntityTable {
  static SqfEntityTable _instance;

  static SqfEntityTable get getInstance {
    if (_instance == null) _instance = TableCategory();
    return _instance;
  }

  TableCategory() {
    // declare properties of EntityTable
    tableName = "category";
    modelName =
        null; // If the modelName (class name) is null then EntityBase uses TableName instead of modelName
    primaryKeyName = "id";
    primaryKeyisIdentity = true;
    useSoftDeleting = true;

    // declare fields
    fields = [
      SqfEntityField("name", DbType.text),
      SqfEntityField("isActive", DbType.bool, defaultValue: "true")
    ];

    super.init();
  }
}
