import { useLoaderData } from "react-router-dom";

const Fordcars = () => {
    const ford = useLoaderData();
    const fordCars = ford.filter(car => car.brand == "Ford");
    console.log(fordCars);
    return (
        <div>
            <h1>This is ford: {fordCars.length}</h1>
        </div>
    );
};

export default Fordcars;