// build your `Project` model here
const db = require("../../data/dbConfig.js")

async function getAll() {
    const projectsAll = await db('projects');

        const project = [];

        projectsAll.forEach( p => {
            if(p.project_completed === 0 ){
                project.push({
                    project_name:p.project_name,
                    project_description:p.project_description,
                    project_completed: Boolean(p.project_completed)})
                
                return project
                
                }else{
                project.push({
                        project_name:p.project_name,
                        project_description:p.project_description,
                        project_completed: Boolean(p.project_completed)})

                return project

                }
            }); 
        
      return project
   
}

 function insert(project) {

    return db('projects').insert(project)

}

module.exports = {
    getAll,
    insert,
}
