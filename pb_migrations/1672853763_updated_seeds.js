migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("upz2b7fxuiudx03")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("upz2b7fxuiudx03")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
