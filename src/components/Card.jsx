// pezzo di interfaccia grafica con titolo descrizione immagini (es un film su netflix)


function Card(props, children) {  
  const titol = props.titol
  
  const imgUrl = props.imgUrl

  return (
    <>      
    <div className="rounded-md bg-zinc-800 ">
        <img
          src={imgUrl}
          alt=""
        ></img>
        <div className="flex flex-col p-4">
          <h2 className="text-2xl text-white font-bold">{titol}</h2>
          <p className="text-gray-500">{children}</p>
        </div> 
    </div>  
    </>
  );
}

export default Card;