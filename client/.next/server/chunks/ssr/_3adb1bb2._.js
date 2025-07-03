module.exports = {

"[project]/.next-internal/server/app/priority/backlog/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/priority/reusablePriorityPage/index.tsx [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
// "use client";
// import { useAppSelector } from "@/app/(components)/redux";
// import Header from "@/app/(components)/Header";
// import ModalNewTask from "@/app/(components)/ModalNewTask";
// import TaskCard from "@/app/(components)/TaskCard";
// import { dataGridClassNames, dataGridSxStyles } from "../../../../lib/utils";
// import {
//   Priority,
//   Task,
//   useGetTasksByUserQuery,
// } from "@/state/api";
// import { DataGrid, GridColDef } from "@mui/x-data-grid";
// import React, { useState } from "react";
// type Props = {
//   priority: Priority;
// };
// const columns: GridColDef[] = [
//   {
//     field: "title",
//     headerName: "Title",
//     width: 100,
//   },
//   {
//     field: "description",
//     headerName: "Description",
//     width: 200,
//   },
//   {
//     field: "status",
//     headerName: "Status",
//     width: 130,
//     renderCell: (params) => (
//       <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
//         {params.value}
//       </span>
//     ),
//   },
//   {
//     field: "priority",
//     headerName: "Priority",
//     width: 75,
//   },
//   {
//     field: "tags",
//     headerName: "Tags",
//     width: 130,
//   },
//   {
//     field: "startDate",
//     headerName: "Start Date",
//     width: 130,
//   },
//   {
//     field: "dueDate",
//     headerName: "Due Date",
//     width: 130,
//   },
//   {
//     field: "author",
//     headerName: "Author",
//     width: 150,
//     renderCell: (params) => params.value.username || "Unknown",
//   },
//   {
//     field: "assignee",
//     headerName: "Assignee",
//     width: 150,
//     renderCell: (params) => params.value.username || "Unassigned",
//   },
// ];
// const ReusablePriorityPage = ({ priority }: Props) => {
//   const [view, setView] = useState("list");
//   const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);
//   const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
//   return (
//     <div className="m-5 p-4">
//       <ModalNewTask
//         isOpen={isModalNewTaskOpen}
//         onClose={() => setIsModalNewTaskOpen(false)}
//       />
//       <Header
//         name="Priority Page"
//         buttonComponent={
//           <button
//             className="mr-3 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
//             onClick={() => setIsModalNewTaskOpen(true)}
//           >
//             Add Task
//           </button>
//         }
//       />
//       <div className="mb-4 flex justify-start">
//         <button
//           className={`px-4 py-2 ${
//             view === "list" ? "bg-gray-300" : "bg-white"
//           } rounded-l`}
//           onClick={() => setView("list")}
//         >
//           List
//         </button>
//         <button
//           className={`px-4 py-2 ${
//             view === "table" ? "bg-gray-300" : "bg-white"
//           } rounded-l`}
//           onClick={() => setView("table")}
//         >
//           Table
//         </button>
//       </div>
//       {isLoading ? (
//         <div>Loading tasks...</div>
//       ) : view === "list" ? (
//         <div className="grid grid-cols-1 gap-4">
//           {filteredTasks?.map((task: Task) => (
//             <TaskCard key={task.id} task={task} />
//           ))}
//         </div>
//       ) : (
//         view === "table" &&
//         filteredTasks && (
//           <div className="z-0 w-full">
//             <DataGrid
//               rows={filteredTasks}
//               columns={columns}
//               checkboxSelection
//               getRowId={(row) => row.id}
//               className={dataGridClassNames}
//               sx={dataGridSxStyles(isDarkMode)}
//             />
//           </div>
//         )
//       )}
//     </div>
//   );
// };
// export default ReusablePriorityPage;
}}),
"[project]/src/state/api.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Priority": (()=>Priority),
    "Status": (()=>Status),
    "api": (()=>api),
    "useCreateProjectMutation": (()=>useCreateProjectMutation),
    "useCreateTaskMutation": (()=>useCreateTaskMutation),
    "useGetProjectsQuery": (()=>useGetProjectsQuery),
    "useGetTasksByUserQuery": (()=>useGetTasksByUserQuery),
    "useGetTasksQuery": (()=>useGetTasksQuery),
    "useGetTeamsQuery": (()=>useGetTeamsQuery),
    "useGetUsersQuery": (()=>useGetUsersQuery),
    "useSearchQuery": (()=>useSearchQuery),
    "useUpdateTaskStatusMutation": (()=>useUpdateTaskStatusMutation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-rsc] (ecmascript)");
