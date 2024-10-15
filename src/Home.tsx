import { Helmet } from "react-helmet";
import Splash from "./assets/home_splash.jpg";
import Footer from "./components/ui/footer";
import Header from "./components/ui/header";
import TextButton from "./components/ui/textbutton";

import { HtmlHTMLAttributes } from "react";
import { cn } from "./lib/utils";

type HomeSectionProps = HtmlHTMLAttributes<HTMLDivElement> & {
  dark?: boolean;
};

const HomeSection = ({ dark, children, className }: HomeSectionProps) => {
  if (dark)
    return (
      <section className={cn(["bg-slate-900 px-6 py-32 md:px-16", className])}>
        <div className="mx-auto max-w-[1920px]">{children}</div>
      </section>
    );

  return (
    <section
      className={cn(["mx-auto w-full max-w-[1920px] px-6 md:px-16", className])}
    >
      {children}
    </section>
  );
};

function Home() {
  const unlocks = [
    {
      title: "Expert Knowledge and Compliance",
      description:
        "Our team of certified accountants and tax advisors brings a deep understanding of Singapore's regulatory landscape. We ensure your business stays compliant, avoiding costly penalties and fines.",
    },
    {
      title: "Cost Savings",
      description:
        "By leveraging our strategic tax planning and risk management services, we help you minimize tax liabilities and maximize profitability. Our efficient processes and expert advice can lead to significant cost savings, making our services a valuable investment.",
    },
    {
      title: "Tailored Solutions",
      description:
        "We offer personalized financial advice and solutions tailored to your specific business needs. Whether it's bookkeeping, financial reporting, or corporate secretarial services, we provide the expertise you need to thrive.",
    },
    {
      title: "Technology Integration",
      description:
        "Our cloud-based accounting solutions give you real-time access to your financial data, enhancing transparency and enabling better decision-making.",
    },
  ];
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
      <main className="flex flex-col gap-32">
        <HomeSection className="flex min-h-svh w-full flex-col justify-center gap-32 py-48 md:py-64">
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
        </HomeSection>
        <HomeSection className="flex flex-col gap-16 lg:flex-row">
          <div className="flex h-fit w-full flex-col gap-16 lg:sticky lg:top-32">
            <h2 className="w-10/12 max-w-3xl font-serif text-3xl font-bold text-slate-900 sm:text-4xl lg:text-6xl">
              We help you unlock your business potential
            </h2>
            <p className="w-full text-slate-700">
              At Pinnacle Accountants LLP, we understand the unique challenges
              that businesses face. Our specialized services are designed to
              provide the additional support your accounting division needs,
              ensuring compliance with regulatory bodies like IRAS and ACRA, and
              helping you navigate the complex business environment in
              Singapore.
            </p>
            <TextButton to="/contact">Get in touch</TextButton>
          </div>
          <div className="flex w-full flex-col gap-16">
            {unlocks.map((data, index) => (
              <>
                <div className="flex gap-12 font-serif text-3xl font-medium sm:text-4xl lg:gap-16 lg:text-5xl">
                  <div className="w-6 shrink-0 text-center text-slate-900">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="mb-8 text-blue-700">{data.title}</h3>
                    <p className="font-sans text-base font-normal text-slate-700">
                      {data.description}
                    </p>
                  </div>
                </div>
                {index !== unlocks.length - 1 && (
                  <div className="h-px w-full bg-slate-200"></div>
                )}
              </>
            ))}
          </div>
        </HomeSection>

        <HomeSection dark>
          <div className="flex flex-col items-center gap-8">
            <h2 className="w-full max-w-3xl text-center font-serif text-3xl font-bold text-blue-50 sm:text-4xl lg:text-6xl">
              Transform your business today with no initial cost
            </h2>
            <p className="w-full max-w-3xl text-center text-xl text-slate-200">
              Get a free initial consultation to develop a customized accounting
              solution for your specific needs and get the first month free with
              a year long contract.
            </p>
          </div>
        </HomeSection>

        <HomeSection className="flex flex-col items-end gap-16">
          <h2 className="w-10/12 max-w-3xl text-right font-serif text-3xl font-bold text-slate-900 sm:text-4xl lg:text-6xl">
            Comprehensive range of accounting services
          </h2>
          <div className="grid grid-cols-1 gap-px border bg-slate-200 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((item) => (
              <div className="group flex aspect-square size-full flex-col gap-8 bg-zinc-50 p-8 transition-all hover:z-10 hover:bg-white hover:shadow-md sm:gap-16">
                <div className="flex flex-1 items-end font-serif text-3xl font-medium text-blue-700 sm:text-4xl lg:text-5xl">
                  {item.service}
                </div>
                <div className="flex-1 lg:text-lg">{item.description}</div>
                <div className="overflow-hidden">
                  <TextButton
                    to=""
                    className="translate-y-full transition-transform duration-300 group-hover:translate-y-0"
                  >
                    Find out more
                  </TextButton>
                </div>
              </div>
            ))}
          </div>
        </HomeSection>

        <HomeSection dark>
          <h2 className="text-center font-serif text-3xl font-bold text-blue-50 sm:text-4xl lg:text-6xl">
            Trusted by Industry Leaders
          </h2>
        </HomeSection>
      </main>
      <Footer cta />
    </>
  );
}

export default Home;
