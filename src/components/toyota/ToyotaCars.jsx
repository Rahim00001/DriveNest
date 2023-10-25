import { useLoaderData } from "react-router-dom";
import ToyotaCar from "./ToyotaCar";
import offer from "../../../public/offer.jpg"
import offer1 from "../../../public/offer1.jpg"
import offer2 from "../../../public/offer2.jpg"

const ToyotaCars = () => {
    const toyota = useLoaderData();
    const toyotaCars = toyota.filter(car => car.brand == 'Toyota');
    console.log(toyotaCars);

    return (
        <div>
            <div className="carousel w-full h-[90vh] mb-14">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={offer} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={offer1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={offer2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className="w-5/6 mx-auto">
                <h1 className="text-center text-6xl mb-5 font-semibold">Available Cars</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-10">
                    {
                        toyotaCars.map(cars => <ToyotaCar key={cars._id} cars={cars}></ToyotaCar>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ToyotaCars;