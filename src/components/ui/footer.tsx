import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

type FooterProps = {
  cta?: boolean;
};

const Footer = ({ cta }: FooterProps) => {
  return (
    <>
      {cta && (
        <div className="grid grid-cols-12 gap-y-16 px-6 py-32 md:px-16 lg:py-64">
          <div className="col-span-12 pr-8 md:col-span-6 lg:text-6xl xl:col-span-8">
            <h2 className="font-serif text-3xl font-bold text-slate-900 sm:text-4xl lg:text-6xl">
              Expert solutions tailored to your business needs.
            </h2>
          </div>
        </div>
      )}
      <footer
        className={cn([
          "grid grid-cols-12 gap-y-16 px-6 pb-16 md:px-16",
          !cta && "pt-32",
        ])}
      >
        <div className="order-2 col-span-12 flex flex-col justify-end gap-2 md:order-none md:col-span-6 xl:col-span-8">
          <p className="font-serif text-6xl font-bold text-slate-900 sm:text-7xl xl:text-9xl">
            Pinnacle
          </p>
          <p className="text-slate-400 md:hidden">
            &copy; 2024 Pinnacle Accountants LLP. All rights reserved.
          </p>
        </div>
        <div className="order-1 col-span-12 flex flex-col justify-end gap-8 md:order-none md:col-span-6 xl:col-span-4">
          <nav className="flex flex-col gap-8 md:flex-row">
            <Link className="font-medium text-slate-600 lg:text-xl" to="/">
              Home
            </Link>
            <Link className="font-medium text-slate-600 lg:text-xl" to="/about">
              Who We Are
            </Link>
            <Link
              className="font-medium text-slate-600 lg:text-xl"
              to="/contact"
            >
              Contact Us
            </Link>
          </nav>
          <p className="hidden text-slate-400 md:inline">
            &copy; 2024 Pinnacle Accountants LLP. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
