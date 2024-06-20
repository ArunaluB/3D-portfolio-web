/* eslint-disable no-unused-vars */
import React from "react";
import { Navbar, StarsCanvas, Hero,  Skills,  Footer, Experience ,Feedbacks } from "./components";

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
                <Experience />
                <Feedbacks />
                <Footer />
            </div>
        </>
    );
}

export default App;
