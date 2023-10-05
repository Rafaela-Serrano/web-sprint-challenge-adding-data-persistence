// build your `/api/tasks` router here
const router = require("express").Router()

const tasksModel = require("./model")

router.get("/", async (req,res,next) => {
    try{

        const tasks = await tasksModel.getTaks()
        res.json(tasks)

    }catch(err){ next(err) }
})

router.post("/", async (req, res, next) => {
    try{
        const task = req.body

        const added = await tasksModel.insert(task)

        res.json(added)

    }catch(err){next(err)}
})
module.exports = router

