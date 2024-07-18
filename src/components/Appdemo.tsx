import dashboard from "../assets/Dashboard.png";
import AppDemoCSS from "./Appdemo.module.css";

export default function AppDemo() {
    return (
        <>
            <section className={AppDemoCSS.appDemo}>
                <aside className={AppDemoCSS.preview}>
                    <div className={AppDemoCSS.glass}></div>
                    <img src={dashboard} alt="" />
                    <div className={AppDemoCSS.blur1}></div>
                    <div className={AppDemoCSS.blur2}></div>
                </aside>
                <div className={AppDemoCSS.text}>
                    <h1>Making your business banking as easy as it can be!</h1>
                    <h4>
                        We are NeoBank modern business banking focused on
                        micro-entrepreneuers and their individual needs.
                    </h4>
                    <ul className={AppDemoCSS.options}>
                        <li className={AppDemoCSS.online}>
                            <h4>Online Banking</h4>
                            <a>
                                <span>Explore</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="6"
                                    height="10"
                                    viewBox="0 0 6 10"
                                    fill="none">
                                    <path d="M1 1L5 5L1 9" stroke="#EBDD51" />
                                </svg>
                            </a>
                        </li>
                        <div className={AppDemoCSS.seperator}></div>
                        <li className={AppDemoCSS.financial}>
                            <h4>Financial Consultations</h4>
                            <a>
                                <span>Explore</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="6"
                                    height="10"
                                    viewBox="0 0 6 10"
                                    fill="none">
                                    <path d="M1 1L5 5L1 9" stroke="#EBDD51" />
                                </svg>
                            </a>
                        </li>
                        <div className={AppDemoCSS.seperator}></div>
                        <li className={AppDemoCSS.invoice}>
                            <h4>Invoice Processing</h4>
                            <a>
                                <span>Explore</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="6"
                                    height="10"
                                    viewBox="0 0 6 10"
                                    fill="none">
                                    <path d="M1 1L5 5L1 9" stroke="#EBDD51" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}
