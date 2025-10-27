import React from 'react'
import Navbar from "./components/navbar.jsx"
import Hero from "./components/hero.jsx";
import ProductViewer from "./components/product_viewer.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

// gsap.registerPlugin(ScrollTrigger);

const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <ProductViewer />
        </main>
    )
}
export default App
