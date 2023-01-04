migrate((db) => {
  const collection = new Collection({
    "id": "upz2b7fxuiudx03",
    "created": "2023-01-04 17:34:28.628Z",
    "updated": "2023-01-04 17:34:28.628Z",
    "name": "seeds",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "syghicxg",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "bwrd6v7v",
        "name": "image",
        "type": "file",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/jpg",
            "image/jpeg",
            "image/png",
            "image/svg+xml",
            "image/gif"
          ],
          "thumbs": []
        }
      },
      {
        "system": false,
        "id": "t4hgfgwq",
        "name": "slug",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 3,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("upz2b7fxuiudx03");

  return dao.deleteCollection(collection);
})
