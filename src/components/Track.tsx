import trackboard from "../assets/Trackboard.png";
import minilogo from "../assets/minilogo.svg";
import TrackCSS from "./Track.module.css";

export default function Track() {
    return (
        <>
            <section className={TrackCSS.track}>
                <div className={TrackCSS.text}>
                    <h1>Track all of your business expenses in one place.</h1>
                    <h4>
                        We are NeoBank modern business banking focused on
                        micro-entrepreneuers and their individual needs.
                    </h4>
                    <button>Get the App Now</button>
                </div>
                <aside className={TrackCSS.preview}>
                    <div className={TrackCSS.glass}></div>
                    <img
                        src={trackboard}
                        alt=""
                        className={TrackCSS.trackBoard}
                    />
                    <img src={minilogo} alt="" className={TrackCSS.miniLogo} />

                    <div className={TrackCSS.blur1}></div>
                    <div className={TrackCSS.blur2}></div>
                </aside>
            </section>
        </>
    );
}
