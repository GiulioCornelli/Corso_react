// import per creare uno stato in react
import { useState } from "react";
import { useDispatch } from "react-redux";



function CardForm({addCity}){
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        nome:"",
        description:"",
        imgUrl:"",
        isVisitede: false
    })

    const handleInputChange = (e)=> {
        const {name,value,type,checked} = e.target;
        const inputValue = type == "checkbox" ? checked : value // in base al tipo di input cambia cosa adrà a prendere
        setFormData({
            ...formData,[name]:inputValue,
        });
    };

    const handleSubmit = (e)=> {
        e.preventDefault();
        const city = {
            id: Math.random(),
            titol: formData.nome,
            description: formData.description,
            imgUrl: formData.imgUrl,
            isVisitede: formData.isVisitede
        }
        setFormData({
            nome:"",
            description:"",
            imgUrl:"",
            isVisitede: false
        })
        dispatch(add(city));
    }
    return(
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80 mb-10 p-5 rounded-lg bg-zinc-900">
            <div className="bg-gray-500 flex flex-col">
                <label>Nome</label>
                <input type="text" name="nome" value={formData.name} onChange={handleInputChange}/>
            </div>
            <div className="bg-gray-500 flex flex-col">
                <label>descrizione</label>
                <textarea name="description" value={formData.description} onChange={handleInputChange}/>
            </div>
            <div className="bg-gray-500 flex flex-col">
                <label>Immagine</label>
                <textarea name="imgUrl" value={formData.imgUrl} onChange={handleInputChange}/>
            </div>
            <div className="flex flex-col">
                <label>Visitata?</label>
                <input type="checkbox" name="isVisitede" checked={formData.isVisitede} onChange={handleInputChange}/>
            </div>
            <button className="bg-fuchsia-400 text-purple-400" type="submit">Aggiungi Card</button>
        </form>
    );

}


export default CardForm;