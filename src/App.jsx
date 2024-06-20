/* eslint-disable no-unused-vars */
import React from "react";
import { Navbar, StarsCanvas, Hero,  Skills,  Footer } from "./components";

function App() {
    return (
        <>
            <div>
                <StarsCanvas />
            </div>
            <div>
                <Navbar />
                <Hero />
                <Skills />
                <Footer />
            </div>
        </>
    );
}

export default App;
