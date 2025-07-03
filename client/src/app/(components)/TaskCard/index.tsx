// import { Task } from "@/state/api";
// import { format } from "date-fns";
// import Image from "next/image";
// import React from "react";

// type Props = {
//   task: Task;
// };

// const TaskCard = ({ task }: Props) => {
//   return (
//     <div className="mb-3 rounded bg-white p-4 shadow dark:bg-dark-secondary dark:text-white">
//       {task.attachments && task.attachments.length > 0 && (
//         <div>
//           <strong>Attachments:</strong>
//           <div className="flex flex-wrap">
//             {task.attachments && task.attachments.length > 0 && (
//               <Image
//                 src={`/${task.attachments[0].fileURL}`}
//                 alt={task.attachments[0].fileName}
//                 width={400}
//                 height={200}
//                 className="rounded-md"
//               />
//             )}
//           </div>
//         </div>
//       )}
//       <p>
//         <strong>ID:</strong> {task.id}
//       </p>
//       <p>
//         <strong>Title:</strong> {task.title}
//       </p>
//       <p>
//         <strong>Description:</strong>{" "}
//         {task.description || "No description provided"}
//       </p>
//       <p>
//         <strong>Status:</strong> {task.status}
//       </p>
//       <p>
//         <strong>Priority:</strong> {task.priority}
//       </p>
//       <p>
//         <strong>Tags:</strong> {task.tags || "No tags"}
//       </p>
//       <p>
//         <strong>Start Date:</strong>{" "}
//         {task.startDate ? format(new Date(task.startDate), "P") : "Not set"}
//       </p>
//       <p>
//         <strong>Due Date:</strong>{" "}
//         {task.dueDate ? format(new Date(task.dueDate), "P") : "Not set"}
//       </p>
//       <p>
//         <strong>Author:</strong>{" "}
//         {task.author ? task.author.username : "Unknown"}
//       </p>
//       <p>
//         <strong>Assignee:</strong>{" "}
//         {task.assignee ? task.assignee.username : "Unassigned"}
//       </p>
//     </div>
//   );
// };

// export default TaskCard;


import { Task } from "@/state/api";
import { format } from "date-fns";
import Image from "next/image";
import React from "react";

type Props = {
  task: Task;
};

const priorityColors = {
  HIGH: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  MEDIUM: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  LOW: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
};

const statusColors = {
  TODO: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
  IN_PROGRESS: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  DONE: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  BLOCKED: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
};

const TaskCard = ({ task }: Props) => {
  return (
    <div className="mb-4 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg transition-all hover:shadow-xl dark:border-gray-700 dark:bg-dark-secondary">
      {/* Header with title and ID */}
      <div className="border-b border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            {task.title}
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            #{task.id}
          </span>
        </div>
      </div>

      {/* Main content */}
      <div className="p-4">
        {/* Description */}
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          {task.description || "No description provided"}
        </p>

        {/* Image attachment */}
        {task.attachments && task.attachments.length > 0 && (
          <div className="mb-4 overflow-hidden rounded-md border border-gray-200 dark:border-gray-700">
            <Image
              src={`/${task.attachments[0].fileURL}`}
              alt={task.attachments[0].fileName}
              width={600}
              height={300}
              className="h-auto w-full object-cover"
            />
          </div>
        )}

        {/* Metadata grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Status */}
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Status
            </p>
            <span
              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium  
                "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
              }`}
            >
              {task.status}
            </span>
          </div>

          {/* Priority */}
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Priority
            </p>
            <span
              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium
                
                "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
              }`}
            >
              {task.priority}
            </span>
          </div>

          {/* Dates */}
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Start Date
            </p>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              {task.startDate
                ? format(new Date(task.startDate), "MMM d, yyyy")
                : "Not set"}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Due Date
            </p>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              {task.dueDate
                ? format(new Date(task.dueDate), "MMM d, yyyy")
                : "Not set"}
            </p>
          </div>

          {/* People */}
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Author
            </p>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              {task.author ? task.author.username : "Unknown"}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Assignee
            </p>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              {task.assignee ? task.assignee.username : "Unassigned"}
            </p>
          </div>
        </div>

        {/* Tags */}
        {task.tags && (
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Tags
            </p>
            <div className="mt-1 flex flex-wrap gap-2">
              {task.tags.split(",").map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-600 dark:bg-blue-900/50 dark:text-blue-200"
                >
                  {tag.trim()}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskCard;