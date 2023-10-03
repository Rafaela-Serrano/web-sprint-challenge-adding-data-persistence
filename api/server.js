// build your server here and require it from index.js
const express = require("express")

const projectsRouter = require("../api/project/router")
const resourcesRouter = require("../api/resource/router")
const tasksRouter = require("../api/task/router")

const server = express()

server.use(express.json())

server.use("/api/projects", projectsRouter)
server.use("/api/resources", resourcesRouter)
server.use("/api/tasks", tasksRouter)

server.use("*", (req, res)=>{
    res.json({ api : "fallback" })
})

module.exports = server 
