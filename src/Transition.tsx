import { motion, Variants } from "framer-motion";
import { HTMLAttributes, useLayoutEffect } from "react";

type TransitionProps = HTMLAttributes<HTMLDivElement>;

const Transition = ({ children }: TransitionProps) => {
  const anim = (variants: Variants, custom?: number) => {
    return {
      initial: "initial",
      animate: "animate",
      exit: "exit",
      variants,
      custom,
    };
  };

  const slideWhite: Variants = {
    initial: {
      y: "100%",
    },
    exit: {
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.7, 0, 0.3, 1],
      },
    },
  };
  const darken: Variants = {
    initial: {
      opacity: 0,
    },
    exit: {
      opacity: 0.8,
      transition: {
        duration: 0.75,
        ease: [0.7, 0, 0.3, 1],
      },
    },
  };
  const page: Variants = {
    initial: {
      opacity: 0,
      y: 40,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };
  useLayoutEffect(() => {
    // Scroll to top of page
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <motion.div
        {...anim(slideWhite)}
        className="fixed inset-0 z-40 bg-zinc-50"
      />
      <motion.div
        {...anim(darken)}
        className="pointer-events-none fixed inset-0 z-30 bg-neutral-950"
      />
      <motion.div {...anim(page)}>{children}</motion.div>
    </>
  );
};

export default Transition;
