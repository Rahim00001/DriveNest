import { useLoaderData } from "react-router-dom";

const BmwCars = () => {
    const bmw = useLoaderData();
    const bmwCars = bmw.filter(car => car.brand == "BMW");
    console.log(bmwCars);
    return (
        <div>
            <h1>This is bmw: {bmwCars.length}</h1>
        </div>
    );
};

export default BmwCars;