import React from 'react'
import Navbar from "./components/navbar.jsx"
import Hero from "./components/hero.jsx";
import ProductViewer from "./components/product_viewer.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Showcase from "./components/showcase.jsx";
import Performance from "./components/performance.jsx";
import Features from "./components/features.jsx";
import Highlights from "./components/highlights.jsx";
import Footer from "./components/footer.jsx";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <ProductViewer />
            <Showcase />
            <Performance />
            <Features />
            <Highlights />
            <Footer />
        </main>
    )
}
export default App
