import { useLoaderData } from "react-router-dom";

const TeslaCars = () => {
    const ford = useLoaderData();
    const teslaCars = ford.filter(car => car.brand == "Tesla");
    console.log(teslaCars);
    return (
        <div>
            <h1>This is tesla: {teslaCars.length}</h1>
        </div>
    );
};

export default TeslaCars;