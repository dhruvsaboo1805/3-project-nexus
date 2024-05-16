import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useGSAP = (animationFunc, deps = []) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      animationFunc(elementRef.current);
    }
  }, deps);

  return elementRef;
};

export default useGSAP;
