function CardForm({addCity}){
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
        <form className="flex flex-col gap-3 w-80 mb-10">
            <input className="bg-gray-500" type="text" />
            <input className="bg-gray-500" type="text" />
            <input className="bg-gray-500" type="text" />
            <button type="submit">Aggiungi Card</button>
        </form>
    );

}


export default CardForm;