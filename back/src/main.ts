import express from "express"
import router from "./routes"
import path from "path"

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(path.join(__dirname, "../../front/TreeWise/dist")))

app.use(router)

app.listen(3000, () => {
  console.log("http://localhost:3000")
})

// hBaUrXHUkcr2ZVmT
// user: threewise991