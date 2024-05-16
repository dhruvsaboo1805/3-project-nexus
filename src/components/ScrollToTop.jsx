import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import smoothscroll from "smoothscroll-polyfill";

smoothscroll.polyfill();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("button worked");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
