import { useLoaderData } from "react-router-dom";
import ToyotaCar from "../toyota/ToyotaCar";

const AudiCars = () => {
    const audi = useLoaderData();
    const audiCars = audi.filter(car => car.brand == "Audi")
    return (
        <div className="w-5/6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-10">
                {
                    audiCars.map(cars => <ToyotaCar key={cars._id} cars={cars}></ToyotaCar>)
                }
            </div>
        </div>
    );
};

export default AudiCars;