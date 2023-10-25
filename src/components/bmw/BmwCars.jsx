import { useLoaderData } from "react-router-dom";
import ToyotaCar from "../toyota/ToyotaCar";

const BmwCars = () => {
    const bmw = useLoaderData();
    const bmwCars = bmw.filter(car => car.brand == "BMW");
    console.log(bmwCars);
    return (
        <div className="w-5/6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-10">
                {
                    bmwCars.map(cars => <ToyotaCar key={cars._id} cars={cars}></ToyotaCar>)
                }
            </div>
        </div>
    );
};

export default BmwCars;