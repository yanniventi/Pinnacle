import { Link } from "react-router-dom";
import { Button } from "./button";

const Header = () => {
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
