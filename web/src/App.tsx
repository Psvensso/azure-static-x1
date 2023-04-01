import { useState,  useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState("")
  const getIt = useCallback(()=>{
    fetch("/api/helloWorld").then(x => x.text()).then((r)=> setCount(r));
  }, []);
  return (
    <div className="App">
      <div className="card">
        <button onClick={getIt}>
          helloWorld
        </button><br/>
        {count}
      </div>
    </div>
  )
}

export default App
