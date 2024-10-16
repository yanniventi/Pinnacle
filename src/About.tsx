import { Helmet } from "react-helmet";
import Splash from "./assets/about_splash.jpg";
import Footer from "./components/ui/footer";
import Header from "./components/ui/header";
import LimKuanMeng from "./assets/LimKuanMeng.jpg";
import CaraLee from "./assets/CaraLee.jpg";
import DavidLim from "./assets/DavidLim.jpg";
import LauKahEng from "./assets/LauKahEng.jpg";
import OhLipHow from "./assets/OhLipHow.jpg";
import KeePohLing from "./assets/KeePohLing.jpg";

function About() {
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
  return (
    <>
      <Helmet>
        <title>About · Pinnacle Accountants</title>
      </Helmet>
      <Header />
      <main className="mx-auto flex max-w-[1920px] flex-col">
        <section className="flex min-h-svh flex-col justify-center gap-8 px-4 py-24 sm:px-6 sm:py-32 md:px-16 md:py-48">
          <h1 className="w-10/12 max-w-3xl font-serif text-4xl font-bold text-white sm:text-5xl lg:text-7xl">
            Beyond Numbers, Building Success
          </h1>
          <div className="flex w-10/12 max-w-md flex-col gap-4 sm:gap-8">
            <p className="text-base text-white sm:text-xl">
              Strategic insights to elevate your business performance and
              achieve your vision.
            </p>
          </div>
          <img
            src={Splash}
            alt="Splash image of Blue mountains"
            className="absolute inset-0 -z-10 size-full object-cover"
          />
        </section>

        <section className="flex flex-col gap-16 bg-zinc-50 px-4 py-32 sm:px-6 sm:py-40 md:px-16">
          <div className="flex flex-col items-start gap-16">
            <h2 className="w-full max-w-full text-left font-serif text-3xl font-bold text-slate-900 sm:text-4xl lg:text-6xl">
              Your Partner in Financial Success
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-4 rounded-lg bg-white p-8 text-center shadow-md"
              >
                <h3 className="text-lg font-normal text-slate-900 mb-24 sm:text-xl lg:text-2xl">
                  {stat.header}
                </h3>
                <p className="text-4xl font-serif font-bold text-blue-700 sm:text-5xl lg:text-7xl">
                  {stat.numbers}
                </p>
                <div className="w-full h-px bg-slate-200"></div>
                <p className="text-sm text-start text-slate-700 sm:text-md lg:text-lg">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col items-end gap-12 bg-slate-900 px-4 py-8 sm:gap-16 sm:px-6 sm:py-24 md:px-16 md:py-16">
          <h2 className="w-10/12 max-w-3xl py-8 text-right font-serif text-3xl font-bold text-white sm:text-4xl md:py-16 lg:text-6xl">
            Pinnacle's Core Principles
          </h2>
          <div className="grid grid-cols-1 gap-6 bg-slate-900 sm:grid-cols-2 xl:grid-cols-3">
            {principles.map((item, index) => (
              <div
                className={`flex aspect-square size-full flex-col gap-6 bg-zinc-50 p-4 transition-all hover:z-10 hover:bg-white hover:shadow-md sm:p-8 md:p-12`}
                style={{ marginTop: `${index * 40}px` }}
                key={index}
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
            <h2 className="w-1/2 max-w-full py-12 text-left font-serif text-3xl font-bold text-white sm:text-4xl md:py-16 lg:text-6xl">
              Empowering Your Business With Strategic, Tailored Solutions
            </h2>
          </div>
        </section>

        <section className="flex flex-col gap-16 bg-zinc-50 px-4 py-24 sm:px-6 sm:py-32 md:px-16">
          <div className="flex flex-col items-start gap-16 md:flex-row">
            <h2 className="w-full max-w-full text-left font-serif text-3xl font-bold text-slate-900 sm:text-4xl md:w-1/2 lg:text-6xl">
              A Trusted Name in Accounting Excellence for Over 20 Years
            </h2>
            <p className="w-full text-md text-slate-700 sm:text-lg md:w-1/2 lg:text-xl">
              Backed by a team of highly qualified professionals, Pinnacle is
              driven by a shared commitment to excellence. Our diverse partners
              and staff deliver comprehensive public accounting and professional
              services, dedicated to guiding your business towards financial
              clarity and success. At Pinnacle, we’re more than just
              accountants—we’re your partners in progress.
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-8 bg-zinc-50 px-4 py-16 sm:px-6 sm:py-24 md:px-16">
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
              <div
                key={index}
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
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer cta />
    </>
  );
}

export default About;
