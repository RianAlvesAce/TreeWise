import express from "express"
import ChosenNameByFile from "./utils/ChosenNameByFile"
import { createNewPlayer, getAll, searchPlayer, updatePlayer } from "./db/dbClient"
import path from "path"
const router = express.Router()

router.get("/getName", async (req, res) => {
  
  
  let name: string = ""
  
  let isValidNick = false
  
  while(!isValidNick) {
    let nameWhile: string[] | string = []
    
    for(let i = 1; i <= 2; i++) {
      nameWhile.push(await ChosenNameByFile(`name-base${i}.json`))
    }

    nameWhile = nameWhile.join(" ")

    if(await searchPlayer(name)) {
      continue
    } else {
      isValidNick = true
      name = nameWhile
    }
  }

  await createNewPlayer(name)
  
  res.json({name})
})

router.put("/updateUser", async (req, res) => {
  
  const {playerNick, newPoints} = req.body

  try {
    await updatePlayer(playerNick, newPoints)
    res.status(200).send("usuario atualizado com sucesso")
  } catch(err) {
    res.status(400).send("Erro ao atualizar usuario")
  }

})

router.get("/getAllPlayers", async (req, res) => {

  res.json(await getAll())

})

router.get("/front", (req, res) => {
  res.sendFile(path.join(__dirname, "../../front/TreeWise/dist/index.html"))
})

export default router