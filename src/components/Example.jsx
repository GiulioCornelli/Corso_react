import { data } from "autoprefixer";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/slices/counterSlice";

function Example (){
    const count = useSelector((state) => state.counter.value );
    const dispatch = useDispatch();

    return (
        <div>
            <p className="mb-3">Conteggio: {count}</p>
            <button aria-label="Increment value" onClick={()=> dispatch(increment())}>Incrementa+</button>
            <button aria-label="Decrement value" onClick={()=> dispatch(decrement())}>Decrementa-</button>
        </div>
    );

}

export default Example