import { motion, MotionProps } from "framer-motion";

type FadeInProps = MotionProps;

const FadeIn = ({ children, ...rest }: FadeInProps) => {
  return (
    <motion.div
      viewport={{ once: true, amount: "some" }}
      initial={{ opacity: 0, y: 30 }}
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
