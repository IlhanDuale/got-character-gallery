import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CharacterGallery from './components/CharacterGallery.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
      <div data-test='app-container'>
        <h1 className="site-title" data-test='site-title'>A Song of Fire and Ice</h1>
        <CharacterGallery />
      </div>
    </>
  )
}

export default App
