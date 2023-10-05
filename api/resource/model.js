// build your `Resource` model here
const db = require("../../data/dbConfig.js")

function getAll(){
    return db('resources');
}

async function insert(resource){
    const add_resource = await db('resources')
    .insert(resource)

    const created_resource = await db('resources')
    .where('resource_id',add_resource)
    .first()

    return created_resource
}

module.exports = {
    getAll,
    insert
}