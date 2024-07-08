import { projects } from "@/data";
import React from "react";
import { FormattedCard } from "./ui/FormattedCard";
const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent proyects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10 my-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="h-[30rem] md:h-[25rem] flex items-center justify-center sm:w-[80vw] md:w-[80vw] lg:w-[80vw] xl:w-[30vw] 2xl:w-[30vw] sm:my-12"
          >
            <FormattedCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
