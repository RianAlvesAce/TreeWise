import {useState } from 'react'
import { getName } from '../services/APIservice'

export const First = () => {

  const [nick, setNick] = useState("")

  const handleCreateName = async () => {
    const player = await getName()
    setNick(player.name)
  }

  return (
    <div className='w-full max-h-screen h-screen flex flex-col border border-red-500 justify-center items-center'>
      <p>{nick}</p>
      <button onClick={handleCreateName}>Criar nome</button>
      <div>
        <button>Iniciar Quiz!</button> 
        <p>Crie seu nickname antes de iniciar</p> 
      </div>
    </div>
  )
}
