import { Helmet } from "react-helmet";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import TextButton from "./components/ui/textbutton";
import Splash from "./assets/about_splash.jpg";
import Footer from "./components/ui/footer";
import LimKuanMeng from "./assets/LimKuanMeng.jpg";
import CaraLee from "./assets/CaraLee.jpg";
import DavidLim from "./assets/DavidLim.jpg";
import LauKahEng from "./assets/LauKahEng.jpg";
import OhLipHow from "./assets/OhLipHow.jpg";
import KeePohLing from "./assets/KeePohLing.jpg";
import OurStory1 from "./assets/ourstory1.jpeg";
import OurStory2 from "./assets/ourstory2.jpeg";
import OurStory3 from "./assets/ourstory3.jpg";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const splash = useRef(null);
  const statisticsSectionRef = useRef(null);
  const ourStorySectionRef = useRef(null);
  const principlesSectionRef = useRef(null);
  const trustedNameSectionRef = useRef(null);
  const teamSectionRef = useRef(null);

  const statisticsInView = useInView(statisticsSectionRef, { once: true });
  const ourStoryInView = useInView(ourStorySectionRef, { once: true });
  const principlesInView = useInView(principlesSectionRef, { once: true });
  const trustedNameInView = useInView(trustedNameSectionRef, { once: true });
  const teamInView = useInView(teamSectionRef, { once: true });

  const { scrollYProgress } = useScroll({
    target: splash,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "40vh"]);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const fadeInLeftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const fadeInRightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

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
        "We work alongside you, transforming insights into strategies that power your growth and elevate your competitive edge. We’re more than a service provider—we’re your strategic ally in success.",
    },
  ];
  const team = [
    {
      picture: LimKuanMeng,
      name: "Lim Kuan Meng",
      role: "Managing Partner",
    },
    {
      picture: CaraLee,
      name: "Cara Lee",
      role: "Assurance & Advisory Partner",
    },
    {
      picture: DavidLim,
      name: "David Lim",
      role: "Assurance & Advisory Partner",
    },
    {
      picture: LauKahEng,
      name: "Lau Kah Eng",
      role: "Assurance & Advisory Partner",
    },
    {
      picture: OhLipHow,
      name: "Oh Lip How",
      role: "Assurance & Advisory Partner",
    },
    {
      picture: KeePohLing,
      name: "Kee Poh Ling",
      role: "Director of Accounting & Corporate Secretarial Services",
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
      subheader: "MISSION",
      header: "Empowering Your Business with Expert Financial Guidance",
      paragraph:
        "For over two decades, Pinnacle Accountants LLP has been a trusted partner for businesses across Singapore, from emerging startups to established corporations. Our team of experienced accountants, tax advisors, and auditors is committed to helping businesses thrive by offering personalized financial solutions tailored to their unique needs. We go beyond standard accounting services, focusing on strategic planning and long-term financial success. When you partner with us, you're gaining access to expertise that ensures compliance, reduces risk, and enhances profitability.",
    },
    {
      image: OurStory2,
      subheader: "ASSURANCE",
      header: "Deep Expertise in Singapore’s Regulatory Landscape",
      paragraph:
        "With an in-depth understanding of Singapore’s complex business regulations, we offer a clear path through the ever-evolving financial and compliance requirements. At Pinnacle Accountants LLP, we specialize in navigating the regulations set forth by the Inland Revenue Authority of Singapore (IRAS) and the Accounting and Corporate Regulatory Authority (ACRA). Whether it's tax planning, corporate governance, or regulatory filings, our team ensures that your business stays compliant, freeing you to focus on growth and innovation.",
    },
    {
      image: OurStory1,
      subheader: "INNOVATION",
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
      <main className="flex flex-col">
        <section className="relative flex min-h-svh flex-col justify-center gap-8 px-4 py-24 sm:px-6 sm:py-32 md:px-16 md:py-48">
          <div className="mx-auto w-full max-w-[1920px]">
            <h1 className="mw-10/12 max-w-3xl font-serif text-4xl font-bold text-white sm:text-5xl lg:text-7xl">
              Beyond Numbers, Building Success
            </h1>
            <div className="flex w-10/12 max-w-md flex-col gap-4 py-4 sm:gap-8">
              <p className="text-base text-white sm:text-xl">
                Strategic insights to elevate your business performance and
                achieve your vision.
              </p>
            </div>
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

        <motion.section
          ref={statisticsSectionRef}
          className="w-full bg-zinc-50"
          initial="hidden"
          animate={statisticsInView ? "visible" : "hidden"}
          variants={fadeInUpVariants}
        >
          <div className="mx-auto w-full max-w-[1920px] px-4 py-32 sm:px-6 sm:py-40 md:px-16">
            <div className="flex flex-col items-start gap-16">
              <h2 className="w-full max-w-full text-left font-serif text-3xl font-bold text-slate-900 sm:text-4xl lg:text-6xl">
                Your Partner in Financial Success
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {statistics.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUpVariants}
                  className="flex flex-col items-start gap-4 bg-white p-8 text-center shadow-md transition-shadow duration-300 hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="mb-24 text-lg font-normal text-slate-900 sm:text-xl lg:text-2xl">
                    {stat.header}
                  </h3>
                  <p className="font-serif text-4xl font-bold text-blue-700 sm:text-5xl lg:text-7xl">
                    {stat.numbers}
                  </p>
                  <div className="h-px w-full bg-slate-200"></div>
                  <p className="sm:text-md text-start text-sm text-slate-700 lg:text-lg">
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        <motion.section
          ref={ourStorySectionRef}
          className="w-full bg-slate-900"
          initial="hidden"
          animate={ourStoryInView ? "visible" : "hidden"}
          variants={fadeInUpVariants}
        >
          <div className="mx-auto w-full max-w-[1920px] px-8 py-32 sm:px-12 sm:py-40 md:px-20 md:py-48">
            {ourstory.map((story, index) => (
              <div
                key={index}
                className={`flex flex-col items-center gap-12 md:gap-20 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <motion.div
                  variants={
                    index % 2 === 0 ? fadeInLeftVariants : fadeInRightVariants
                  }
                  className="w-full md:w-1/2"
                >
                  <div className="relative mx-auto h-[500px] w-[400px] md:h-[600px] md:w-[500px] lg:h-[700px] lg:w-[600px]">
                    <img
                      src={story.image}
                      alt={story.header}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={
                    index % 2 === 0 ? fadeInRightVariants : fadeInLeftVariants
                  }
                  className="flex h-full w-full flex-col justify-center gap-6 md:w-1/3 md:gap-8"
                >
                  <h2 className="sm:text-md text-sm font-bold text-blue-700 lg:text-xl">
                    {story.subheader}
                  </h2>
                  <h2 className="font-serif text-xl font-bold text-blue-50 sm:text-2xl lg:text-4xl">
                    {story.header}
                  </h2>
                  <p className="lg:text-md text-xs text-slate-200 sm:text-sm">
                    {story.paragraph}
                  </p>
                  <TextButton to="" className="text-blue-700">
                    See More
                  </TextButton>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          ref={principlesSectionRef}
          className="w-full bg-zinc-50"
          initial="hidden"
          animate={principlesInView ? "visible" : "hidden"}
          variants={fadeInUpVariants}
        >
          <div className="mx-auto w-full max-w-[1920px] px-4 py-32 sm:px-6 md:px-16">
            <div className="flex w-full items-end justify-end">
              <h2 className="mt-8 w-10/12 max-w-3xl text-right font-serif text-3xl font-bold text-slate-900 sm:text-4xl md:mt-16 lg:text-6xl">
                Pinnacle's Core Principles
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {principles.map((item, index) => (
                <div
                  key={index}
                  className={`flex aspect-square size-full flex-col gap-6 border border-slate-200 bg-zinc-50 p-4 transition-all hover:z-10 hover:bg-white hover:shadow-md sm:p-8 md:p-12`}
                  style={{ marginTop: `${index * 40}px` }}
                >
                  <div className="flex flex-1 items-end text-start font-serif text-3xl font-bold text-blue-700 sm:text-4xl lg:text-5xl">
                    {item.principle}
                  </div>
                  <div className="mx-auto h-0.5 w-full bg-slate-200"></div>
                  <div className="flex-1 text-start text-slate-700 lg:text-xl">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>


            <div className="flex w-full items-start">
              <h2 className="w-1/2 max-w-full py-20 text-left font-serif text-3xl font-bold text-slate-900 sm:text-4xl md:py-24 lg:text-6xl">
                Empowering Your Business With Strategic, Tailored Solutions
              </h2>
            </div>
          </div>
        </motion.section>

        {/* Trusted Name Section */}
        <motion.section
          ref={trustedNameSectionRef}
          className="w-full bg-slate-900"
          initial="hidden"
          animate={trustedNameInView ? "visible" : "hidden"}
          variants={fadeInUpVariants}
        >
          <div className="mx-auto w-full max-w-[1920px] px-4 py-24 sm:px-6 sm:py-32 md:px-16">
            <div className="flex flex-col items-start gap-16 md:flex-row">
              <h2 className="w-full max-w-full text-left font-serif text-3xl font-bold text-blue-50 sm:text-4xl md:w-1/2 lg:text-6xl">
                A Trusted Name in Accounting Excellence for Over 20 Years
              </h2>
              <p className="text-md w-full text-slate-200 sm:text-lg md:w-1/2 lg:text-xl">
                Backed by a team of highly qualified professionals, Pinnacle is
                driven by a shared commitment to excellence. Our diverse
                partners and staff deliver comprehensive public accounting and
                professional services, dedicated to guiding your business
                towards financial clarity and success. At Pinnacle, we’re more
                than just accountants—we’re your partners in progress.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          ref={teamSectionRef}
          className="w-full bg-zinc-50"
          initial="hidden"
          animate={teamInView ? "visible" : "hidden"}
          variants={fadeInUpVariants}
        >
          <div className="mx-auto w-full max-w-[1920px] px-4 py-16 sm:px-6 sm:py-24 md:px-16">
            <div className="flex flex-col items-center gap-16 md:flex-row">
              <h2 className="w-full max-w-full text-center font-serif text-3xl font-bold text-slate-900 sm:text-4xl lg:text-6xl">
                Meet the Team
              </h2>
            </div>
            <div className="flex w-full items-center justify-center">
              <p className="w-full max-w-2xl text-center text-lg font-normal text-slate-700 sm:text-xl lg:text-2xl">
                Great ideas take shape through dedication, effort, and the right
                people by your side.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-16 md:grid-cols-3">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUpVariants}
                  className="flex flex-col items-center gap-2 text-center"
                >
                  <img
                    src={member.picture}
                    alt={`${member.name}`}
                    className="h-48 w-48 object-cover sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72"
                  />
                  <h3 className="font-serif text-xl font-bold text-slate-900 sm:text-2xl lg:text-3xl">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-base text-slate-700 sm:text-lg lg:text-xl">
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>
      <Footer cta />
    </>
  );
}

export default About;
