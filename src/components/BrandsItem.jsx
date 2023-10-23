import { useEffect, useState } from "react";

const BrandsItem = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/car`)
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <div>
            <h2>this is brand item: {cars.length}</h2>
        </div>
    );
};

export default BrandsItem;