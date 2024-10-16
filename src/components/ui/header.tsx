import { useMediaQuery } from "@/hooks/useMediaQuery";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { MaterialSymbol } from "react-material-symbols";
import { Link } from "react-router-dom";
import { Button } from "./button";

type HeaderLinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
  to: string;
};

const HeaderLink = ({ to, children }: HeaderLinkProps) => {
  return (
    <Link
      className="relative w-fit text-4xl font-medium text-slate-900 before:absolute before:left-0 before:top-full before:block before:h-[3px] before:w-0 before:bg-slate-900 before:transition-all hover:before:w-full"
      to={to}
    >
      {children}
    </Link>
  );
};

const Header = () => {
  const desktop = useMediaQuery("(min-width: 1024px)");
  const [open, setOpen] = useState(false);
  const anim = {
    initial: {
      rotate: "-30deg",
    },
    animate: {
      rotate: "0deg",
      transition: {
        ease: [0, 0.8, 0.25, 1.4],
        duration: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
    },
    closed: { opacity: 0, y: -30, transition: { duration: 0.2 } },
  };

  if (!desktop)
    return (
      <motion.header
        className="fixed inset-0 z-50 overflow-hidden bg-zinc-50/60 backdrop-blur-xl"
        initial={{
          height: "80px",
        }}
        animate={open ? "open" : "closed"}
        variants={{
          closed: {
            height: "80px",
            transition: {
              duration: 0.8,
              ease: [0.7, 0, 0.3, 1],
            },
          },
          open: {
            height: "100vh",
            transition: {
              duration: 0.8,
              ease: [0.7, 0, 0.3, 1],
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
        }}
      >
        <div className="flex w-full items-center justify-between p-4 pl-6">
          <Link className="font-serif text-4xl font-bold text-slate-900" to="/">
            Pinnacle
          </Link>
          <Button
            variant={"ghost"}
            size={"icon"}
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <motion.span key="close" {...anim} className="size-6">
                <MaterialSymbol icon="close" size={24} />
              </motion.span>
            ) : (
              <motion.span key="menu" {...anim} className="size-6">
                <MaterialSymbol icon="menu" size={24} />
              </motion.span>
            )}
          </Button>
        </div>
        <motion.nav
          className="flex flex-col justify-center gap-8 p-4 pl-6 pt-32"
          animate={open ? "open" : "closed"}
          variants={{
            open: {
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: { transition: { delayChildren: 0.3 } },
          }}
        >
          <motion.div variants={itemVariants}>
            <HeaderLink to="">Services</HeaderLink>
          </motion.div>
          <motion.div variants={itemVariants}>
            <HeaderLink to="/about">Who We Are</HeaderLink>
          </motion.div>
          <motion.div variants={itemVariants}>
            <HeaderLink to="">Insights</HeaderLink>
          </motion.div>
          <motion.div variants={itemVariants}>
            <HeaderLink to="/">Careers</HeaderLink>
          </motion.div>
          <motion.div variants={itemVariants}>
            <HeaderLink to="/contact">Contact Us</HeaderLink>
          </motion.div>
        </motion.nav>
      </motion.header>
    );

  return (
    <header className="fixed inset-x-0 top-0 z-50 p-6">
      <div className="flex w-full items-center justify-between bg-zinc-50/60 p-4 pl-6 backdrop-blur-xl">
        <Link className="font-serif text-4xl font-bold text-slate-900" to="/">
          Pinnacle
        </Link>
        <nav className="flex items-center gap-6">
          <Button asChild variant="ghost">
            <Link to="">Services</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/about">Who We Are</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="">Insights</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/">Careers</Link>
          </Button>
          <Button
            asChild
            variant="secondary"
            className="bg-blue-400/50 hover:bg-blue-400/60"
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
