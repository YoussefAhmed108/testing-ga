import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'

function App() {
  const [count, setCount] = useState(0)
  const block = {
    headline:"Test",
    paragraph : "Testing",
    number1: "34",
    sub_headline_1:"Trials",
    sub_paragraph_1:"Sub Text Test",
    number2: "1000",
    sub_headline_2:"Trials",
    sub_paragraph_2:"Sub Text Test",
    number3: "34",
    sub_headline_3:"Trials",
    sub_paragraph_3:"Sub Text Test",
  }
  return (
    <Routes>
      <Route path='/' element={<FirstPage/>}/>
      <Route path='/second' element={<SecondPage/>}/>
    </Routes>
  )
}

export default App
