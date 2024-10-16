import { Helmet } from "react-helmet";
import { AspectRatio } from "./components/ui/aspect-ratio";
import Footer from "./components/ui/footer";
import Header from "./components/ui/header";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import TextButton from "./components/ui/textbutton";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Headquarters from "./assets/headquarters.png";

const Contact = () => {
  const location = useRef(null);
  const { scrollYProgress } = useScroll({
    target: location,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <>
      <Helmet>
        <title>Contact · Pinnacle Accountants</title>
      </Helmet>
      <Header />
      <main className="mx-auto flex max-w-[1920px] flex-col gap-64 px-6 md:px-16">
        <section className="mx-auto max-w-3xl pt-64">
          <div className="mb-24 w-full">
            <h1 className="mb-12 text-center font-serif text-4xl font-bold text-slate-900 sm:text-5xl lg:text-7xl">
              Get in touch with our financial experts
            </h1>
            <p className="text-center text-2xl text-slate-700">
              Get a free consultation and find out how we can help your business
              and get solutions tailored for your specific situation
            </p>
          </div>
          <div className="flex flex-col gap-12">
            <div>
              <p className="mb-4 text-2xl font-medium text-slate-700">Name</p>
              <Input
                variant={"large"}
                type="text"
                placeholder="Johnathan Wang"
              />
            </div>
            <div>
              <p className="mb-4 text-2xl font-medium text-slate-700">Email</p>
              <Input
                variant={"large"}
                type="email"
                placeholder="example@mail.com"
              />
            </div>
            <div>
              <p className="mb-4 text-2xl font-medium text-slate-700">
                Phone Number
              </p>
              <Input variant={"large"} type="text" placeholder="+65XXXXXXXX" />
            </div>
            <div>
              <p className="mb-4 text-2xl font-medium text-slate-700">
                Company Name
              </p>
              <Input variant={"large"} type="text" placeholder="John & Co." />
            </div>
            <div>
              <p className="mb-4 text-2xl font-medium text-slate-700">
                What can we help with?
              </p>
              <Textarea
                rows={6}
                placeholder="Share any relavent project details, requirements, timeline..."
              />
            </div>
            <TextButton size="large" to="" send>
              Let's talk
            </TextButton>
          </div>
        </section>
        <section className="flex w-full flex-col gap-16 md:flex-row">
          <div className="flex w-full max-w-md flex-col justify-center gap-16">
            <h2 className="font-serif text-3xl font-bold text-slate-900 sm:text-4xl lg:text-6xl">
              Our headquartes
            </h2>
            <p className="text-2xl text-slate-700">
              380 Jln Besar <br />
              #14-09/10/11/12 ARC 380 <br />
              Singapore 209000
            </p>
            <div>
              <p className="text-2xl text-slate-700">+65 9389 9381</p>
              <a
                href="mailto:enquiry@pinnacle.com"
                className="text-2xl text-blue-700 underline"
              >
                enquiry@pinnacle.com
              </a>
            </div>
            <TextButton
              to="https://maps.app.goo.gl/poE4BkZ6iztCAnF66"
              target="_blank"
            >
              View on maps
            </TextButton>
          </div>
          <AspectRatio ratio={4 / 3} className="overflow-hidden">
            <motion.div ref={location} style={{ y }} className="size-full">
              <img
                src={Headquarters}
                alt="Our headquarters"
                className="size-full object-cover"
              />
            </motion.div>
          </AspectRatio>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
