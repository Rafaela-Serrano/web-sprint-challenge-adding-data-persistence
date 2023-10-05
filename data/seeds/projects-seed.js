
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

const tasks = [
  {
    task_description:"created a seed file",
    task_notes:"use the command line to generate a seed file",
    task_completed:0,
    project_id:1

  },
  {
    task_description:"created a seed file",
    task_notes:"use the command line to generate a seed file",
    task_completed:1,
    project_id:2

  }
]

exports.seed = async function(knex){
  await knex("projects").insert(projects)
  await knex("tasks").insert(tasks)
}


