import { FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200">
                <aside>
                    <img className="h-14" src="https://i.ibb.co/89CPDbT/scc-logo.png" alt="" />
                    <p>SCC Technovision<br />Providing reliable tech since 1992</p>
                </aside>
                <nav>
                    <header className="footer-title">Social</header>
                    <div className="grid grid-flow-col gap-4 text-3xl">
                        <a href="https://github.com/naimur8606"><FaGithub></FaGithub> </a>
                        <a href="https://www.facebook.com/mdnaimurrahman8606/"><FaFacebook></FaFacebook> </a>
                        <a href="https://www.youtube.com/@codingbangla1"><FaYoutube></FaYoutube> </a>
                    </div>
                </nav>
            </footer>
            <hr />
            <footer className="footer footer-center p-4 bg-base-200 text-base-content">
                <aside>
                    <p>Copyright © 2023 - All right reserved by SCC Technovision</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;