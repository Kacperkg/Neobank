import "./App.css";
import Header1 from "./assets/Headerimg.png";

import AppDemo from "./components/Appdemo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Talk from "./components/Talk";
import Track from "./components/Track";

export default function App() {
    return (
        <>
            <img src={Header1} alt="" className="header-img" />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="359"
                height="1108"
                viewBox="0 0 359 1108"
                fill="none"
                className="svg-img">
                <path
                    d="M618.412 -358.087C786.316 -650.621 1158.18 -750.851 1449 -581.956L567.353 954.115C483.401 1100.38 297.468 1150.5 152.059 1066.05C6.6502 981.602 -43.1706 794.572 40.7812 648.305L618.412 -358.087Z"
                    fill="#6F63DE"
                />
            </svg>
            <Nav />
            <Header />
            <div className="app-demo-bg"></div>
            <AppDemo />
            <Track />
            <Products />
            <Talk />
            <Footer />
        </>
    );
}
