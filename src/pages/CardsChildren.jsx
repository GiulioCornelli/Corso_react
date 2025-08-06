import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import CardItem from "../components/CardItem";
import { Link, Outlet } from "react-router-dom";


function CardsChildren (){
    const cities = useSelector((state) => state.cities.value);
    console.log(cities)

    return(
        <>
            <Navbar></Navbar>
            <h1 className="text-3xl font-bold mb-10">Pagina CardsChildren</h1>
            <div className="grid grid-cols-4 gap-5">
                {cities.map((city) => (
                    <Link to={`/cards-children/${city.id}`} key={city.id}>
                        <CardItem
                            title={city.title}
                            isVisitede={city.isVisitede}
                            imgUrl={city.imgUrl}
                            description={city.description}> 
                        </CardItem>
                    </Link>
                ))}
            </div>
            <Outlet />
        </>
    );

}

export default CardsChildren;