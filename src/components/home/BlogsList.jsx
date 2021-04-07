import TitledSection from '../TitledSection';

import LeftArrow from '../../assets/images/left-arrow.png';
import RightArrow from '../../assets/images/right-arrow.png';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './BlogsList.css';
import { useRef } from 'react';

const $ = window.$;

const SliderItem = ({ image, title, id, goToNextSlide, goToPrevSlide }) => {
    const onReadMoreClick = (e) => {
        const eleId = e.target.getAttribute('id');       
        
        if (
            e.target.closest('.slick-slide').classList.contains('slick-center') ||
            $('.slick-active').length === 1
        ) {
            window.locoScroll.scrollTo(document.getElementById('blogContainer').offsetTop,0,0);
        } else {
            //if current slide is after the center slide
            if ($(`#${eleId}`).closest('.slick-slide').prev().hasClass('slick-center')) {
                //navigate to previous
                goToNextSlide();
                //scroll to blogs container
                window.locoScroll.scrollTo(document.getElementById('blogContainer').offsetTop,0,0);
            } 
            //if current slide is before the center slide
            else {
                //navigate to next
                goToPrevSlide();
                //scroll to blogs container
                window.locoScroll.scrollTo(document.getElementById('blogContainer').offsetTop,0,0);
            }
        }
        
    }

    return (
        <div id={id} className="d-flex flex-column align-items-center p-5 slider-item-root">
            <img src={image} className="blog-image" alt={title} />
            <h5 className="text-center blog-title">{title}</h5>
            <button
                className="blog-read-more"
                onClick={onReadMoreClick}
                id={`btn${id}`}
            >
                Read More
            </button>
        </div>
    );
};

const PrevArrow = ({ style, onClick, className }) => {
    return (
        <img
            src={LeftArrow}
            alt="Prev"
            className={`${className} nav-arrow`}
            style={style}
            onClick={onClick}
        />
    );
};

const NextArrow = ({ style, onClick, className }) => {
    return (
        <img
            src={RightArrow}
            alt="Prev"
            className={`${className} nav-arrow`}
            style={style}
            onClick={onClick}
        />
    );
};

const BlogsList = ({ blogs, setSelectedBlog }) => {

    const sliderRef = useRef(null);

    const onSliderChange = (current) => {
        const blog = blogs[current];
        if (blog && setSelectedBlog) {
            setSelectedBlog(blog);
        }
    }

    const goToNextSlide = () => {
        //sliderRef.current.slickNext();
        $('.slick-next').click();
    }

    const goToPrevSlide = () => {
        $('.slick-prev').click();
    }

    const slidesToShow = blogs.length <= 3 ? 1 : 3; 

    const settings = {
        className: 'blogs-list',
        centerMode: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        afterChange: (current) => onSliderChange(current),
        responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 1,
                centerMode: false,
              }
            },
        ],
    };

    return (
        <TitledSection title="Blogs" id="blogsList">
            <div className="row d-flex align-iems-center justify-content-center pt-4 blogsList">
                <div className="col-md-7">
                    <p textsize="large" className="text-center blogs-subheading">
                        We’re pretty unique in what we do so we share our perspectives and learnings through our blog below.
                    </p>
                </div>
            </div>
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-10 col-md-12 col-lg-12 col-xl-12">
                    <Slider {...settings} ref={sliderRef}>
                        {blogs.map((blog, index) => (
                            <SliderItem
                                image={blog.blog_image}
                                title={blog.blog_title}
                                id={index}
                                key={blog.title + index}
                                goToNextSlide={goToNextSlide}
                                goToPrevSlide={goToPrevSlide}
                            />
                        ))}
                    </Slider>

                </div>
            </div>
        </TitledSection>
    );
};

export default BlogsList;