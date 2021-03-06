const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

app.use(express.json())
app.use(morgna("dev"))

mongoose.connect("mongodb://localhost:/27017/paintingApp",
    {   useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("connected to the database"))

app.use("/interior", require("./routes/interiorRouter.js"))
app.use("/exterior", require("./routes/exteriorRouter.js"))

app.listen(9000, () => {
    console.log("successfully running on port 9000")
})