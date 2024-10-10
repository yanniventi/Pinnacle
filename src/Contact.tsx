import { Helmet } from "react-helmet";
import Footer from "./components/ui/footer";
import Header from "./components/ui/header";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact · Pinnacle Accountants</title>
      </Helmet>
      <Header />
      <main className="mx-auto flex max-w-[1920px] flex-col gap-32">
        Contact
      </main>
      <Footer />
    </>
  );
};

export default Contact;
