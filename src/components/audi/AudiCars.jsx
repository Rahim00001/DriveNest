import { useLoaderData } from "react-router-dom";

const AudiCars = () => {
    const audi = useLoaderData();
    const audiCars = audi.filter(car => car.brand == "Audi")
    return (
        <div>
            <h1>Audi cars: {audiCars.length}</h1>
        </div>
    );
};

export default AudiCars;