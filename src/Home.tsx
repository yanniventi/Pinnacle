import { Helmet } from "react-helmet";
import Splash from "./assets/home_splash.jpg";
import Footer from "./components/ui/footer";
import Header from "./components/ui/header";

function Home() {
  const services = [
    {
      service: "Accounting",
      description:
        "Our comprehensive accounting services are designed to help businesses maintain accurate financial records and ensure compliance with regulatory requirements.",
    },
    {
      service: "Taxation Services",
      description:
        "Navigating the complex tax landscape in Singapore can be challenging. Our taxation services helps you ensure regulatory compliance and minimises your tax liabilities.",
    },
    {
      service: "Auditing Services",
      description:
        "Our auditing services provide an independent and objective assessment of your financial statements, ensuring accuracy and compliance",
    },
    {
      service: "Corporate Secretarial Services",
      description:
        "We help businesses stay compliant with ACRA regulations through our corporate secretarial services such as annual returns filing and corporate governance.",
    },
    {
      service: "Advisory Services",
      description:
        "Our advisory services such as financial planning and risk management are designed to support your business growth and strategic planning.",
    },
    {
      service: "Cloud-Based Accounting Solutions",
      description:
        "Embrace the future of accounting with our cloud-based solutions. Get access to real-time financial data and automate your accounting processes.",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Home · Pinnacle Accountants</title>
      </Helmet>
      <Header />
      <main className="mx-auto flex max-w-[1920px] flex-col gap-32">
        <section className="flex min-h-svh flex-col justify-center gap-32 px-6 py-48 md:px-16 md:py-64">
          <h1 className="w-10/12 max-w-3xl font-serif text-4xl font-bold text-slate-900 sm:text-5xl lg:text-7xl">
            Empowering Clients with Reliability and Precision
          </h1>
          <div className="flex w-10/12 max-w-xs flex-col gap-4 sm:gap-8">
            <div className="h-2 w-24 bg-blue-700"></div>
            <p className="text-base text-slate-900 sm:text-2xl">
              We are committed to providing expert financial services with over
              20 years of experience
            </p>
          </div>
          <img
            src={Splash}
            alt="Splash image of Blue mountains"
            className="absolute inset-0 -z-10 size-full object-cover"
          />
        </section>
        <section className="flex flex-col items-end gap-16 px-6 md:px-16">
          <h2 className="w-10/12 max-w-3xl text-right font-serif text-3xl font-bold text-slate-900 sm:text-4xl lg:text-6xl">
            Comprehensive range of accounting services
          </h2>
          <div className="grid grid-cols-1 gap-px border bg-slate-200 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((item) => (
              <div className="flex aspect-square size-full flex-col gap-8 bg-zinc-50 p-8 transition-all hover:z-10 hover:bg-white hover:shadow-md sm:gap-16">
                <div className="flex flex-1 items-end font-serif text-3xl font-medium text-blue-700 sm:text-4xl lg:text-5xl">
                  {item.service}
                </div>
                <div className="flex-1 lg:text-lg">{item.description}</div>
              </div>
            ))}
          </div>
        </section>
        <section className="flex flex-col gap-32 bg-slate-900 px-6 py-32 md:px-16">
          <div>
            <h2 className="text-center font-serif text-3xl font-bold text-blue-50 sm:text-4xl lg:text-6xl">
              Trusted by Industry Leaders
            </h2>
          </div>
        </section>
      </main>
      <Footer cta />
    </>
  );
}

export default Home;
