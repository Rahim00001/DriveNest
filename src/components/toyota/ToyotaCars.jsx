import { useLoaderData } from "react-router-dom";

const ToyotaCars = () => {
    const toyota = useLoaderData();
    const toyotaCars = toyota.filter(car => car.brand == 'Toyota');
    console.log(toyotaCars);

    return (
        <div>
            <h1>{toyotaCars.length}</h1>
        </div>
    );
};

export default ToyotaCars;