'use client'

import React, { useState } from 'react'
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
  import { Button } from "@/components/ui/button";
import projects from "@/models/projects";
import Image from 'next/image';

const Projects = () => {
    const [filter, setFilter] = useState("all");

  const filteredProjects = () => {
    if (filter === "self") {
      return projects.filter((project) => project.type === "self");
    } else if (filter === "tutorials") {
      return projects.filter((project) => project.type === "tutorial-project");
    } else {
      return projects;
    }
  };
  return (
    <section className="wrapper grid grid-cols-1 w-full">
          <div className="flex-center flex-col gap-4">
            <div className="flex-center w-full gap-4">
              <div className="border border-sky-600 w-full" />
              <h4 className="p-bold-24 text-sky-600">PROJECTS</h4>
              <div className="border border-sky-600 w-full" />
            </div>
            {/* FILTER BUTTONS */}
            <div className="flex-center gap-4">
              <Button
                className={`${
                  filter === "all"
                    ? "text-sky-800 border-b border-sky-600"
                    : "text-slate-400"
                } px-4 py-2 text-xl bg-transparent`}
                onClick={() => setFilter("all")}
              >
                All
              </Button>
              <Button
                className={`${
                  filter === "self"
                    ? "text-sky-800 border-b border-sky-600"
                    : "text-slate-400"
                } px-4 py-2 text-xl bg-transparent`}
                onClick={() => setFilter("self")}
              >
                Self
              </Button>
              <Button
                className={`${
                  filter === "tutorials"
                    ? "text-sky-800  border-sky-600 border-b"
                    : "text-slate-400"
                } px-4 py-2 text-xl bg-transparent`}
                onClick={() => setFilter("tutorials")}
              >
                Tutorials
              </Button>
            </div>
          </div>
          <div className="flex-center wrapper text-pretty">
            <Carousel className="w-full wrapper">
              <CarouselContent className="-ml-1 ">
                {filteredProjects().map((project, index) => (
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
                              width={336}
                              height={210}
                              unoptimized={true}
                            />
                          </CardContent>
                          <div className="p-2 flex flex-col justify-left gap-2 text-nowrap overflow-hidden">
                            <CardTitle className="text-md md:text-lg">
                              {project.title}
                            </CardTitle>
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
  )
}

export default Projects