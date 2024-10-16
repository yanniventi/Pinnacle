import { Helmet } from "react-helmet";
import Footer from "./components/ui/footer";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About · Pinnacle Accountants</title>
      </Helmet>
      <main className="mx-auto flex max-w-[1920px] flex-col gap-32">About</main>
      <Footer cta />
    </>
  );
};

export default About;
