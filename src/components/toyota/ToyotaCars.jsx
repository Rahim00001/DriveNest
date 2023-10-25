import { useLoaderData } from "react-router-dom";
import ToyotaCar from "./ToyotaCar";

const ToyotaCars = () => {
    const toyota = useLoaderData();
    const toyotaCars = toyota.filter(car => car.brand == 'Toyota');
    console.log(toyotaCars);

    return (
        <div className="w-5/6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-10">
                {
                    toyotaCars.map(cars => <ToyotaCar key={cars._id} cars={cars}></ToyotaCar>)
                }
            </div>
        </div>
    );
};

export default ToyotaCars;