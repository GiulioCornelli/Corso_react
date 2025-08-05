import { useState,useEffect, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import CardForm from './components/CardForm'  
import Example from './components/Example'


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
  return (
    <>
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
    </>
  )
}
export default App







