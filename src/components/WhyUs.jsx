import { IoCarSportOutline } from "react-icons/io5";
import { MdOutlineDiscount } from "react-icons/md";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
const WhyUs = () => {
    return (
        <div className="mb-14">
            <h1 className="text-5xl text-center font-bold mb-7">Why Choose Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-5/6 mx-auto gap-5 rounded-xl p-5" style={{ backgroundImage: 'url(https://i.ibb.co/VCffbb7/why-bg.png)' }}>
                <div className="flex flex-col items-center">
                    <IoCarSportOutline className="text-7xl"></IoCarSportOutline>
                    <h1 className="text-3xl font-semibold text-center">Latest Collection</h1>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo alias tempore ducimus maxime distinctio, voluptate debitis vero quae fuga adipisci quas rem, quisquam consequuntur voluptates magni commodi, beatae vitae?</p>
                </div>
                <div className="flex flex-col items-center">
                    <MdOutlineDiscount className="text-7xl"></MdOutlineDiscount>
                    <h1 className="text-3xl font-semibold text-center">Premium Offers</h1>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo alias tempore ducimus maxime distinctio, voluptate debitis vero quae fuga adipisci quas rem, quisquam consequuntur voluptates magni commodi, beatae vitae?</p>
                </div>
                <div className="flex flex-col items-center">
                    <HiOutlineWrenchScrewdriver className="text-7xl"></HiOutlineWrenchScrewdriver>
                    <h1 className="text-3xl font-semibold text-center">Free Servicing</h1>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo alias tempore ducimus maxime distinctio, voluptate debitis vero quae fuga adipisci quas rem, quisquam consequuntur voluptates magni commodi, beatae vitae?</p>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;