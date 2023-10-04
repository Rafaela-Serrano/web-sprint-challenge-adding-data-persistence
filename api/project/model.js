// build your `Project` model here
const db = require("../../data/dbConfig.js")

async function getAll() {
    const p_db = await db('projects');

    if(p_db.project_completed === 0){

        // this is the way I'm trying to model it
        const project = {
            project_name: p_db.project_name,
            project_description: p_db.project_description,
            project_completed: false
        }

        return project
        
    } else {
        return p_db
    }

}

module.exports = {
    getAll,
}
