import {useState } from 'react'
import { genNewPlayer, getName } from '../services/APIservice'
import "./First.css"

export const First = ({set, setPlayer}: {set: any, setPlayer: any}) => {

  const [nick, setNick] = useState("")
  const [isGenerate, setIsGenerate] = useState(false)

  const handleCreateName = async () => {
    setIsGenerate(true) 
    const player = await getName()
    setIsGenerate(false) 
    setNick(player.name)
  }

  return (
    <div className='w-full max-h-screen h-screen flex flex-col border border-red-500 justify-center items-center gap-8'>
      <div className={`${isGenerate ? "nickArea" : ""} w-28 min-h-5 border border-cyan-400 rounded flex justify-center items-center`}>
        <p>{!isGenerate && nick}</p>
      </div>
      <button className='bg-green-400 text-white px-5 py-1 rounded-full' onClick={handleCreateName}>Criar Nickname</button>
      <div className='flex gap-5 items-center'>
        <button className='bg-blue-900 text-white px-5 py-1 rounded-full disabled:opacity-25 disabled:cursor-not-allowed' disabled={!nick}onClick={async () => {
          setPlayer({
            nick: nick,
            points: 0
          })
          set(1)
          await genNewPlayer(nick)
        }}>Iniciar Quiz!</button> 
        <p className='text-blue-900'>Crie seu nickname antes de iniciar</p> 
      </div>
    </div>
  )
}
