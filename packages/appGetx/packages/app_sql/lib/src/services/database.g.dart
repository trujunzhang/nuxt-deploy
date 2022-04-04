// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'database.dart';

// **************************************************************************
// FloorGenerator
// **************************************************************************

// ignore: avoid_classes_with_only_static_members
class $FloorAppDatabase {
  /// Creates a database builder for a persistent database.
  /// Once a database is built, you should keep a reference to it and re-use it.
  static _$AppDatabaseBuilder databaseBuilder(String name) =>
      _$AppDatabaseBuilder(name);

  /// Creates a database builder for an in memory database.
  /// Information stored in an in memory database disappears when the process is killed.
  /// Once a database is built, you should keep a reference to it and re-use it.
  static _$AppDatabaseBuilder inMemoryDatabaseBuilder() =>
      _$AppDatabaseBuilder(null);
}

class _$AppDatabaseBuilder {
  _$AppDatabaseBuilder(this.name);

  final String? name;

  final List<Migration> _migrations = [];

  Callback? _callback;

  /// Adds migrations to the builder.
  _$AppDatabaseBuilder addMigrations(List<Migration> migrations) {
    _migrations.addAll(migrations);
    return this;
  }

  /// Adds a database [Callback] to the builder.
  _$AppDatabaseBuilder addCallback(Callback callback) {
    _callback = callback;
    return this;
  }

  /// Creates the database and initializes it.
  Future<AppDatabase> build() async {
    final path = name != null
        ? await sqfliteDatabaseFactory.getDatabasePath(name!)
        : ':memory:';
    final database = _$AppDatabase();
    database.database = await database.open(
      path,
      _migrations,
      _callback,
    );
    return database;
  }
}

class _$AppDatabase extends AppDatabase {
  _$AppDatabase([StreamController<String>? listener]) {
    changeListener = listener ?? StreamController<String>.broadcast();
  }

  SqlPhotoDao? _sqlPhotoDaoInstance;

  Future<sqflite.Database> open(String path, List<Migration> migrations,
      [Callback? callback]) async {
    final databaseOptions = sqflite.OpenDatabaseOptions(
      version: 1,
      onConfigure: (database) async {
        await database.execute('PRAGMA foreign_keys = ON');
        await callback?.onConfigure?.call(database);
      },
      onOpen: (database) async {
        await callback?.onOpen?.call(database);
      },
      onUpgrade: (database, startVersion, endVersion) async {
        await MigrationAdapter.runMigrations(
            database, startVersion, endVersion, migrations);

        await callback?.onUpgrade?.call(database, startVersion, endVersion);
      },
      onCreate: (database, version) async {
        await database.execute(
            'CREATE TABLE IF NOT EXISTS `SqlPhoto` (`id` TEXT NOT NULL, `offlinePath` TEXT NOT NULL, PRIMARY KEY (`id`))');

        await callback?.onCreate?.call(database, version);
      },
    );
    return sqfliteDatabaseFactory.openDatabase(path, options: databaseOptions);
  }

  @override
  SqlPhotoDao get sqlPhotoDao {
    return _sqlPhotoDaoInstance ??= _$SqlPhotoDao(database, changeListener);
  }
}

class _$SqlPhotoDao extends SqlPhotoDao {
  _$SqlPhotoDao(this.database, this.changeListener)
      : _queryAdapter = QueryAdapter(database, changeListener),
        _sqlPhotoInsertionAdapter = InsertionAdapter(
            database,
            'SqlPhoto',
            (SqlPhoto item) => <String, Object?>{
                  'id': item.id,
                  'offlinePath': item.offlinePath
                },
            changeListener),
        _sqlPhotoUpdateAdapter = UpdateAdapter(
            database,
            'SqlPhoto',
            ['id'],
            (SqlPhoto item) => <String, Object?>{
                  'id': item.id,
                  'offlinePath': item.offlinePath
                },
            changeListener),
        _sqlPhotoDeletionAdapter = DeletionAdapter(
            database,
            'SqlPhoto',
            ['id'],
            (SqlPhoto item) => <String, Object?>{
                  'id': item.id,
                  'offlinePath': item.offlinePath
                },
            changeListener);

  final sqflite.DatabaseExecutor database;

  final StreamController<String> changeListener;

  final QueryAdapter _queryAdapter;

  final InsertionAdapter<SqlPhoto> _sqlPhotoInsertionAdapter;

  final UpdateAdapter<SqlPhoto> _sqlPhotoUpdateAdapter;

  final DeletionAdapter<SqlPhoto> _sqlPhotoDeletionAdapter;

  @override
  Future<List<SqlPhoto>> findAllPhotos() async {
    return _queryAdapter.queryList('SELECT * FROM SqlPhoto',
        mapper: (Map<String, Object?> row) =>
            SqlPhoto(row['id'] as String, row['offlinePath'] as String));
  }

  @override
  Stream<List<SqlPhoto>> findAllPhotosAsStream() {
    return _queryAdapter.queryListStream('SELECT * FROM SqlPhoto',
        mapper: (Map<String, Object?> row) =>
            SqlPhoto(row['id'] as String, row['offlinePath'] as String),
        queryableName: 'SqlPhoto',
        isView: false);
  }

  @override
  Future<SqlPhoto?> findPhotoById(String id) async {
    return _queryAdapter.query('SELECT * FROM SqlPhoto WHERE id = ?1',
        mapper: (Map<String, Object?> row) =>
            SqlPhoto(row['id'] as String, row['offlinePath'] as String),
        arguments: [id]);
  }

  @override
  Future<void> insertPhoto(SqlPhoto sqlPhoto) async {
    await _sqlPhotoInsertionAdapter.insert(sqlPhoto, OnConflictStrategy.abort);
  }

  @override
  Future<void> updatePhoto(SqlPhoto sqlPhoto) async {
    await _sqlPhotoUpdateAdapter.update(sqlPhoto, OnConflictStrategy.abort);
  }

  @override
  Future<void> deletePhoto(SqlPhoto sqlPhoto) async {
    await _sqlPhotoDeletionAdapter.delete(sqlPhoto);
  }
}
