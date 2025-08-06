import { useState,useEffect, useReducer } from 'react'
import './App.css'
import Card from './components/card'
import CardForm from './components/CardForm'  
import Example from './components/Example'
import { useSelector } from 'react-redux'


function App() {
  // prende nello state i valorei di cities, immagazinati nello store
  const cities = useSelector((state)=> state.cities.value);
  console.log("Cities:", cities);

  return (
    <>
      <Example></Example>
      <CardForm></CardForm>
      <div className="grid grid-cols-4 gap-5">
        {cities.map((city)=> (
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







