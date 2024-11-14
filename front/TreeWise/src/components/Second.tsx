import { useState } from "react"

export const Second = ({question, img, pergun, alter, playerInfo, setPlayer, set, actual}: {question: string, img: string, playerInfo: {nick: string, points: number}, pergun: string, alter: Array<{text: string, cer: boolean}>, set: any, actual: number, setPlayer: any}) => {

  const [questionSelected, setQuestionSelected] = useState({
    num: 0,
    cer: false
  })

  const handleDecision = (questionNumber: number, certa: boolean) => {
    setQuestionSelected({num: questionNumber, cer: certa})
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <p className="absolute top-3 left-3">Pergunta {question}</p>
      <button className="absolute bottom-5 right-5 bg-blue-900 text-white px-5 py-2 rounded-full disabled:opacity-25 disabled:cursor-not-allowed" disabled={!questionSelected}>Responder</button>

      <div className="absolute left-5 bottom-5">
        <p className="font-bold text-blue-900">{playerInfo.nick}</p>
        <p>Pontos: {playerInfo.points}</p>
      </div>

      <div className="w-1/2 flex flex-col gap-8">
        <div className="w-1/3 self-center">
          <img src={img} alt="" className="w-full h-full" />
        </div>

        <p>{pergun}</p>

        <div className="flex items-center gap-6">
          {alter.map((value, index) => (
            <p onClick={() => {
              handleDecision(1, value.cer) 
              if(value.cer) {
                setPlayer({
                  nick: playerInfo.nick,
                  points: playerInfo.points + 100
                })
              }
              alert(value.cer ? "Acertou": "Errou")
              set(actual+1)
            }} className="border border-blue-900 w-1/2 py-2 text-center rounded cursor-pointer hover:bg-blue-900 hover:text-white">{index + 1} - {value.text}</p>
          ))}
        </div>
      </div>

    </div>
  )
}
