// build your `Task` model here
const db = require("../../data/dbConfig.js")

async function getTaks(){
// SELECT 
// tasks.task_id,
// tasks.task_description,
// tasks.task_notes,
// tasks.task_completed,
// projects.project_name,
// projects.project_description
// FROM tasks
// LEFT JOIN 
// projects
// ON tasks.project_id = projects.project_id;

    const tasks = await db('tasks as t')
    .leftJoin('projects as p', 't.project_id','p.project_id')
    .select(
        't.task_id',
        't.task_description',
        't.task_notes',
        't.task_completed',
        'p.project_name',
        'p.project_description'
        )
    
    const tasks_modify = [];

    tasks.forEach( t => {
        if(t.task_completed === 0 ){
            tasks_modify.push({
                task_description:t.task_description,
                task_notes:t.task_notes,
                task_completed:Boolean(t.task_completed),
                project_name:t.project_name,
                project_description:t.project_description
            })
            return tasks_modify
        }else{
            tasks_modify.push({
                task_description:t.task_description,
                task_notes:t.task_notes,
                task_completed:Boolean(t.task_completed),
                project_name:t.project_name,
                project_description:t.project_description
            })
            return tasks_modify
        }
        
    });

    return tasks_modify
}

async function insert(task){

    const add_tasks = await db('tasks').insert(task)
    
    const created_tasks = await db('tasks')
    .where('task_id', add_tasks)
    .first()

    if(task.task_completed === 0){
        const modify_created = { 
            task_id:created_tasks.task_id_id,
            task_description:created_tasks.task_description,
            task_notes:created_tasks.task_notes,
            task_completed:Boolean(created_tasks.task_completed),
            project_id:created_tasks.project_id
        }

        return modify_created

    }else{
        const modify_created = { 
            task_id:created_tasks.task_id_id,
            task_description:created_tasks.task_description,
            task_notes:created_tasks.task_notes,
            task_completed:Boolean(created_tasks.task_completed),
            project_id:created_tasks.project_id
        }
        return modify_created
    }


}

module.exports = {
    getTaks,
    insert
}