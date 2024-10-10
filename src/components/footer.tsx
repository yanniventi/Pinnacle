import { Link } from "react-router-dom";

type FooterProps = {
  cta?: boolean;
};

const Footer = ({ cta }: FooterProps) => {
  return (
    <>
      {cta && (
        <div className="px-6 py-64 md:px-16">
          <h2 className="font-serif text-3xl font-bold text-slate-900 sm:text-4xl lg:text-6xl">
            Expert solutions tailored to your business needs.
          </h2>
        </div>
      )}
      <footer className="grid grid-cols-3 px-6 pb-16 md:px-16">
        <div className="col-span-2 flex items-end">
          <p className="font-serif text-6xl font-bold text-slate-900 sm:text-7xl lg:text-9xl">
            Pinnacle
          </p>
        </div>
        <div className="col-span-1 flex flex-col justify-between">
          <nav className="flex gap-8">
            <Link className="text-xl font-medium text-slate-600" to="/">
              Home
            </Link>
            <Link className="text-xl font-medium text-slate-600" to="/about">
              Who We Are
            </Link>
            <Link className="text-xl font-medium text-slate-600" to="/contact">
              Contact Us
            </Link>
          </nav>
          <p className="text-slate-400">
            &copy; 2024 Pinnacle Accountants LLP. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
