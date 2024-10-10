import { Link } from "react-router-dom";
import { Button } from "./button";

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0">
      <div className="mx-auto flex w-full max-w-[1920px] justify-between p-6 md:px-16 md:py-8">
        <Link className="font-serif text-4xl font-bold text-slate-900" to="/">
          Pinnacle
        </Link>
        <nav className="flex items-center gap-12">
          <Button asChild variant="ghost">
            <Link to="/">Home</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/about">Who We Are</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
