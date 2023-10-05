// build your `/api/projects` router here
const router = require("express").Router()

const projectsModule = require("./model")

router.get("/", async (req, res, next) => {
    try{
        const projects = await projectsModule.getAll()
        res.json(projects)    
    } catch(err) { next(err) }
})

router.post("/", async (req, res, next) => {
    try{

        const project = req.body 

        const add_project = await projectsModule.insert(project)

        res.status(201).json(add_project)


    }catch(err) { next(err) }
})

module.exports = router