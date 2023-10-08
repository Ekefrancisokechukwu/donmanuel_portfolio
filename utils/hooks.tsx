import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export const useInviewAnimate = () => {
  const ref = useRef(null);
  const isInview = useInView(ref, { amount: 0.3, once: true });

  return { isInview, ref };
};
