import HeaderCSS from "./Header.module.css";

export default function Header() {
    return (
        <>
            <section className={HeaderCSS.header}>
                <div className="header-blur-1"></div>
                <div className="header-blur-2"></div>
                <h1 className={HeaderCSS.heading}>
                    Partnerships that encourage your passion.
                </h1>
                <button className={HeaderCSS.openAccount}>Open Account</button>
            </section>
        </>
    );
}
