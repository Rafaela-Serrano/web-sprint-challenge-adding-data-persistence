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

async function insert(project) {

    const add_project = await db('projects').insert(project)

    const created_project = await db('projects')
    .where('project_id', add_project)
    .first()

    if(project.project_completed === 0){
        const modify_created = {
            project_id:created_project.project_id,
            project_name:created_project.project_name,
            project_description:created_project.project_description,
            project_completed:Boolean(created_project.project_completed)
        }
        return modify_created
    }else{
        const modify_created = {
            project_id:created_project.project_id,
            project_name:created_project.project_name,
            project_description:created_project.project_description,
            project_completed:Boolean(created_project.project_completed)
        }
        return modify_created
    }           
}

module.exports = {
    getAll,
    insert,
}
