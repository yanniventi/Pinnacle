import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useVelocity,
} from "framer-motion";
import { HtmlHTMLAttributes, useState } from "react";
import { Helmet } from "react-helmet";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";
import Footer from "./components/ui/footer";
import Header from "./components/ui/header";
import TextButton from "./components/ui/textbutton";
import { cn } from "./lib/utils";

import Carousell from "./assets/carousell.png";
import CBTL from "./assets/cbtl.png";
import Courts from "./assets/courts.png";
import Creative from "./assets/creative.png";
import Splash from "./assets/home_splash.jpg";
import Ijooz from "./assets/ijooz.png";
import Mediacorp from "./assets/mediacorp.png";
import Mrbean from "./assets/mrbean.png";
import Pokka from "./assets/pokka.png";
import Singtel from "./assets/singtel.png";
import Sph from "./assets/sph.png";
import TigerBalm from "./assets/tigerbalm.png";
import TigerBeer from "./assets/TigerBeer.png";
import Zalora from "./assets/zalora.png";

import Alex from "./assets/Alex.png";
import David from "./assets/David.jpg";
import Rachel from "./assets/Rachel.png";
import Samantha from "./assets/Samantha.png";

import Insight1 from "./assets/insight1.png";
import Insight2 from "./assets/insight2.png";
import Insight3 from "./assets/insight3.png";

