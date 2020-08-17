import React from "react";
import "../styles/css/App.css";
import { useWindowScroll } from "react-use";
import { useState, useEffect } from "react";

export default (props) => {
    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisibility] = useState(false);
    const height = window.innerHeight;
  

    useEffect(() => {
        if (pageYOffset > 300) {
            setVisibility(true);
        } else {
            setVisibility(false);
        }
    }, [pageYOffset]);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    if (!visible) {
        return false;
    }

    return (
        <div className="scroll-to-top" id="button" onClick={scrollToTop}>
            <i className="icon fas fa-chevron-up"></i>
        </div>
    );
};
