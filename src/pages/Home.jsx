import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import AboutUs from "../components/home/AboutUs"
import Blogs from "../components/home/Blogs";
import FAQs from "../components/home/FAQs";
import HomeHero from "../components/home/HomeHero"
import LottoData from "../components/home/LottoData";
import ValueScores from "../components/home/ValueScores";
import Navbar from "../components/Navbar";
import ScrollContainer from "../components/ScrollContainer";
import ValueScoreModal from "../components/ValueScoreModal";

const $ = window.$;

const Home = ({ scrollToId }) => {
    const [isValueScoreModalOpen, setIsValueScoreModalOpen] = useState(false);

    const openValueScoreModal = () => setIsValueScoreModalOpen(true);

    useEffect(() => {
        $(window).on('load', function () {
            if (scrollToId) {
                window.locoScroll.scrollTo($(`#${scrollToId}`).offset().top - 50,0,0);   
            }

            //when info icon in table is clicked, redirect to faq section
            $('.infoIcon').on('click', function () {
                if (window.innerWidth > 768) {
                    window.locoScroll.scrollTo($('#faq-1').offset().top+200,0,0);
                } else {
                    window.locoScroll.scrollTo($('#faq-1').offset().top - 100,0,0);
                }
            });
        })
    }, [scrollToId]);

    return (
        <>
            <Navbar showButtons />
            <ValueScoreModal active={isValueScoreModalOpen} setActive={setIsValueScoreModalOpen} />
            <ScrollContainer>           
            <main>
                <HomeHero openModal={openValueScoreModal} />
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