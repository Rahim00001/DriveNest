import { useLoaderData } from "react-router-dom";
import ToyotaCar from "../toyota/ToyotaCar";

const TeslaCars = () => {
    const ford = useLoaderData();
    const teslaCars = ford.filter(car => car.brand == "Tesla");
    console.log(teslaCars);
    return (
        <div className="w-5/6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-10">
                {
                    teslaCars.map(cars => <ToyotaCar key={cars._id} cars={cars}></ToyotaCar>)
                }
            </div>
        </div>
    );
};

export default TeslaCars;