import { useLoaderData } from "react-router-dom";
import ToyotaCar from "../toyota/ToyotaCar";

const MarcedesCars = () => {
    const ford = useLoaderData();
    const marcedeseCars = ford.filter(car => car.brand == "Mercedes-Benz");
    console.log(marcedeseCars);
    return (
        <div className="w-5/6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-10">
                {
                    marcedeseCars.map(cars => <ToyotaCar key={cars._id} cars={cars}></ToyotaCar>)
                }
            </div>
        </div>
    );
};

export default MarcedesCars;