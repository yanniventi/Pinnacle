import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Button } from "./button";
import { Input } from "./input";
import TextButton from "./textbutton";

type FooterLinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
  to: string;
};

const FooterLink = ({ to, children }: FooterLinkProps) => {
  return (
    <Link
      className="relative w-fit text-xl font-medium text-slate-600 before:absolute before:left-0 before:top-full before:block before:h-0.5 before:w-0 before:bg-slate-600 before:transition-all hover:before:w-full"
      to={to}
    >
      {children}
    </Link>
  );
};

type FooterProps = {
  cta?: boolean;
};

const Footer = ({ cta }: FooterProps) => {
  return (
    <>
      {cta && (
        <div className="mx-auto grid max-w-[1920px] grid-cols-12 gap-y-16 px-6 py-32 md:px-16 lg:py-64">
          <div className="col-span-12 flex items-center pr-8 md:col-span-8 lg:pr-16 lg:text-6xl">
            <h2 className="font-serif text-3xl font-bold text-slate-900 sm:text-4xl lg:text-6xl">
              Expert solutions tailored to your business needs.
            </h2>
          </div>
          <div className="col-span-12 flex items-center md:col-span-4">
            <TextButton size="large" to="/contact">
              Get in touch
            </TextButton>
          </div>
        </div>
      )}
      <footer
        className={cn([
          "mx-auto grid max-w-[1920px] grid-cols-12 px-6 pb-16 md:px-16",
          !cta && "pt-64",
        ])}
      >
        <div className="order-2 col-span-12 mb-4 flex flex-col gap-16 pr-12 lg:order-none lg:col-span-8 lg:gap-32">
          <div className="max-w-96">
            <p className="mb-3 text-xl font-medium text-slate-600">
              Stay up to date on our latest insights
            </p>
            <div className="flex gap-3">
              <Input type="email" placeholder="example@mail.com" />
              <Button
                variant="secondary"
                className="bg-blue-400/50 hover:bg-blue-400/60"
              >
                Sign Up
              </Button>
            </div>
          </div>
          <p className="font-serif text-6xl font-bold text-slate-900 sm:text-7xl xl:text-9xl">
            Pinnacle
          </p>
        </div>
        <div className="order-1 col-span-12 mb-16 lg:order-none lg:col-span-4 lg:mb-0">
          <nav className="flex flex-col gap-16 lg:flex-row lg:gap-20">
            <div className="flex flex-col gap-4">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="">Services</FooterLink>
              <FooterLink to="/about">Who We Are</FooterLink>
              <FooterLink to="">Insights</FooterLink>
              <FooterLink to="">Careers</FooterLink>
              <FooterLink to="/contact">Contact Us</FooterLink>
            </div>
            <div className="flex flex-col gap-4">
              <FooterLink to="">LinkedIn</FooterLink>
              <FooterLink to="">Facebook</FooterLink>
            </div>
          </nav>
        </div>
        <div className="order-3 col-span-12">
          <div className="mb-4 h-px w-full bg-slate-200"></div>
          <div className="flex w-full flex-wrap justify-between gap-6 text-slate-400">
            <div>
              <Link to="" className="mr-6">
                Privacy Policy
              </Link>
              <Link to="">Terms of Use</Link>
            </div>
            <p>&copy; 2024 Pinnacle Accountants LLP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
