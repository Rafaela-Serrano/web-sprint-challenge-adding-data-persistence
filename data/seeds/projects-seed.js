
const projects = [
  {
    project_name:"data modeling", 
    project_description:"modify db response",
    project_completed:0
  },
  {
    project_name:"create table", 
    project_description:"create a table name projects",
    project_completed:1
  }

]

exports.seed = async function(knex){
  await knex("projects").insert(projects)
}


