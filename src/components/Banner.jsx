const Banner = () => {
    return (
        <div className="hero min-h-[88vh] mb-10" style={{ backgroundImage: 'url(https://i.ibb.co/fkcM3qh/car-banner1.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                    <h3 className="text-lg font-medium mb-2">WELCOME TO <span className="text-black font-bold text-xl">Drive<span className="text-orange-500">Nest</span></span></h3>
                    <h1 className="mb-5 text-5xl md:text-6xl font-bold">Best Place To Find Your <span className="text-orange-500">Dream Car</span></h1>
                    <p className="mb-5 font-medium">At DriveNest, we believe that every journey should be an experience to remember. With a passion for innovation and a commitment to quality, we stand at the forefront of the automotive industry, ready to transform the way you travel.</p>
                    <button className="btn btn-outline btn-warning">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;