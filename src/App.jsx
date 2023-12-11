import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "./assets/vite.svg"
import "./App.css"
import Modal from "./Modale"

function App() {
  const [count, setCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          buttonColor="red"
          modalWidth="30%"
          modalHeight="400px"
          text="Le texte de la Modale"
          textColor="black"
          textSize="1.5em"
          modalBG="white"
        />
      )}
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
