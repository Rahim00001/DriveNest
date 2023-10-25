import { useLoaderData } from "react-router-dom";

const MarcedesCars = () => {
    const ford = useLoaderData();
    const marcedeseCars = ford.filter(car => car.brand == "Mercedes-Benz");
    console.log(marcedeseCars);
    return (
        <div>
            <h1>This is MArcedes: {marcedeseCars.length}</h1>
        </div>
    );
};

export default MarcedesCars;