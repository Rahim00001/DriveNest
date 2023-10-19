import driveNest from "../../public/DriveNest.png"
const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-100 text-primary-content">
            <aside>
                <a href="/"><img className="w-20" src={driveNest} alt="" /></a>
                <p className="font-bold text-lg text-black -mt-5">DriveNest Ltd. </p>
                <p className="text-black">Providing reliable cars since 1992</p>
                <p className="text-black">Copyright © 2023 - All right reserved</p>
            </aside>
        </footer>
    );
};

export default Footer;