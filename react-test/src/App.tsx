import { useState } from 'react'
import { uStore } from '@waelio/ustore';
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const label = "test"
  const payload = "ustore payload"
  uStore.local.set(label, payload)
  const test = uStore.local.get(label)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>        
      </div>
      <h4>Test: {label} = {test}</h4>
    </div>
  )
}

export default App
