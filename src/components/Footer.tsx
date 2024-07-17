import Logo from "../assets/logo.svg";
import FooterCSS from "./Footer.module.css";

export default function Footer() {
    return (
        <>
            <section className={FooterCSS.footer}>
                <img src={Logo} alt="" />
                <ul className={FooterCSS.contact}>
                    <li>Practical solutions for you and your business</li>
                    <li>
                        <p>help@neobank.com</p>
                        <p>225-263-1776</p>
                    </li>
                    <li>
                        <p>Twitter</p>
                        <p>LinkedIn</p>
                    </li>
                    <button className={FooterCSS.openAccount}>
                        Open Account
                    </button>
                </ul>
                <div className={FooterCSS.seperator}></div>
                <div className={FooterCSS.copyright}>
                    <p>Copyright 2022. All rights reserved</p>
                    <ul className={FooterCSS.links}>
                        <li>Services</li>
                        <li>Banking</li>
                        <li>Individuals</li>
                        <li>Business</li>
                    </ul>
                </div>
            </section>
        </>
    );
}
