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
        const newCar = { name, image, brand, type, price, description };
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
                            <span className="label-text">Car Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Car Name" autoFocus className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* 2nd row */}
                <div className="md:flex mb-4 gap-10">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Image" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Car type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="type" placeholder="Type" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* 3rd row */}
                <div className="md:flex mb-5 gap-10">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* 4th row */}
                <div className="flex justify-center mb-5">
                    <div className="rating">
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-400" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-400" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-400" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-400" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-400" />
                    </div>
                </div>
                {/* 5th row */}
                <div className="">
                    <input type="submit" value="Add Car" className="btn btn-block" />
                </div>
            </form>
        </div>
    );
};

export default AddCar;