// build your `/api/resources` router here
const router =require("express").Router()

const resourceModule = require("./model")

router.get("/", async (req,res,next) => {
    try{
        const resources = await resourceModule.getAll()
        res.json(resources)

    } catch(err){ next(err) }

})

router.post("/", async (req,res,next) => {
    try{
        const resource = req.body 

        const add_resource = await resourceModule.insert(resource)

        res.status(201).json(add_resource)

    }catch(err) { next(err) }
})

module.exports = router
