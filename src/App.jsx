import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'  


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="grid grid-cols-4 gap-5">
        <Card 
          titol="Tokyio"
          imgUrl="https://plus.unsplash.com/premium_photo-1661902398022-762e88ff3f82?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi placeat facere sapiente
        </Card>
          
        <Card 
          titol="Paris" 
          imgUrl="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi placeat facere sapiente
        </Card>
        <Card 
          titol="New York" 
          imgUrl="https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi placeat facere sapiente
        </Card>
        <Card 
          titol="London" 
          imgUrl="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi placeat facere sapiente
        </Card>
      </div>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      
    </>
  )
}

export default App