;
var Priority = /*#__PURE__*/ function(Priority) {
    Priority["Urgent"] = "Urgent";
    Priority["High"] = "High";
    Priority["Medium"] = "Medium";
    Priority["Low"] = "Low";
    Priority["Backlog"] = "Backlog";
    return Priority;
}({});
var Status = /*#__PURE__*/ function(Status) {
    Status["ToDo"] = "To Do";
    Status["WorkInProgress"] = "Work In Progress";
    Status["UnderReview"] = "Under Review";
    Status["Completed"] = "Completed";
    return Status;
}({});
const api = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
        baseUrl: ("TURBOPACK compile-time value", "http://localhost:8000")
    }),
    reducerPath: "api",
    tagTypes: [
        "Projects",
        "Tasks",
        "Users",
        "Teams"
    ],
    endpoints: (build)=>({
            getProjects: build.query({
                query: ()=>"projects",
                providesTags: [
                    "Projects"
                ]
            }),
            createProject: build.mutation({
                query: (project)=>({
                        url: "projects",
                        method: "POST",
                        body: project
                    }),
                invalidatesTags: [
                    "Projects"
                ]
            }),
            getTasks: build.query({
                query: ({ projectId })=>`tasks?projectId=${projectId}`,
                providesTags: (result)=>result ? result.map(({ id })=>({
                            type: "Tasks",
                            id
                        })) : [
                        {
                            type: "Tasks"
                        }
                    ]
            }),
            getTasksByUser: build.query({
                query: (userId)=>`tasks/user/${userId}`,
                providesTags: (result, error, userId)=>result ? result.map(({ id })=>({
                            type: "Tasks",
                            id
                        })) : [
                        {
                            type: "Tasks",
                            id: userId
                        }
                    ]
            }),
            createTask: build.mutation({
                query: (task)=>({
                        url: "tasks",
                        method: "POST",
                        body: task
                    }),
                invalidatesTags: [
                    "Tasks"
                ]
            }),
            updateTaskStatus: build.mutation({
                query: ({ taskId, status })=>({
                        url: `tasks/${taskId}/status`,
                        method: "PATCH",
                        body: {
                            status
                        }
                    }),
                invalidatesTags: (result, error, { taskId })=>[
                        {
                            type: "Tasks",
                            id: taskId
                        }
                    ]
            }),
            getUsers: build.query({
                query: ()=>"users",
                providesTags: [
                    "Users"
                ]
            }),
            getTeams: build.query({
                query: ()=>"teams",
                providesTags: [
                    "Teams"
                ]
            }),
            search: build.query({
                query: (query)=>`search?query=${query}`
            })
        })
});
const { useGetProjectsQuery, useCreateProjectMutation, useGetTasksQuery, useCreateTaskMutation, useUpdateTaskStatusMutation, useSearchQuery, useGetUsersQuery, useGetTeamsQuery, useGetTasksByUserQuery } = api;
}}),
"[project]/src/app/priority/backlog/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$priority$2f$reusablePriorityPage$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/priority/reusablePriorityPage/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/api.ts [app-rsc] (ecmascript)");
;
;
;
const Urgent = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$priority$2f$reusablePriorityPage$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        priority: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Priority"].Backlog
    }, void 0, false, {
        fileName: "[project]/src/app/priority/backlog/page.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
};
const __TURBOPACK__default__export__ = Urgent;
}}),
"[project]/src/app/priority/backlog/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/priority/backlog/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_3adb1bb2._.js.map