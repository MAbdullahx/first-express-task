const Express = require("express")
const app = Express()


app.get("/", (req, res) => {
    req.query.search !== undefined && req.query.search !== "" ? res.status(200).json({message: "user found"}) : res.status(404).json({    message: "user not found"})
})

app.use(Express.json())

app.post("/create", (req, res) => {
    req.body.username !== "" && req.body.password !== "" ? res.status(201).json({message: "user created"}) : res.status(404).json({    message: "username and password can't be empty"})
})

app.put("/edit-username", (req, res) => {
    req.body.username !== "" ? res.status(201).json({message: "username has been changed"}) : res.status(404).json({    message: "username   can't be empty"})
})

app.delete("/delete-user", (req, res) => {
    req.query.id !== ""  && req.query.id !== undefined ? res.status(201).json({message: "user deleted"}) : res.status(404).json({    message: "id can't be empty"})
})

app.listen(8080, () => {
    console.log("Listening")
})