const HomeSection = ({
  children,
  className,
}: HtmlHTMLAttributes<HTMLDivElement>) => {
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
        "We help businesses maintain accurate financial records and ensure compliance with regulatory requirements.",
    },
    {
      service: "Taxation Services",
      description:
        "Navigating the complex tax landscape and ensure regulatory compliance and minimises your tax liabilities.",
    },
    {
      service: "Auditing Services",
      description:
        "Our auditing services provide an independent and objective assessment of your financial statements, ensuring accuracy and compliance",
    },
    {
      service: "Corporate Secretarial Services",
      description:
        "Stay compliant with ACRA regulations with services such as annual returns filing and corporate governance.",
    },
    {
      service: "Advisory Services",
      description:
        "Services such as financial planning and risk management designed to support your business growth and strategic planning.",
    },
    {
      service: "Cloud-Based Accounting",
      description:
        "Embrace the future and get access to real-time financial data and automate your accounting processes.",
    },
  ];
  const companies = [
    { img: Carousell, alt: "Carousell" },
    { img: CBTL, alt: "Coffee Bean and Tea Leaf" },
    { img: Courts, alt: "Courts" },
    { img: Creative, alt: "Creative" },
    { img: Ijooz, alt: "Ijooz" },
    { img: Mediacorp, alt: "Mediacorp" },
    { img: Mrbean, alt: "Mr Bean" },
    { img: Pokka, alt: "Pokka" },
    { img: Singtel, alt: "Singtel" },
    { img: Sph, alt: "Singapore Press Holdings" },
    { img: TigerBalm, alt: "Tiger Balm" },
    { img: TigerBeer, alt: "Tiger Beer" },
    { img: Zalora, alt: "Zalora" },
  ];

  const testimonials = [
    {
      name: "Alex Tan",
      position: "CEO, Tech Innovators Pte Ltd",
      quote:
        "“Pinnacle Accountants LLP has been an invaluable partner for our business. Their expertise in tax planning and compliance has saved us significant amounts of money and ensured we stay on top of all regulatory requirements. The team is professional, responsive, and always willing to go the extra mile to help us succeed.”",
      img: Alex,
    },
    {
      name: "Rachel Lim",
      position: "CFO, Green Solutions Ltd",
      quote:
        "“We have been working with Pinnacle Accountants LLP for over a decade, and their service has always been exceptional. Their cloud-based accounting solutions have transformed the way we manage our finances, providing us with real-time insights and greater control over our financial data. I highly recommend their services to any business looking for reliable and innovative accounting support.”",
      img: Rachel,
    },
    {
      name: "Samantha Ng",
      position: "Founder, Creative Ventures Pte Ltd",
      quote:
        "“Pinnacle Accountants LLP has been an invaluable partner for our business. Their expertise in tax planning and compliance has saved us significant amounts of money and ensured we stay on top of all regulatory requirements. The team is professional, responsive, and always willing to go the extra mile to help us succeed.”",
      img: Samantha,
    },
    {
      name: "David Lee",
      position: "Managing Director, Lee & Co.",
      quote:
        "“The team at Pinnacle Accountants LLP is incredibly knowledgeable and dedicated. They have helped us navigate complex auditing processes with ease and provided valuable advice on improving our internal controls. Their attention to detail and commitment to excellence is truly commendable.”",
      img: David,
    },
  ];

  const insights = [
    {
      img: Insight1,
      title:
        "Maximizing Tax Efficiency: Strategies for Medium-Sized Businesses",
      description:
        "October 24, 2024 - Discover how medium-sized businesses can optimize their tax strategies to reduce liabilities and increase profitability.",
      tag: "Tax Strategies",
    },
    {
      img: Insight2,
      title: "The Future of Accounting: Embracing Cloud-Based Solutions",
      description:
        "October 12, 2024 - Learn about the transformative power of cloud-based accounting solutions and how they can enhance your business operations.",
      tag: "Technology",
    },
    {
      img: Insight3,
      title:
        "Navigating Regulatory Compliance: A Guide for Singapore Businesses",
      description:
        "September 25, 2024 - Avoid common pitfalls and stay compliant with regulatory bodies like IRAS and ACRA is crucial for business success.",
      tag: "Compliance",
    },
  ];

  const [scrollingDown, setScrollingDown] = useState(true);
  const { scrollY } = useScroll();
  const x1 = useMotionValue(0);
  const scrollVelocity = useVelocity(scrollY);
  const scrollSpring = useSpring(scrollVelocity, { damping: 30 });
  const transform = useMotionTemplate`${x1}%`;
  const direction = scrollingDown ? -1 : 1;
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious();
    if (prev) {
      if (y > prev) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }
    }
  });

  useAnimationFrame(() => {
    const currentOffset = x1.get();
    if (currentOffset < -50) {
      x1.set(0);
    } else if (currentOffset > 0) {
      x1.set(-50);
    } else {
      x1.set(currentOffset + 0.01 * direction - 0.000025 * scrollSpring.get());
    }
  });

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
                <div className="flex gap-8 font-serif text-3xl font-medium sm:text-4xl lg:gap-16 lg:text-5xl">
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

        <section className="bg-slate-900 px-6 py-32 md:px-16">
          <div className="mx-auto max-w-[1920px]">
            <div className="flex flex-col items-center gap-8">
              <h2 className="w-full max-w-3xl text-center font-serif text-3xl font-bold text-blue-50 sm:text-4xl lg:text-6xl">
                Transform your business today with no initial cost
              </h2>
              <p className="w-full max-w-3xl text-center text-xl text-slate-200">
                Get a free initial consultation to develop a customized
                accounting solution for your specific needs and get the first
                month free with a year long contract.
              </p>
            </div>
          </div>
        </section>

        <HomeSection className="flex flex-col items-end gap-16">
          <h2 className="w-10/12 max-w-3xl text-right font-serif text-3xl font-bold text-slate-900 sm:text-4xl lg:text-6xl">
            Comprehensive range of accounting services
          </h2>
          <div className="grid grid-cols-1 gap-px border bg-slate-200 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((item) => (
              <div className="group relative flex aspect-square size-full flex-col gap-8 bg-zinc-50 p-8 pb-16 transition-all duration-300 hover:z-10 hover:gap-6 hover:bg-white hover:pb-20 hover:shadow-md sm:gap-16 sm:hover:gap-12">
                <div className="flex flex-1 items-end font-serif text-3xl font-medium text-blue-700 sm:text-4xl lg:text-5xl">
                  {item.service}
                </div>
                <div className="flex-1 lg:text-lg">{item.description}</div>
                <div className="absolute bottom-8 left-8 overflow-hidden">
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
        <section className="bg-slate-900 py-32">
          <div className="flex flex-col gap-32">
            <div className="w-full">
              <h2 className="mx-auto mb-8 max-w-[1920px] text-center font-serif text-3xl font-bold text-blue-50 sm:text-4xl md:mb-16 lg:text-6xl">
                Trusted by Industry Leaders
              </h2>
              <motion.div className="absolute inset-x-0 overflow-x-hidden">
                <motion.div
                  className="flex w-fit gap-8"
                  style={{ translateX: transform }}
                >
                  {[...companies, ...companies].map((company) => (
                    <div className="flex size-32 items-center justify-center md:size-64">
                      <img
                        src={company.img}
                        alt={company.alt}
                        className="w-3/5 object-contain"
                      />
                    </div>
                  ))}
                </motion.div>
              </motion.div>
              <div className="h-32 w-full md:h-64"></div>
            </div>
            <Carousel
              opts={{ align: "center", loop: true }}
              className="overflow-x-hidden px-6 md:px-16"
            >
              <div className="mx-auto max-w-[1920px]">
                <div className="mb-8 flex flex-wrap items-center justify-between gap-8 md:mb-16">
                  <h2 className="font-serif text-3xl font-bold text-blue-50 sm:text-4xl lg:text-6xl">
                    What our clients say
                  </h2>
                  <div>
                    <CarouselPrevious className="mr-3" />
                    <CarouselNext />
                  </div>
                </div>
                <CarouselContent>
                  {testimonials.map((testimony) => (
                    <CarouselItem className="lg:basis-5/6 2xl:basis-2/3">
                      <div className="flex h-full flex-col gap-12 bg-zinc-50 p-8 md:flex-row">
                        <div className="aspect-square md:aspect-[2/3] md:h-[460px]">
                          <img
                            src={testimony.img}
                            alt={testimony.name}
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="flex flex-1 flex-col justify-between">
                          <p className="mb-12 text-slate-900 md:text-xl">
                            {testimony.quote}
                          </p>
                          <div>
                            <p className="mb-2 font-serif text-4xl font-medium text-slate-900">
                              {testimony.name}
                            </p>
                            <p className="text-lg font-medium text-slate-700">
                              {testimony.position}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </div>
            </Carousel>
          </div>
        </section>
        <HomeSection>
          <div className="flex flex-wrap items-center justify-between gap-8">
            <h2 className="font-serif text-3xl font-bold text-slate-900 sm:text-4xl lg:text-6xl">
              Recent Insights
            </h2>
            <TextButton to="">View insights</TextButton>
          </div>
        </HomeSection>
      </main>
      <Footer cta />
    </>
  );
}

export default Home;
