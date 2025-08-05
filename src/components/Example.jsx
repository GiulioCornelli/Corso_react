import { data } from "autoprefixer";
import { useState,useEffect, useContext } from "react";
import { ProvaContext } from "../stores/ProvaContext";

function Example (){
    const {count,setCount} = useContext(ProvaContext)

    useEffect(()=>{
        document.title = `Conteggio ${count}`;
    },[count]); 


    return (
        <div>
            <p>Conteggio: {count}</p>
            <button onClick={()=> setCount(count + 1 )}>Incrementa</button>
        </div>
    );

}

export default Example