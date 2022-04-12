const express =require("express")
const userRoute = require("./routes/usersRoutes")
const path = require("path");
const logger = require("./middlewares/user.logger")
const booksRoute = require("./routes/booksRoute")

const app = express()

//middlewares
app.use(express.json());
app.use(logger)
app.use(userRoute);
app.use(booksRoute)

//home route
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + "/pages/index.html"))
})

app.get("/*", (req, res)=>{
    res.status(400).sendFile(path.join(__dirname + "/pages/404.html"))
})


const PORT = 5000;

app.listen(PORT, ()=>{
    console.log("SERVER IS UP")
})


