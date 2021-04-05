import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const $ = window.$;
const gsap = window.gsap;
const ScrollTrigger = window.ScrollTrigger;
gsap.registerPlugin(ScrollTrigger);

window.locoScroll = null;

const ScrollContainer = ({ children }) => {

    useEffect(() => {
        // Initializing Locomotive Scroll for smooth scrolling
        const locoScroll = new LocomotiveScroll({
          el: document.getElementById('scroll-container'),
          smooth: true,
          getDirection: true,
        });
    
        // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
        locoScroll.on('scroll', (e) => {
          /* if (e.direction !== 'down') {
            //console.log('show');
            gsap.to($('#navbar'), {
              y: 0,
              duration: 0.5,
            });
          } else {
            //console.log('hide')
            gsap.to($('#navbar'), {
              y: -100,
              duration: 0.5,
            });
          } */
          ScrollTrigger.update();
        });

        var isScrolling;
        locoScroll.on('scroll', function (e) {
          console.log(isScrolling)
          if (isScrolling !== -1) {
            gsap.to($('#navbar'), {
              y: -100,
              //duration: 0.5,
            });
          }

          window.clearTimeout( isScrolling );         

          isScrolling = setTimeout(function() {
            gsap.to($('#navbar'), {
              y: 0,
              //duration: 0.5,
            });
            console.log( 'Scrolling has stopped.' );
        
          }, 66);       
        });
    
        // tell ScrollTrigger to use these proxy methods for the "#scroll-container" element since Locomotive Scroll is hijacking things
        ScrollTrigger.scrollerProxy('#scroll-container', {
          scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
          },
          getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
          },
          // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container
          //at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. 
          //We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled 
          //element).
          pinType: document.querySelector("#scroll-container").style.transform ? "transform" : "fixed",
        });
    
        // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

        // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
        ScrollTrigger.refresh();

        setInterval(() => {
          locoScroll.update();
        }, 2000);

        window.locoScroll = locoScroll;
    }, []);

    return (
        <div id="scroll-container">
            {children}
        </div>
    );
};

export default ScrollContainer;