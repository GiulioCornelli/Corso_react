import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import CardForm from './components/CardForm'  


function hadleClick(){
    alert("coglione");
}
function hadleChange(e){
    console.log(e.target.value);
}


function App() {
  const [count, setCount] = useState(0)

  // abbiamo trasformato l'array in uno stato
  const [citys, setCity] = useState([
    {
      id: 1,
      titol: "Tokyo", 
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, delectus?",
      imgUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisitede: false
    },
    {
      id: 2,
      titol: "New York",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, delectus?",

      imgUrl: "https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisitede: true
    },
    {
      id: 3,
      titol: "Paris",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, delectus?",

      imgUrl: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisitede: true
    },
    {
      id: 4,
      titol: "London",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, delectus?",
      imgUrl: "https://images.unsplash.com/photo-1494922275507-58dc039ed337?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisitede: true
    },
    {
      id: 5,
      titol: "Rome",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, delectus?",
      imgUrl: "https://images.unsplash.com/photo-1603199766980-fdd4ac568a11?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisitede: false
    },
    {
      id: 6,
      titol: "Venice",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, delectus?",
      imgUrl: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=766&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisitede: true
    },
    {
      id: 7,
      titol: "Singapore",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, delectus?",
      imgUrl: "https://images.unsplash.com/photo-1555217851-6141535bd771?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisitede: false
    }
  ]);

  const addCity = (city) =>{
    setCity([...citys, city]);
  }

  return (
    <>
      <CardForm addCity={addCity}></CardForm>
      <div className="grid grid-cols-4 gap-5">
        {/* map() metodo per array che prende ogni elemeto della citta */}
        {citys.map((city)=> (
          <Card 
            key={city.id}
            titol={city.titol} 
            imgUrl={city.imgUrl} 
            isVisitede={city.isVisitede}
            description={city.description}>
          </Card>
        ))}
      </div>


       {/* <div className="card">
        <button onClick={hadleClick}>alert</button>
        <input type='text' onChange={hadleChange}/>
      </div> */}

    </>
  )
}
export default App







