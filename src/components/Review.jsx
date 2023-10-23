import man1 from "../../public/man1.jpg"
import man2 from "../../public/man2.jpg"
import woman from "../../public/woman.jpg"
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";
const Review = () => {
    return (
        <div className="mb-14">
            <h1 className="text-5xl text-center font-bold mb-7">Customer Review </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-5/6 mx-auto">
                <div className="card card-side bg-base-100 shadow-xl w-full">
                    <figure><img src={man1} alt="Movie" className="h-80 w-[800px] md:w-[500px]" /></figure>
                    <div className="px-5 py-10">
                        <h2 className="card-title">Farhan Saeed</h2>
                        <p>Model & Actor</p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div>
                            <BiSolidQuoteLeft className="inline text-2xl mr-2"></BiSolidQuoteLeft>
                            <span>DriveNest truly understands the needs of modern drivers. Their range of vehicles caters to various lifestyles, and the attention to detail in design is evident. I am proud to be part of the DriveNest community!</span>
                            <BiSolidQuoteRight className="inline text-2xl ml-2"></BiSolidQuoteRight>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl ">
                    <figure ><img src={woman} alt="Movie" className="h-80 w-[800px] md:w-[500px]" /></figure>
                    <div className="px-5 py-10 ">
                        <h2 className="card-title">Alizeh Shah</h2>
                        <p>CEO, ABC Company</p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div>
                            <BiSolidQuoteLeft className="inline text-2xl mr-2"></BiSolidQuoteLeft>
                            <span>I have been a loyal DriveNest customer for years, and they never disappoint. The reliability of their vehicles is unmatched, and their commitment to sustainability is commendable. I could not imagine driving anything else!</span>
                            <BiSolidQuoteRight className="inline text-2xl ml-2"></BiSolidQuoteRight>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl ">
                    <figure><img src={man2} alt="Movie" className="h-80 w-[800px] md:w-[500px]" /></figure>
                    <div className=" px-5 py-10">
                        <h2 className="card-title">Abrar Ehsan</h2>
                        <p>Writer & Columnist</p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div>
                            <BiSolidQuoteLeft className="inline text-2xl mr-2"></BiSolidQuoteLeft>
                            <span>DriveNests customer service is exceptional. From the moment I stepped into the showroom, I felt valued and heard. The team went above and beyond to help me find the perfect car for my family. Kudos to DriveNest!</span>
                            <BiSolidQuoteRight className="inline text-2xl ml-2"></BiSolidQuoteRight>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;