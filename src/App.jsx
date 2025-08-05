import { useState,useEffect, useReducer, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import CardForm from './components/CardForm'  
import Example from './components/Example'
import { ProvaContext } from './stores/ProvaContext'


function hadleClick(){
    alert("coglione");
}
function hadleChange(e){
    console.log(e.target.value);
}

function formReducer(state, action){
    switch(action.type){
      case "CHANGE_FILDE":
        return {...state, [action.field]: action.value};
      case "RESET_FORM":
        return {name: '', email: ''};
      default:
        return state;
    }
}


function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([]);
  const [formState,dispechFormState] = useReducer(formReducer, {name: '', email: ''});

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
    }
  ]);

  const addCity = (city) =>{
    setCity([...citys, city]);
  }

  const handleFieldChange = (field, value) =>{
    //dispechFormState richiama la modifica, mentre formReducer e' la logica per modificare il campo
    dispechFormState({type: "CHANGE_FILDE", field, value})
  }

  const resetForm = ()=>{
    dispechFormState({type: "RESET_FORM", })
  }
  const sendForm = (e)=>{
    e.preventDefault();
    console.log(formState);
  }



  // useEffect(()=>{
  //       //esegue una rischiesta http, aspetta e trasforma la chiamata in json , successivamente trasforma lo statoi date nel json ricevuto
  //       fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((res)=> res.json())
  //       .then((data)=> {setData(data); console.log(data)})
  //   },[]); 

  return (
    < ProvaContext.Provider value={{count, setCount}}>
      <Example></Example>
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
      {/* <div className="grid grid-cols-4 gap-5">
        {data.map((item)=> (
          <div key={item.id} className='bg-slate-400 rounded-lg p-3 text-black'>
              <p>userid: {item.userId}</p>
              <p>title: {item.title}</p>
              <p>body: {item.body}</p>
          </div>
        ))}
      </div> */}
      <form>
        <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" name='name' id='name' value={formState.name} onChange={(e)=> handleFieldChange("name", e.target.value)}/>
        </div>
        <div>
            <label htmlFor="name">Email:</label>
            <input type="email" name='email' id='email' value={formState.email} onChange={(e)=> handleFieldChange("name", e.target.value)}/>
        </div>
        <button onClick={resetForm}>Reset</button>
        <button onClick={sendForm}>Invia</button>
      </form>
    </ProvaContext.Provider>
  )
}
export default App







