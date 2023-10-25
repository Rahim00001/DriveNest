import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCar = () => {
    const car = useLoaderData()
    const { image, name, price, _id, rating, brand, type } = car;
    const handleUpdateCar = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        // const description = form.description.value;
        const rating = form.rating.value
        const updatedCar = { name, image, brand, type, price, rating };
        console.log(updatedCar);

        // send data to server site
        fetch(`http://localhost:5000/car/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success..',
                        text: 'Car updated Successfully',
                    })
                }
            })
    }
    return (
        <div className="bg-slate-400 p-28 pt-14">
            <h2 className="text-4xl font-bold text-center mb-10">Update: {name}</h2>
            <form onSubmit={handleUpdateCar}>
                {/* 1st row */}
                <div className="md:flex mb-4 gap-10">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="font-medium">Car Name</span>
                        </label>
                        <label className="">
                            <input type="text" name="name" placeholder="Car Name" autoFocus
                                defaultValue={name} className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="font-medium">Brand Name</span>
                        </label>
                        <label className="">
                            <select name="brand" id="brand" className="w-full h-11 rounded-lg text-gray-400 pl-3" defaultValue={brand}>
                                <option value="Toyota">TOYOTA</option>
                                <option value="BMW">BMW</option>
                                <option value="Audi">AUDI</option>
                                <option value="Mercedes-Benz">MARCEDES-BENZ</option>
                                <option value="Tesla">TESLA</option>
                                <option value="Ford">FORD</option>
                            </select>
                        </label>
                    </div>
                </div>
                {/* 2nd row */}
                <div className="md:flex mb-4 gap-10">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="font-medium">Photo Url</span>
                        </label>
                        <label className="">
                            <input type="text" name="image" placeholder="Image" defaultValue={image} className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="font-medium">Car type</span>
                        </label>
                        <label className="">
                            {/* <input type="text" name="type" placeholder="Type" className="input input-bordered w-full" /> */}
                            <select name="type" id="type" className="w-full h-11 rounded-lg text-gray-400 pl-3" defaultValue={type}>
                                <option value="suv">SUV</option>
                                <option value="coupe">COUPE</option>
                                <option value="sedan">SEDAN</option>
                                <option value="hatchback">HATCHBACK</option>
                            </select>
                        </label>
                    </div>
                </div>
                {/* 3rd row */}
                <div className="md:flex mb-5 gap-10">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="font-medium">Price</span>
                        </label>
                        <label className="">
                            <input type="text" name="price" placeholder="Price" defaultValue={price} className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="flex flex-col w-1/2 mx-auto justify-center mb-10">
                        <label className="label">
                            <span className="font-medium">Car Retings</span>
                        </label>
                        <select name="rating" id="rating" className="w-full h-12 rounded-lg text-gray-400 pl-3" defaultValue={rating}>
                            <option value="5">5 Star</option>
                            <option value="4">4 Star</option>
                            <option value="3">3 Star</option>
                            <option value="2">2 Star</option>
                            <option value="1">1 Star</option>
                        </select>
                    </div>
                </div>

                {/* 4th row */}
                <div className="">
                    <input type="submit" value="Update" className="btn btn-block btn-neutral" />
                </div>
            </form>
        </div>
    );
};

export default UpdateCar;