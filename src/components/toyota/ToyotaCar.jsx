/* eslint-disable react/prop-types */
// import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ToyotaCar = ({ cars }) => {
    const { brand, image, name, price, rating, type, description, _id } = cars;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="car" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">
                        <div className="mr-1 text-lg">{rating}</div>
                        <div className="text-xl text-yellow-300"><FaStar></FaStar></div>
                    </div>
                </h2>
                <p>{description}</p>
                <p className="text-lg">{`price:${price}$`}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline bg-green-400 text-white font-medium">{brand}</div>
                    <div className="badge badge-outline bg-yellow-400 text-white font-medium">{type}</div>
                </div>
                <div className="flex justify-center gap-5">
                    <Link to={`/detiles/${_id}`}><button className="btn btn-outline btn-primary">Detiles</button></Link>
                    <Link to={`/update/${_id}`}> <button className="btn btn-outline btn-secondary">Update</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ToyotaCar;