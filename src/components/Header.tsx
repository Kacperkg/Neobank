import HeaderCSS from "./Header.module.css";

export default function Header() {
    return (
        <>
            <section className={HeaderCSS.header}>
                <h1 className={HeaderCSS.heading}>
                    Partnerships that encourage your passion.
                </h1>
                <button className={HeaderCSS.openAccount}>Open Account</button>
            </section>
        </>
    );
}
