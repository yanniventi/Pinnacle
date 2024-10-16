import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Helmet } from "react-helmet";
import Splash from "./assets/about_splash.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./components/ui/carousel";
import FadeIn from "./components/ui/fadein";
import Footer from "./components/ui/footer";
import MaskText from "./components/ui/maskText";

import Cara from "./assets/Cara.png";
import DavidLim from "./assets/David.png";
import KahEng from "./assets/KahEng.png";
import KuanMeng from "./assets/KuanMeng.png";
import LipHow from "./assets/LipHow.png";
import PohLing from "./assets/PohLing.png";
import OurStory1 from "./assets/ourstory1.jpg";
import OurStory2 from "./assets/ourstory2.jpg";
import OurStory3 from "./assets/ourstory3.jpg";
import TextButton from "./components/ui/textbutton";

function About() {
  const splash = useRef(null);

  const { scrollYProgress } = useScroll({
    target: splash,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "40vh"]);

  const principles = [
    {
      principle: "Excellence At Competitive Prices",
      description:
        "We focus on delivering exceptional quality that aligns with your business needs, ensuring you get value without compromise. Unlike others, we get it right the first time, saving you time and resources.",
    },
    {
      principle: "Your One-Stop Business Solution",
      description:
        "Our holistic services cover every step of your business journey, streamlining processes and maximizing efficiency, so you can focus on growth.",
    },
    {
      principle: "A Trusted Business Partner",
      description:
        "We work alongside you, transforming insights into strategies that power your growth and elevate your competitive edge. We're more than a service provider—we're your strategic ally in success.",
    },
  ];
  const employees = [
    {
      name: "Lim Kuan Meng",
      position: "Managing Parther",
      img: KuanMeng,
    },
    {
      name: "Cara Lee",
      position: "Assurance & Advisory Partner",
      img: Cara,
    },
    {
      name: "David Lim",
      position: "Assurance & Advisory Partner",
      img: DavidLim,
    },
    {
      name: "Lau Kah Eng",
      position: "Assurance & Advisory Partner",
      img: KahEng,
    },
    {
      name: "Oh Lip How",
      position: "Assurance & Advisory Partner",
      img: LipHow,
    },
    {
      name: "Kee Poh Ling",
      position: "Director of Accounting & Corporate Secretarial Services",
      img: PohLing,
    },
  ];

  const statistics = [
    {
      header: "Founded in:",
      numbers: "2013",
      description:
        "Backed by a team of highly qualified professionals, Pinnacle is driven by a shared commitment to excellence.",
    },
    {
      header: "Clients Served:",
      numbers: "Over 300",
      description:
        "We provide comprehensive accounting, auditing, taxation, and advisory services to meet all compliance needs.",
    },
    {
      header: "Industries Covered:",
      numbers: "20+",
      description:
        "Our clients include private and public companies, sole proprietors, partnerships, and branches of foreign firms.",
    },
  ];
  const ourstory = [
    {
      image: OurStory3,
      subheader: "Mission",
      header: "Empowering Your Business with Expert Financial Guidance",
      paragraph:
        "For over two decades, Pinnacle Accountants LLP has been a trusted partner for businesses across Singapore, from emerging startups to established corporations. Our team of experienced accountants, tax advisors, and auditors is committed to helping businesses thrive by offering personalized financial solutions tailored to their unique needs. We go beyond standard accounting services, focusing on strategic planning and long-term financial success. When you partner with us, you're gaining access to expertise that ensures compliance, reduces risk, and enhances profitability.",
    },
    {
      image: OurStory2,
      subheader: "Assurance",
      header: "Deep Expertise in Singapore's Regulatory Landscape",
      paragraph:
        "With an in-depth understanding of Singapore's complex business regulations, we offer a clear path through the ever-evolving financial and compliance requirements. At Pinnacle Accountants LLP, we specialize in navigating the regulations set forth by the Inland Revenue Authority of Singapore (IRAS) and the Accounting and Corporate Regulatory Authority (ACRA). Whether it's tax planning, corporate governance, or regulatory filings, our team ensures that your business stays compliant, freeing you to focus on growth and innovation.",
    },
    {
      image: OurStory1,
      subheader: "Innovation",
      header: "Innovative Solutions for a Changing Business World",
      paragraph:
        "In today's fast-paced business environment, embracing innovation is key to staying competitive. At Pinnacle Accountants LLP, we leverage the latest technology, including cloud-based accounting software, to provide our clients with real-time insights into their financial health. This innovative approach allows us to offer proactive advice and strategies that help businesses adapt and succeed in an ever-changing market. With our forward-thinking mindset, we're not just managing your finances—we're helping you shape your future.",
    },
  ];
  return (
    <>
      <Helmet>
        <title>About · Pinnacle Accountants</title>
      </Helmet>
      <main className="relative flex flex-col overflow-x-hidden">
        <section className="relative flex min-h-svh flex-col justify-center gap-8 px-4 py-24 sm:px-6 sm:py-32 md:px-16 md:py-48">
          <div className="mx-auto w-full max-w-[1920px]">
            <MaskText
              node="h1"
              text="Beyond Numbers, Building Success"
              className="w-10/12 max-w-3xl font-serif text-4xl font-bold text-white sm:text-5xl lg:text-7xl"
            />
            <FadeIn>
              <div className="flex w-10/12 max-w-md flex-col gap-4 py-4 sm:gap-8">
                <p className="text-base text-white sm:text-xl">
                  Strategic insights to elevate your business performance and
                  achieve your vision.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="absolute inset-0 -z-10 size-full max-h-svh overflow-hidden">
            <motion.div style={{ y }} className="relative h-full">
              <img
                src={Splash}
                ref={splash}
                alt="Splash image of Blue mountains"
                className="size-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        <FadeIn>
          <div className="mx-auto w-full max-w-[1920px] px-4 py-32 sm:px-6 sm:py-40 md:px-16">
            <div className="flex flex-col items-start gap-16">
              <MaskText
                node="h2"
                text="Your Partner in Financial Success"
                className="w-full max-w-full text-left font-serif text-3xl font-bold text-slate-900 sm:text-4xl lg:text-6xl"
              />
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {statistics.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start gap-4 border border-slate-200 p-8 transition-all duration-300 hover:bg-white hover:shadow-md"
                >
                  <h3 className="mb-24 text-lg font-normal text-slate-900 sm:text-xl lg:text-2xl">
                    {stat.header}
                  </h3>
                  <MaskText
                    node="p"
                    text={stat.numbers}
                    className="font-serif text-4xl font-bold text-blue-700 sm:text-5xl lg:text-7xl"
                  />
                  <div className="h-px w-full bg-slate-200"></div>
                  <p className="text-slate-700 lg:text-lg">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
        <FadeIn className="bg-slate-900">
          <div className="mx-auto w-full max-w-[1920px] px-8 py-32 sm:px-12 sm:py-40 lg:px-20 lg:py-48">
            {ourstory.map((story, index) => (
              <div
                key={index}
                className={`mb-12 flex flex-col items-center gap-12 lg:gap-24 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <motion.div
                  viewport={{ once: true, amount: "some" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.75, ease: [0.33, 1, 0.68, 1] }}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  className="w-full lg:w-1/2"
                >
                  <AspectRatio
                    ratio={4 / 3}
                    className="flex w-full items-center justify-center"
                  >
                    <img
                      src={story.image}
                      alt={story.header}
                      className="size-full object-cover lg:size-10/12"
                    />
                  </AspectRatio>
                </motion.div>
                <motion.div
                  viewport={{ once: true, amount: "some" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.75, ease: [0.33, 1, 0.68, 1] }}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                  className="flex size-full flex-col justify-center gap-6 lg:w-1/3 lg:gap-8"
                >
                  <div>
                    <h3 className="mb-2 font-medium text-slate-400 lg:text-xl">
                      {story.subheader}
                    </h3>
                    <h2 className="font-serif text-xl font-bold text-blue-50 sm:text-2xl lg:text-4xl">
                      {story.header}
                    </h2>
                  </div>
                  <p className="text-slate-300">{story.paragraph}</p>
                  {index !== 0 && (
                    <TextButton to="" className="text-slate-200">
                      Learn more
                    </TextButton>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mx-auto flex w-full max-w-[1920px] flex-col gap-16 px-4 py-32 sm:px-6 md:px-16">
            <div className="flex w-full items-end justify-end">
              <MaskText
                node="h2"
                text="Pinnacle's Core Principles"
                className="w-10/12 max-w-3xl text-right font-serif text-3xl font-bold text-slate-900 sm:text-4xl lg:text-6xl"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
              {principles.map((item, index) => (
                <div
                  key={index}
                  className={`flex size-full flex-col gap-6 border border-slate-200 bg-zinc-50 p-4 transition-all hover:z-10 hover:bg-white hover:shadow-md sm:aspect-square sm:p-8 md:p-12 ${index !== 0 && "border-t-0 sm:border"}`}
                >
                  <div className="flex flex-1 items-end text-start font-serif text-3xl font-bold text-blue-700 sm:text-4xl lg:text-5xl">
                    {item.principle}
                  </div>
                  <div className="mx-auto h-px w-full bg-slate-200"></div>
                  <div className="flex-1 text-start text-slate-700 lg:text-xl">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>

            <MaskText
              node="h2"
              text="Empowering Your Business With Strategic, Tailored Solutions"
              className="w-10/12 max-w-3xl text-left font-serif text-3xl font-bold text-slate-900 sm:text-4xl lg:text-6xl"
            />
          </div>
        </FadeIn>

        {/* Trusted Name Section */}
        <FadeIn className="bg-slate-900">
          <div className="mx-auto w-full max-w-[1920px] px-4 py-24 sm:px-6 sm:py-32 md:px-16">
            <div className="flex flex-col items-start gap-16 md:flex-row">
              <MaskText
                node="h2"
                text="A Trusted Name in Accounting Excellence for Over 20 Years"
                className="w-full max-w-full text-left font-serif text-3xl font-bold text-blue-50 sm:text-4xl md:w-1/2 lg:text-6xl"
              />
              <p className="w-full text-slate-200 sm:text-lg md:w-1/2 lg:text-xl">
                Backed by a team of highly qualified professionals, Pinnacle is
                driven by a shared commitment to excellence. Our diverse
                partners and staff deliver comprehensive public accounting and
                professional services, dedicated to guiding your business
                towards financial clarity and success. At Pinnacle, we're more
                than just accountants — we're your partners in progress.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Team Section */}
        <FadeIn>
          <div className="mx-auto w-full max-w-[1920px] px-4 py-16 sm:px-6 sm:py-24 md:px-16">
            <div className="mb-16 flex flex-col items-center gap-4">
              <MaskText
                node="h2"
                text="Meet the Team"
                className="w-full max-w-full text-center font-serif text-3xl font-bold text-slate-900 sm:text-4xl lg:text-6xl"
              />
              <FadeIn>
                <p className="w-full max-w-2xl text-center text-slate-700 sm:text-xl lg:text-2xl">
                  Great ideas take shape through dedication, effort, and the
                  right people by your side.
                </p>
              </FadeIn>
            </div>

            <Carousel opts={{ skipSnaps: true, align: "start" }}>
              <CarouselContent className="-ml-16 flex">
                {employees.map((employee) => (
                  <CarouselItem
                    className="w-48 basis-4/5 pl-16 sm:w-64 sm:basis-2/3 md:w-96 lg:basis-[30%]"
                    key={employee.name}
                  >
                    <AspectRatio ratio={4 / 5}>
                      <img
                        src={employee.img}
                        alt={employee.name}
                        className="size-full object-cover"
                      />
                    </AspectRatio>
                    <p className="mb-2 mt-6 font-serif text-4xl font-medium text-slate-900">
                      {employee.name}
                    </p>
                    <p className="text-lg text-slate-700">
                      {employee.position}
                    </p>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </FadeIn>
      </main>
      <Footer cta />
    </>
  );
}

export default About;
