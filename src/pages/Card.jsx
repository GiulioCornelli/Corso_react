import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar"

function Card(){
    // prende il valore che li passiamo dal linck, inquesto caso id 
    const { cardID } = useParams();
    console.log(cardID);

    const cities = useSelector(
        (state) => state.cities.value.filter((city) => city.id == cardID.toString())
    );

    console.log(cities)

    return(
        <>
            <Navbar></Navbar>
            <h1 className="text-3xl font-bold">{cities[0].name}</h1>
            <div>
                {
                    cities[0].isVisited && (<span className="text-purple-400"> ✔️ visitata</span> )
                }
                {
                    !cities[0].isVisited && (<span className="text-purple-400"> ✖️ non visitata</span>)
                }
            </div>
            <img src={cities[0].imgUrl} alt="" className="rounded-t-md" width="400" />
        </>
    );

}

export default Card;