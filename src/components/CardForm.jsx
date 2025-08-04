// import per creare uno stato in react
import { useState } from "react";



function CardForm({addCity}){
    const [formData, setFormData] = useState({
        nome:"",
        description:"",
        imgUrl:"",
        isVisitede: false
    })

    const handleSubmit = ()=> {
        const city = {
            id: 8,
            titol: "Sydney",
            imgUrl: "https://images.unsplash.com/photo-1542223616-9de9adb5e3e8?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            isVisitede: false
        }
        addCity(city);
    }
    return(
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80 mb-10 p-5 rounded-lg bg-zinc-900">
            <div className="bg-gray-500 flex flex-col">
                <label>Nome</label>
                <input type="text" name="nome"/>
            </div>
            <div className="bg-gray-500 flex flex-col">
                <label>descrizione</label>
                <input type="text" name="descrizione"/>
            </div>
            <div className="bg-gray-500 flex flex-col">
                <label>Immagine</label>
                <input type="text" nome="imgUrl"/>
            </div>
            <div className="bg-gray-500 flex flex-col">
                <label>Immagine</label>
                <input type="checkbox" nome="isVisitede"/>
            </div>
            <button className="bg-fuchsia-400" type="submit">Aggiungi Card</button>
        </form>
    );

}


export default CardForm;