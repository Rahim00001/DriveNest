import Swal from "sweetalert2";
const AddCar = () => {
    const handleAddCar = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating
        const newCar = { name, image, brand, type, price, description, rating };
        console.log(newCar);

        // send data to server site
        fetch('http://localhost:5000/car', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success..',
                        text: 'Car added Successfully',
                    })
                }
            })
    }
    return (
        <div className="bg-slate-400 p-28 pt-14">
            <h2 className="text-4xl font-bold text-center mb-10">Please add a Car</h2>
            <form onSubmit={handleAddCar}>
                {/* 1st row */}
                <div className="md:flex mb-4 gap-10">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="font-medium">Car Name</span>
                        </label>
                        <label className="">
                            <input type="text" name="name" placeholder="Car Name" autoFocus className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="font-medium">Brand Name</span>
                        </label>
                        <label className="">
                            <select name="brand" id="brand" className="w-full h-11 rounded-lg text-gray-400 pl-3">
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
                            <input type="text" name="image" placeholder="Image" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="font-medium">Car type</span>
                        </label>
                        <label className="">
                            {/* <input type="text" name="type" placeholder="Type" className="input input-bordered w-full" /> */}
                            <select name="type" id="type" className="w-full h-11 rounded-lg text-gray-400 pl-3">
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
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="font-medium">Short Description</span>
                        </label>
                        <label className="">
                            <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                {/* 4th row */}
                <div className="flex flex-col w-1/2 mx-auto justify-center mb-10">
                    <label className="label">
                        <span className="font-medium">Car Retings</span>
                    </label>
                    <select name="rating" id="rating" className="w-full h-12 rounded-lg text-gray-400 pl-3">
                        <option value="5">5 Star</option>
                        <option value="4">4 Star</option>
                        <option value="3">3 Star</option>
                        <option value="2">2 Star</option>
                        <option value="1">1 Star</option>
                    </select>
                </div>
                {/* 5th row */}
                <div className="">
                    <input type="submit" value="Add Car" className="btn btn-block btn-neutral" />
                </div>
            </form>
        </div>
    );
};

export default AddCar;