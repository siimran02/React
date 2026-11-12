import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
    <Card themename="Nature"/>
    <Card image="https://images.pexels.com/photos/37832264/pexels-photo-37832264.jpeg"/>
    <Card />
    </>
  )
}

export default App
 