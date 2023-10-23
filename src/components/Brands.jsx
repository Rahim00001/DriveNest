import { useEffect, useState } from "react";
import Brand from "./Brand";

const Brands = () => {

    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('brands.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])


    return (
        <div className="mb-14">
            <div className="text-center w-3/4 mx-auto">
                <h2 className=" text-4xl md:text-5xl font-bold mb-4">Populer Brands: {brands.length}</h2>
                <p className="mb-10">Car manufacturers around the world offer a diverse array of options to cater to every drivers unique preferences and needs. From the renowned reliability of Toyota to the performance-driven luxury of BMW and Mercedes-Benz, theres a brand to match every lifestyle.</p>
            </div>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-11/12 mx-auto md:pl-3 lg:pl-12 xl:pl-8">
                {
                    brands.map(brand => <Brand key={brand.id} brand={brand}></Brand>)
                }
            </div>
        </div>
    );
};

export default Brands;