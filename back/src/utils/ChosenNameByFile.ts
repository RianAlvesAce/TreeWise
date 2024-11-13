import { randomInt } from "crypto"
import { readFileSync } from "fs"
import path from "path"

export default async (fileName: string) => {
  const file = await readFileSync(path.join(__dirname, "..", fileName), {encoding: "utf-8"})
  const jsonData: Array<{name: string}> = JSON.parse(file)
  return jsonData[randomInt(jsonData.length)].name
}