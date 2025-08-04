// pezzo di interfaccia grafica con titolo descrizione immagini (es un film su netflix)


function Card({ titol, imgUrl, isVisitede, description }) {  
  return (
    <>      
    <div className="rounded-md bg-zinc-950 ">
        <img  src={imgUrl} alt=""></img>
        <div className="flex flex-col p-4">
          <h2 className="text-2xl text-purple-400  font-bold">{titol}</h2>
          <p className="text-gray-500">{description}</p>
          {/* <span className="text-purple-400">{isVisitede? "✔️ visitata" :"✖️ non visitata"}</span> */}
          {isVisitede &&  <span className="text-purple-400"> ✔️ visitata</span> }
          {!isVisitede &&  <span className="text-purple-400"> ✖️ non visitata</span> }
        </div> 
    </div>  
    </>
  );
}

export default Card;