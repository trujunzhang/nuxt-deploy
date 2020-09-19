import '../SqfEntityBase.dart';

// Define the "TableProduct"  sample table as extended from "SqfEntityTable".
class TableRestaurant extends SqfEntityTable {
  static SqfEntityTable _instance;

  static SqfEntityTable get getInstance {
    if (_instance == null) _instance = TableRestaurant();
    return _instance;
  }

  TableRestaurant() {
    // declare properties of EntityTable
    tableName = "restaurant";
    primaryKeyName = "id";
    primaryKeyisIdentity = true;
    useSoftDeleting = true;
    // when useSoftDeleting is true, creates a field named "isDeleted" on the table, and set to "1" this field when item deleted (does not hard delete)

    // declare fields
    fields = [
      SqfEntityField("uniqueId", DbType.text),
      // length(8)
      SqfEntityField("address", DbType.text),
      SqfEntityField("street_number", DbType.text),
      SqfEntityField("route", DbType.text),
      SqfEntityField("locality", DbType.text),
      SqfEntityField("sublocality", DbType.text),
      SqfEntityField("country", DbType.text),
      SqfEntityField("postal_code", DbType.text),
      SqfEntityField("administrative_area", DbType.text),
      // length(8)-end
      SqfEntityField("displayName", DbType.text),
      SqfEntityField("thumbnailUrl", DbType.text),
      SqfEntityField("originalUrl", DbType.text),

      SqfEntityField("isActive", DbType.bool, defaultValue: "true"),
    ];
    super.init();
  }
}
