/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
    const { brand_img, brand_name } = brand
    return (
        <Link to={`/brand/${brand_name}`}>
            <div className="card card-compact w-96 md:w-80 lg:w-96 xl:w-[400px] mb-5 bg-slate-800 shadow-xl">
                <figure><img src={brand_img} alt="brand" className="w-full h-60" /></figure>
                <div className="card-body">
                    <h2 className="text-3xl font-bold text-center text-white">{brand_name}</h2>
                </div>
            </div>
        </Link>
    );
};

export default Brand;