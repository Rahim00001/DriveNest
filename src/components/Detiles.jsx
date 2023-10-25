import { Link, useLoaderData } from "react-router-dom";

const Detiles = () => {
    const car = useLoaderData();
    const { image, name, price, brand, type, description } = car;
    return (
        <div className="flex justify-center">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="flex">
                        <p className="text-lg text-blue-600 font-bold">{brand}</p>
                        <p className="text-lg text-green-600 font-bold">{type}</p>
                    </div>
                    <p className="text-xl">{`Price: ${price}$`}</p>
                    <p>{description}</p>
                    <div className="card-actions justify-center">
                        <Link to='/mycart'><button className="btn btn-outline">Add To Cart</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detiles;