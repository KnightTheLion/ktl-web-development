import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Projects from "@/components/shared/Projects";
import Accordions from "@/components/shared/Accordions";
import MobileContact from "@/components/shared/MobileContact";

export default function Home() {
  return (
    <>
      <div className="relative">
        <section className="wrapper grid grid-cols-1 w-full">
          <div className="flex flex-col justify-between">
            <h1 className="text-[2.9em] leading-none md:text-6xl lg:text-7xl font-extrabold text-center py-6 bg-gradient-to-r from-sky-700 to-sky-400 text-transparent bg-clip-text">
              KTL Web Development
            </h1>
            <div className="flex gap-5 justify-center md:hidden">
              <a href="https://github.com/KnightTheLion">
                <div className="flex-center gap-2 text-sky-700" role="link">
                  <FaGithub size="2em" title="GitHub" />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/joshua-mitchell-779493207/">
                <div className="flex-center gap-2 text-sky-700" role="link">
                  <FaLinkedin size="2em" title="LinkedIn" />
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center py-5 md:py-10">
            <div className="grid grid-flow-col">
              <Image
                src="/assets/images/hero.webp"
                alt="Developer Avatar"
                width={128}
                height={128}
                priority={true}
              />
              <div className="flex flex-col justify-center gap-3 p-5 container">
                <h2 className="text-[20px] font-bold text-sky-700">
                  Joshua Mitchell
                </h2>
                <a href="mailto:josh@ktlweb.dev" className="p-regular-20">
                  <div className="flex items-center gap-2 text-sky-900">
                    <Image
                      src="assets/images/mail.svg"
                      alt="email contact"
                      width={20}
                      height={20}
                    />
                    <span
                      className="p-medium-14 text-slate-500"
                      aria-label="Email address: josh@ktlweb.dev"
                    >
                      josh@ktlweb.dev
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:flex-center gap-10">
            <a href="https://github.com/KnightTheLion">
              <div className="flex-center gap-2 text-sky-700" role="link">
                <FaGithub size="3em" title="GitHub" />
                <span className="p-medium-18 ">GitHub</span>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/joshua-mitchell-779493207/">
              <div className="flex-center gap-2 text-sky-700" role="link">
                <FaLinkedin size="3em" title="LinkedIn" />
                <span className="p-medium-18 ">LinkedIn</span>
              </div>
            </a>
          </div>
          <h3 className="text-2xl font-semibold text-center py-5 md:py-10 text-sky-700">
            Web Developer / Designer
          </h3>
        </section>
        <Projects />
        <div className='wrapper flex-center flex-col gap-4 text-center'>
            <h4 className='text-2xl font-semibold text-sky-700'>Lighthouse Score</h4>
            <p className='font-medium text-sky-800'>KTL produces web applications with optimal performance, while providing great accessibility and search engine optimization (SEO)</p>
            <Image
              src="/assets/images/ktl-lighthouse-score.webp"
              alt="Lighthouse Score"
              width={375}
              height={116}
              unoptimized={true}
            />
          </div>
        <Accordions />
        
        <MobileContact />
      </div>
    </>
  );
}
