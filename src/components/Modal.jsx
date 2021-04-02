import React, { useEffect, useRef } from "react";

import styles from "./modal.module.css";

const Modal = ({setActive, children}) => {
  const greyArea = useRef(null);
    
  useEffect(() => {
      // Acceses the locomotive instance to set the height of the success window
      // document.querySelector("#popupContainer").style.top = `${Math.round(window.locoScroll.scroll.instance.delta.y)}px`;
  },[]);

  const closeModal = () => {
    if (window !== undefined) window.locoScroll.start();
    setActive(false);
  };

  const clickGrey = (event) => {
    event.target !== greyArea.current ? event.stopPropagation() : closeModal();
  };

  return (
    <div ref={greyArea} className={styles.popupContainer} id="popupContainer" onClick={(e) => clickGrey(e)}>
      <div className={styles.popupContent}>
        <button onClick={closeModal} className={styles.exitBtn} >
            <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        {children}
      </div>
    </div>
  );
};

const LocomotiveModal = ({active, setActive, children}) => {
  //const [active, setActive] = useState(false);

  //***Modal activated after a timer***
  /* useEffect(() => {
    let isMounted = true;
    setTimeout(() => {
      if (window !== undefined && isMounted) {
        setActive(true);
        //window.scroll.stop();
      }
    }, 1000);

    return () => {
      isMounted = false;
    };
  },[]); */

  return (
      <>
          {/* <div data-scroll data-scroll-call="activateModal" /> */}
          {active &&
              <Modal setActive={setActive}>
                  {children}
              </Modal>
          }
      </>
  );
};

export default LocomotiveModal;