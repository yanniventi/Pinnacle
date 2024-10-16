import { motion, useInView } from "framer-motion";
import { HTMLAttributes, useRef } from "react";

type MaskTextProps = HTMLAttributes<HTMLParagraphElement> & {
  text: string;
  node: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
};

const MaskText = ({ text, node, className }: MaskTextProps) => {
  const body = useRef(null);

  const Slot = node;

  const isInView = useInView(body, { once: true, amount: "some" });

  const phrases = text.split(" ");

  const animation = {
    initial: { y: "100%", clipPath: "inset(0% 0% 100% 0%)" },
    closed: { y: "100%", clipPath: "inset(0% 0% 100% 0%)" },
    enter: (i: number) => ({
      y: "0",
      clipPath: "inset(0% 0% -15% 0%)",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.04 * i,
      },
    }),
  };

  return (
    <Slot ref={body} className={className}>
      {phrases.map((phrase, index) => {
        return (
          <>
            <span className="relative inline-flex pb-2" key={index}>
              <motion.span
                key={index}
                custom={index}
                variants={animation}
                initial="initial"
                animate={isInView ? "enter" : "closed"}
              >
                {phrase}
              </motion.span>
            </span>{" "}
          </>
        );
      })}
    </Slot>
  );
};

export default MaskText;
