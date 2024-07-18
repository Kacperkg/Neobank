import "./App.css";
import AppDemo from "./components/Appdemo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Track from "./components/Track";

export default function App() {
    return (
        <>
            <Nav />
            <Header />
            <AppDemo />
            <Track />
            <Products />
            <Footer />
        </>
    );
}
