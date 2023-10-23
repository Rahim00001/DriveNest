import Banner from "./Banner";
import Brands from "./Brands";
import Review from "./Review";
import WhyUs from "./WhyUs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <WhyUs></WhyUs>
            <Review></Review>
            <h2>This is home</h2>
        </div>
    );
};

export default Home;