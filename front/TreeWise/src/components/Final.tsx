import { useEffect } from "react"
import { updatePlayer } from "../services/APIservice"

export const Final = ({playerInfo, set}: {playerInfo: {nick: string, points: number}, set:any}) => {

  useEffect(() => {

    (async () => {
      await updatePlayer(playerInfo.nick, playerInfo.points)
    })()

  }, [])

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-5">
      <h1>Parabens {playerInfo.nick}, você conseguiu {playerInfo.points} pontos!</h1>

      <button className="text-white bg-blue-900 px-5 py-2 rounded-full" onClick={() => {set(0)}}>Recomeçar</button>
    </div>
  )
}
