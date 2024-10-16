import { motion, MotionProps } from "framer-motion";
import { HTMLAttributes } from "react";

type FadeInProps = MotionProps & HTMLAttributes<HTMLDivElement>;

const FadeIn = ({ children, ...rest }: FadeInProps) => {
  return (
    <motion.div
      viewport={{ once: true, amount: "some" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
