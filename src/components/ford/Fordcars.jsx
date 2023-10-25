import { useLoaderData } from "react-router-dom";

const Fordcars = () => {
    const ford = useLoaderData();
    const fordCars = ford.filter(car => car.brand == "Ford");
    console.log(fordCars);
    return (
        <div className="flex flex-col h-[50vh] justify-center">
            <h1 className="text-center text-7xl font-bold mb-5">Sorry..</h1>
            <h1 className=" text-center text-4xl">No Car Found</h1>
        </div>
    );
};

export default Fordcars;