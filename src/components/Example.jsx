import { data } from "autoprefixer";
import { useState,useEffect } from "react";

function Example (){
    const [count, setCount] = useState(0);
    // e' una funzione che vine chiamta ogni volta che le sue dipendeze(in questo caso count) vengono modificate
    useEffect(()=>{
        document.title = `Conteggio ${count}`;

        // //esegue una rischiesta http, aspetta e trasforma la chiamata in json , successivamente trasforma lo statoi date nel json ricevuto
        // fetch("https://jsonplaceholder.typicode.com/posts").then((res)=> res.json()).then((data)=> {setData(data); console.log(data)})
    },[]); 


    return (
        <div>
            <p>Conteggio: {count}</p>
            <button onClick={()=> setCount(count + 1 )}>Incrementa</button>
        </div>
    );

}

export default Example