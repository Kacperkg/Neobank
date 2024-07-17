import Logo from "../assets/logo.svg";
import NavCSS from "./Nav.module.css";

export default function Nav() {
    return (
        <>
            <section className={NavCSS.nav}>
                <img src={Logo} alt="" />
                <ul>
                    <li>Services</li>
                    <li>Banking</li>
                    <li>Individuals</li>
                    <li>Business</li>
                </ul>
                <button className={NavCSS.login}>Login</button>
            </section>
        </>
    );
}
