import './App.css'
// import { First } from './components/First'
import { Second } from './components/Second'
import img1 from "./assets/img1.png"
import img2 from "./assets/img2.png"
import img3 from "./assets/img3.png"
import img4 from "./assets/img4.png"
import img5 from "./assets/img5.png"
import { useState } from 'react'
import { First } from './components/First'
import { Final } from './components/Final'

const quiz = [
  {pergun: "Considerando a figura acima, pode-se concluir que é:",
    alter: [
      {
        text: "Uma árvore binária",
        cer: false
      },
      {
        text: "Uma árvore ordenada",
        cer: false
      },
      {
        text: "Um grafo",
        cer: true
      },
      {
        text: "Uma árvore rubo negra",
        cer: false
      },
    ]
  },
  {pergun: "Considerando a árvore acima, o nó C é:",
    alter: [
      {
        text: "Filho do nó D",
        cer: false
      },
      {
        text: "Pai do nó D",
        cer: true
      },
      {
        text: "Avó do nó B",
        cer: false
      },
      {
        text: "Pai do nó A",
        cer: false
      },
    ]
  },
  {pergun: "Considerando a árvore acima, qual o maior grau encontrado?:",
    alter: [
      {
        text: "1",
        cer: false
      },
      {
        text: "2",
        cer: true
      },
      {
        text: "3",
        cer: false
      },
      {
        text: "4",
        cer: false
      },
    ]
  },
  {pergun: "Para adicionar um novo nó na árvore, pode-se usar o seguinte recurso computacional:",
    alter: [
      {
        text: "Um vetor",
        cer: false
      },
      {
        text: "Uma matriz",
        cer: false
      },
      {
        text: "Uma lista",
        cer: false
      },
      {
        text: "Uma função recursiva",
        cer: true
      },
    ]
  },
  {pergun: "Considerando a árvore acima, qual é o nó raiz?:",
    alter: [
      {
        text: "A",
        cer: true
      },
      {
        text: "B",
        cer: false
      },
      {
        text: "C",
        cer: false
      },
      {
        text: "D",
        cer: false
      },
    ]
  },

]


function App() {
  
  const [player, setPlayer] = useState({
    nick: "",
    points: 0
  })

  const [actual, setActual] = useState(0)

  const questions = [
    <First set={setActual} setPlayer={setPlayer} />,
    <Second img={img1} alter={quiz[0].alter} pergun={quiz[0].pergun} question='1' playerInfo={player} set={setActual} actual={actual} setPlayer={setPlayer}/>,
    <Second img={img2} alter={quiz[1].alter} pergun={quiz[1].pergun} question='2' playerInfo={player} set={setActual} actual={actual} setPlayer={setPlayer}/>,
    <Second img={img3} alter={quiz[2].alter} pergun={quiz[2].pergun} question='3' playerInfo={player} set={setActual} actual={actual} setPlayer={setPlayer}/>,
    <Second img={img4} alter={quiz[3].alter} pergun={quiz[3].pergun} question='4' playerInfo={player} set={setActual} actual={actual} setPlayer={setPlayer}/>,
    <Second img={img5} alter={quiz[4].alter} pergun={quiz[4].pergun} question='5' playerInfo={player} set={setActual} actual={actual} setPlayer={setPlayer}/>,
    <Final playerInfo={player} set={setActual}/>
  ]

  return (
    <>
      {questions[actual]}
    </>
  )
}

export default App
