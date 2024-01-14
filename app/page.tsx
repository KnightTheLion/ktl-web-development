


import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import ContactForm from "@/components/shared/ContactForm";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Projects from "@/components/shared/Projects";

import projects from "@/models/projects";

export default function Home() {
  
  return (
    <>
      <div className="relative">
        <section className="wrapper border-green-600 sm:border-red-500 md:border-yellow-500 lg:border-black xl:border-purple-500 grid grid-cols-1 w-full">
          <div className="flex flex-col justify-between">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-center py-5 bg-gradient-to-r from-sky-700 to-sky-400 text-transparent bg-clip-text">
             KTL Web Development
            </h1>
            <div className="flex gap-5 justify-center md:hidden">
              <a href="https://github.com/KnightTheLion">
                <div className="flex-center gap-2 text-sky-600">
                  <FaGithub size="2em" title="GitHub" />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/joshua-mitchell-779493207/">
                <div className="flex-center gap-2 text-sky-600">
                  <FaLinkedin size="2em" title="LinkedIn" />
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center py-5 md:py-10">
            <div className="flex w-fit">
              <Image
                src="/assets/images/hero.webp"
                alt="Developer Avatar"
                width={128}
                height={128}
                className="hero"
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
                    <span className="p-medium-14 text-slate-500">
                      josh@ktlweb.dev
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:flex-center gap-10">
            <a href="https://github.com/KnightTheLion">
              <div className="flex-center gap-2 text-sky-600">
                <FaGithub size="3em" title="GitHub" />
                <span className="p-medium-18 ">GitHub</span>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/joshua-mitchell-779493207/">
              <div className="flex-center gap-2 text-sky-600">
                <FaLinkedin size="3em" title="LinkedIn" />
                <span className="p-medium-18 ">LinkedIn</span>
              </div>
            </a>
          </div>
          <h3 className="text-xl font-semibold text-center py-5 md:py-10 text-sky-500">
            Web Developer / Designer
          </h3>
        </section>

        <Projects />

        <section className="wrapper grid grid-cols-1 w-full text-sky-700">
          <Accordion type="multiple">
            <AccordionItem value="item-1">
              <AccordionTrigger>Frameworks & Design</AccordionTrigger>
              <AccordionContent>
                <ul className="p-medium-14 flex flex-col gap-2">
                  <li>Next.js</li>
                  <li>React.js</li>
                  <li>Tailwind CSS</li>
                  <li>Express.js</li>
                  <li>Figma</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Skills / Certifications</AccordionTrigger>
              <AccordionContent>
                <ul className="p-medium-14 flex flex-col gap-2">
                  <li>
                    <a href="https://www.coursera.org/account/accomplishments/verify/6VKZSQ8VM5F8">
                      Developing Front-End Apps with React: IBM Certification
                    </a>
                  </li>
                  <li>
                    <a href="https://www.coursera.org/account/accomplishments/certificate/2KKVQH8UJT8W">
                      Developing Back-End Apps with Node.js: IBM Certification
                    </a>
                  </li>
                  <li>
                    <a href="https://www.credly.com/badges/1466c4ef-9afa-40d1-9dac-6e05bad7dc8b/print">
                      Node and Express Essentials: IBM Credential
                    </a>
                  </li>
                  <li>JavaScript: Intermediate</li>
                  <li>TypeScript: Novice</li>
                  <li>Web Design: Intermediate</li>
                  <li>
                    UI/UX Design (User Interface / User Experience):
                    Intermediate
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
        <div className="fixed top-1/2 -rotate-90 -right-12 transform -translate-y-1/2 md:hidden">
          <Dialog>
            <DialogTrigger>
              <div className="flex gap-2 h-6 p-[13px] bg-sky-600 rounded-t-md text-white items-center justify-center opacity-75">
                <EnvelopeOpenIcon />
                Contact
              </div>
            </DialogTrigger>
            <DialogContent>
              <ContactForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
}
