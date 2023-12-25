"use client";

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

import projects from "@/models/projects";

export default function Home() {
  return (
    <>
      <section className="wrapper border-green-600 sm:border-red-500 md:border-yellow-500 lg:border-black xl:border-purple-500 grid grid-cols-1 w-full">
        <div className="flex flex-col justify-between">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-center py-5 bg-gradient-to-r from-sky-700 to-sky-400 text-transparent bg-clip-text">
            Knight The Lion
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
          <Image
            src="/assets/images/hero.webp"
            alt="hero"
            width={1000}
            height={1000}
            className="hero"
          />
          <div className="flex flex-col justify-center gap-3 p-5 ">
            <h3 className="text-2xl font-bold text-sky-700">Joshua Mitchell</h3>
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
        <h2 className="text-xl font-semibold text-center py-5 md:py-10 text-sky-500">
          Web Development / Web Design
        </h2>
      </section>
      <section className="wrapper grid grid-cols-1 w-full">
        <div className="flex-center gap-4">
          <div className="border border-sky-600 w-full" />
          <h2 className="p-bold-24 text-sky-600">PROJECTS</h2>
          <div className="border border-sky-600 w-full" />
        </div>
        <div className="flex-center wrapper">
          <Carousel className="w-full wrapper">
            <CarouselContent className="-ml-1 ">
              {projects.map((project, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <a href={project.url}>
                      <Card className="shadow-md hover:shadow-xl">
                        <CardContent>
                          <Image
                            src={project.imageUrl}
                            alt="project"
                            width={160 * 4}
                            height={90 * 4}
                          />
                        </CardContent>
                        <div className="p-2 flex flex-col justify-left gap-2">
                          <CardTitle>{project.title}</CardTitle>
                          <CardDescription>
                            {project.description}
                          </CardDescription>
                        </div>
                      </Card>
                    </a>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
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
                <li>TypeScript: Intermediate</li>
                <li>Web Design: Intermediate</li>
                <li>
                  UI/UX Design (User Interface / User Experience): Intermediate
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </>
  );
}
