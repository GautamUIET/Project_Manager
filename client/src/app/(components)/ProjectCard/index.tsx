import { Project } from "@/state/api";
import React from "react";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  

  return (
    <div className="rounded-xl border p-5 shadow-sm bg-white hover:shadow-md transition dark:border-gray-700 dark:bg-gray-800">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold dark:text-white">{project.name}</h3>
 
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
        {project.description}
      </p>
      <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
        <p>📅 Start: {project.startDate}</p>
        <p>🏁 End: {project.endDate}</p>
      </div>
    
    </div>
  );
};

export default ProjectCard;
