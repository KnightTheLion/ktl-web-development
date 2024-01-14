"use client"
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Accordions = () => {
  return (
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
                UI/UX Design (User Interface / User Experience): Intermediate
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default Accordions;
