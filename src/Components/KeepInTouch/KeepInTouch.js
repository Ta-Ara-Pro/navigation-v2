import React from "react";
import ContactSection from "../ContactSection/ContactSection";
import Layout from "../../Layout";
import Footer from "../Footer/Footer";

const KeepInTouch = () => {
    return (
        <>
        <img src='/hero.svg' alt='hero'
                style={{
                    position: 'absolute',
                    bottom: 0,
                    zIndex: -1,
                    top: 2
                }}
            />

                <Layout />
        <ContactSection/>
        <Footer/>
        </>
    )
}

export default KeepInTouch