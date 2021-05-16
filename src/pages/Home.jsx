import { useEffect } from "react";
import Footer from "../components/Footer";
import AboutUs from "../components/home/AboutUs"
import Blogs from "../components/home/Blogs";
import FAQs from "../components/home/FAQs";
import HomeHero from "../components/home/HomeHero"
import LottoData from "../components/home/LottoData";
import ValueScores from "../components/home/ValueScores";
import Navbar from "../components/Navbar";
import ScrollContainer from "../components/ScrollContainer";

const $ = window.$;

const Home = ({ scrollToId }) => {
    useEffect(() => {
        $(window).on('load', function () {
            if (scrollToId) {
                window.locoScroll.scrollTo($(`#${scrollToId}`).offset().top - 50,0,0);   
            }

            //when info icon in table is clicked, redirect to faq section
            $('#infoIcon').on('click', function () {
                window.locoScroll.scrollTo($('#faq-1').offset().top + 100,0,0);
            })
        })
    }, [scrollToId]);

    return (
        <>
            <Navbar showButtons />
            <ScrollContainer>           
            <main>
                <HomeHero />
                <LottoData />
                <ValueScores />
                <AboutUs />
                <Blogs />
                <FAQs />
            </main>
            <Footer showRegisterInput />
        </ScrollContainer>
        </>
    );
};

export default Home;