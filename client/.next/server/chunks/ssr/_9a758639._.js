module.exports = {

"[project]/.next-internal/server/app/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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
"[project]/src/app/(components)/redux.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "makeStore": (()=>makeStore),
    "useAppDispatch": (()=>useAppDispatch),
    "useAppSelector": (()=>useAppSelector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/(components)/redux.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(components)/redux.tsx <module evaluation>", "default");
const makeStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call makeStore() from the server but makeStore is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(components)/redux.tsx <module evaluation>", "makeStore");
const useAppDispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useAppDispatch() from the server but useAppDispatch is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(components)/redux.tsx <module evaluation>", "useAppDispatch");
const useAppSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useAppSelector() from the server but useAppSelector is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(components)/redux.tsx <module evaluation>", "useAppSelector");
}}),
"[project]/src/app/(components)/redux.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "makeStore": (()=>makeStore),
    "useAppDispatch": (()=>useAppDispatch),
    "useAppSelector": (()=>useAppSelector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/(components)/redux.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(components)/redux.tsx", "default");
const makeStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call makeStore() from the server but makeStore is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(components)/redux.tsx", "makeStore");
const useAppDispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useAppDispatch() from the server but useAppDispatch is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(components)/redux.tsx", "useAppDispatch");
const useAppSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useAppSelector() from the server but useAppSelector is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(components)/redux.tsx", "useAppSelector");
}}),
"[project]/src/app/(components)/redux.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$components$292f$redux$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/(components)/redux.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$components$292f$redux$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/(components)/redux.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$components$292f$redux$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/(components)/Header/index.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const Header = ({ name, buttonComponent, isSmallText = false })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-5 flex w-full items-center justify-between",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: `${isSmallText ? "text-lg" : "text-2xl"} font-semibold dark:text-white`,
                children: name
            }, void 0, false, {
                fileName: "[project]/src/app/(components)/Header/index.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            buttonComponent
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(components)/Header/index.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Header;
}}),
"[project]/lib/utils.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "dataGridClassNames": (()=>dataGridClassNames),
    "dataGridSxStyles": (()=>dataGridSxStyles)
});
const dataGridClassNames = "border border-gray-200 bg-white shadow hover:shadow-md transition-shadow duration-200 dark:border-stroke-dark dark:bg-dark-secondary dark:text-gray-200";
const dataGridSxStyles = (isDarkMode)=>{
    const borderColor = isDarkMode ? "#2d3135" : "#e5e7eb";
    const headerBgColor = isDarkMode ? "#1d1f21" : "white";
    const textColor = isDarkMode ? "#e5e7eb" : "inherit";
    const iconColor = isDarkMode ? "#a3a3a3" : "inherit";
    const rowHoverBg = isDarkMode ? "#2a2e32" : "#f9fafb";
    return {
        "& .MuiDataGrid-root": {
            border: "none"
        },
        "& .MuiDataGrid-columnHeaders": {
            color: textColor,
            borderBottom: `1px solid ${borderColor}`,
            '& [role="row"] > *': {
                backgroundColor: headerBgColor,
                borderRight: `1px solid ${borderColor}`,
                "&:last-child": {
                    borderRight: "none"
                }
            }
        },
        "& .MuiDataGrid-columnHeader": {
            "&:focus, &:focus-within": {
                outline: "none"
            }
        },
        "& .MuiDataGrid-virtualScroller": {
            backgroundColor: isDarkMode ? "#1d1f21" : "white"
        },
        "& .MuiDataGrid-cell": {
            borderBottom: `1px solid ${borderColor}`,
            "&:focus, &:focus-within": {
                outline: "none"
            }
        },
        "& .MuiDataGrid-row": {
            borderBottom: `1px solid ${borderColor}`,
            "&:hover": {
                backgroundColor: rowHoverBg
            },
            "&.Mui-selected": {
                backgroundColor: isDarkMode ? "#2a3a4a" : "#e0e9f5",
                "&:hover": {
                    backgroundColor: isDarkMode ? "#2a4a5a" : "#d0d9e5"
                }
            }
        },
        "& .MuiIconButton-root": {
            color: iconColor
        },
        "& .MuiTablePagination-root": {
            color: textColor,
            borderTop: `1px solid ${borderColor}`
        },
        "& .MuiTablePagination-selectIcon": {
            color: iconColor
        },
        "& .MuiDataGrid-menuIcon": {
            color: iconColor
        },
        "& .MuiDataGrid-sortIcon": {
            color: iconColor
        },
        "& .MuiDataGrid-footerContainer": {
            borderTop: `1px solid ${borderColor}`
        },
        "& .MuiDataGrid-toolbarContainer": {
            color: textColor
        },
        "& .MuiCheckbox-root": {
            color: iconColor
        },
        "& .MuiDataGrid-overlay": {
            color: textColor
        }
    };
};
}}),
"[project]/src/app/home/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// "use client";
// import {
//   Priority,
//   Project,
//   Task,
//   useGetProjectsQuery,
//   useGetTasksQuery,
// } from "@/state/api";
// import React from "react";
// import { useAppSelector } from "../(components)/redux";
// import { DataGrid, GridColDef } from "@mui/x-data-grid";
// import Header from "../(components)/Header";
// import {
//   Bar,
//   BarChart,
//   CartesianGrid,
//   Cell,
//   Legend,
//   Pie,
//   PieChart,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";
// import { dataGridClassNames, dataGridSxStyles } from "../../../lib/utils";
// const taskColumns: GridColDef[] = [
//   { field: "title", headerName: "Title", width: 200 },
//   { field: "status", headerName: "Status", width: 150 },
//   { field: "priority", headerName: "Priority", width: 150 },
//   { field: "dueDate", headerName: "Due Date", width: 150 },
// ];
// const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444"];
// const HomePage = () => {
//   const {
//     data: tasks,
//     isLoading: tasksLoading,
//     isError: tasksError,
//   } = useGetTasksQuery({ projectId: parseInt("1") });
//   const { data: projects, isLoading: isProjectsLoading } =
//     useGetProjectsQuery();
//   const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
//   if (tasksLoading || isProjectsLoading) return <div className="flex justify-center items-center h-screen text-xl font-semibold text-gray-600 dark:text-gray-300">Loading...</div>;
//   if (tasksError || !tasks || !projects) return <div className="flex justify-center items-center h-screen text-xl font-semibold text-red-600 dark:text-red-400">Error fetching data</div>;
//   // Debug: Log projects with parsed endDate
//   console.log("Projects:", projects.map(p => ({
//     id: p.id,
//     name: p.name,
//     endDate: p.endDate,
//     parsedEndDate: p.endDate ? new Date(p.endDate).toISOString() : null
//   })));
//   const priorityCount = tasks.reduce(
//     (acc: Record<string, number>, task: Task) => {
//       const { priority } = task;
//       acc[priority as Priority] = (acc[priority as Priority] || 0) + 1;
//       return acc;
//     },
//     {},
//   );
//   const taskDistribution = Object.keys(priorityCount).map((key) => ({
//     name: key,
//     count: priorityCount[key],
//   }));
//   const statusCount = projects.reduce(
//     (acc: Record<string, number>, project: Project) => {
//       const currentDate = new Date();
//       const endDate = project.endDate ? new Date(project.endDate) : null;
//       const status = endDate && endDate <= currentDate ? "Completed" : "Active";
//       acc[status] = (acc[status] || 0) + 1;
//       return acc;
//     },
//     {},
//   );
//   // Debug: Log status counts
//   console.log("Status Count:", statusCount);
//   const projectStatus = Object.keys(statusCount).map((key) => ({
//     name: key,
//     count: statusCount[key],
//   }));
//   console.log("Project Status:", projectStatus);
//   const chartColors = isDarkMode
//     ? {
//         bar: "url(#barGradientDark)",
//         barGrid: "#4B5563",
//         pieFill: "#60A5FA",
//         text: "#F3F4F6",
//         tooltipBg: "#1F2937",
//         tooltipText: "#F3F4F6",
//       }
//     : {
//         bar: "url(#barGradientLight)",
//         barGrid: "#D1D5DB",
//         pieFill: "#34D399",
//         text: "#111827",
//         tooltipBg: "#FFFFFF",
//         tooltipText: "#111827",
//       };
//   const CustomTooltip = ({ active, payload }: any) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="rounded-lg shadow-lg p-4" style={{ backgroundColor: chartColors.tooltipBg, color: chartColors.tooltipText }}>
//           <p className="font-semibold">{`${payload[0].name}: ${payload[0].value}`}</p>
//         </div>
//       );
//     }
//     return null;
//   };
//   const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
//     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//     const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
//     const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
//     return (
//       <text x={x} y={y} fill={chartColors.text} textAnchor="middle" dominantBaseline="central">
//         {`${(percent * 100).toFixed(0)}%`}
//       </text>
//     );
//   };
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-6 md:p-8">
//       <Header name="Project Management Dashboard" />
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
//           <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
//             Task Priority Distribution
//           </h3>
//           <ResponsiveContainer width="100%" height={350}>
//             <BarChart data={taskDistribution}>
//               <defs>
//                 <linearGradient id="barGradientLight" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.9} />
//                   <stop offset="100%" stopColor="#60A5FA" stopOpacity={0.7} />
//                 </linearGradient>
//                 <linearGradient id="barGradientDark" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="0%" stopColor="#60A5FA" stopOpacity={0.9} />
//                   <stop offset="100%" stopColor="#3B82F6" stopOpacity={0.7} />
//                 </linearGradient>
//               </defs>
//               <CartesianGrid strokeDasharray="3 3" stroke={chartColors.barGrid} />
//               <XAxis dataKey="name" stroke={chartColors.text} />
//               <YAxis stroke={chartColors.text} />
//               <Tooltip content={<CustomTooltip />} />
//               <Legend />
//               <Bar
//                 dataKey="count"
//                 fill={chartColors.bar}
//                 radius={[8, 8, 0, 0]}
//                 animationDuration={1000}
//               />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//         <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
//           <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
//             Project Status
//           </h3>
//           {projectStatus.length === 1 && projectStatus[0].name === "Completed" && (
//             <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
//               All projects are completed. Add new projects or update existing ones to mark them as active (endDate in the future or null).
//             </p>
//           )}
//           <ResponsiveContainer width="100%" height={350}>
//             <PieChart>
//               <Pie
//                 dataKey="count"
//                 data={projectStatus}
//                 fill={chartColors.pieFill}
//                 label={renderCustomizedLabel}
//                 labelLine={false}
//                 animationDuration={1000}
//               >
//                 {projectStatus.map((entry: { name: string; count: number }, index: number) => (
//                   <Cell
//                     key={`cell-${index}`}
//                     fill={COLORS[index % COLORS.length]}
//                   />
//                 ))}
//               </Pie>
//               <Tooltip content={<CustomTooltip />} />
//               <Legend />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//         <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:col-span-2 transition-all duration-300 hover:shadow-xl">
//           <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
//             Your Tasks
//           </h3>
//           <div style={{ height: 450, width: "100%" }}>
//             <DataGrid
//               rows={tasks}
//               columns={taskColumns}
//               checkboxSelection
//               loading={tasksLoading}
//               getRowClassName={() => "data-grid-row"}
//               getCellClassName={() => "data-grid-cell"}
//               className={dataGridClassNames}
//               sx={{
//                 ...dataGridSxStyles(isDarkMode),
//                 "& .MuiDataGrid-row": {
//                   transition: "background-color 0.2s",
//                   "&:hover": {
//                     backgroundColor: isDarkMode ? "#4B5563" : "#F3F4F6",
//                   },
//                 },
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default HomePage;
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$components$292f$redux$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(components)/redux.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/x-data-grid/esm/index.js [app-rsc] (ecmascript) <exports>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$components$292f$Header$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(components)/Header/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Legend.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/polar/Pie.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/PieChart.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-rsc] (ecmascript)");
;
({}), "use client";
;
;
;
;
;
;
const taskColumns = [
    {
        field: "title",
        headerName: "Title",
        width: 200
    },
    {
        field: "status",
        headerName: "Status",
        width: 150
    },
    {
        field: "priority",
        headerName: "Priority",
        width: 150
    },
    {
        field: "dueDate",
        headerName: "Due Date",
        width: 150
    }
];
const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042"
];
const HomePage = ()=>{
    const { data: tasks, isLoading: tasksLoading, isError: tasksError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useGetTasksQuery"])({
        projectId: parseInt("1")
    });
    const { data: projects, isLoading: isProjectsLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useGetProjectsQuery"])();
    const isDarkMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$components$292f$redux$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.global.isDarkMode);
    if (tasksLoading || isProjectsLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Loading.."
    }, void 0, false, {
        fileName: "[project]/src/app/home/page.tsx",
        lineNumber: 287,
        columnNumber: 49
    }, this);
    if (tasksError || !tasks || !projects) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Error fetching data"
    }, void 0, false, {
        fileName: "[project]/src/app/home/page.tsx",
        lineNumber: 288,
        columnNumber: 49
    }, this);
    const priorityCount = tasks.reduce((acc, task)=>{
        const { priority } = task;
        acc[priority] = (acc[priority] || 0) + 1;
        return acc;
    }, {});
    const taskDistribution = Object.keys(priorityCount).map((key)=>({
            name: key,
            count: priorityCount[key]
        }));
    const statusCount = projects.reduce((acc, project)=>{
        const status = project.endDate ? "Completed" : "Active";
        acc[status] = (acc[status] || 0) + 1;
        return acc;
    }, {});
    const projectStatus = Object.keys(statusCount).map((key)=>({
            name: key,
            count: statusCount[key]
        }));
    const chartColors = isDarkMode ? {
        bar: "#8884d8",
        barGrid: "#303030",
        pieFill: "#4A90E2",
        text: "#FFFFFF"
    } : {
        bar: "#8884d8",
        barGrid: "#E0E0E0",
        pieFill: "#82ca9d",
        text: "#000000"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container h-full w-[100%] bg-gray-100 bg-transparent p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$components$292f$Header$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                name: "Project Management Dashboard"
            }, void 0, false, {
                fileName: "[project]/src/app/home/page.tsx",
                lineNumber: 334,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-4 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg bg-white p-4 shadow dark:bg-dark-secondary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mb-4 text-lg font-semibold dark:text-white",
                                children: "Task Priority Distribution"
                            }, void 0, false, {
                                fileName: "[project]/src/app/home/page.tsx",
                                lineNumber: 337,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                width: "100%",
                                height: 300,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BarChart"], {
                                    data: taskDistribution,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                            strokeDasharray: "3 3",
                                            stroke: chartColors.barGrid
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home/page.tsx",
                                            lineNumber: 342,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["XAxis"], {
                                            dataKey: "name",
                                            stroke: chartColors.text
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home/page.tsx",
                                            lineNumber: 346,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["YAxis"], {
                                            stroke: chartColors.text
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home/page.tsx",
                                            lineNumber: 347,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tooltip"], {
                                            contentStyle: {
                                                width: "min-content",
                                                height: "min-content"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home/page.tsx",
                                            lineNumber: 348,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Legend"], {}, void 0, false, {
                                            fileName: "[project]/src/app/home/page.tsx",
                                            lineNumber: 354,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Bar"], {
                                            dataKey: "count",
                                            fill: chartColors.bar
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home/page.tsx",
                                            lineNumber: 355,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/home/page.tsx",
                                    lineNumber: 341,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/home/page.tsx",
                                lineNumber: 340,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/home/page.tsx",
                        lineNumber: 336,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg bg-white p-4 shadow dark:bg-dark-secondary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mb-4 text-lg font-semibold dark:text-white",
                                children: "Project Status"
                            }, void 0, false, {
                                fileName: "[project]/src/app/home/page.tsx",
                                lineNumber: 360,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                width: "100%",
                                height: 300,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PieChart"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Pie"], {
                                            dataKey: "count",
                                            data: projectStatus,
                                            fill: "#82ca9d",
                                            label: true,
                                            children: projectStatus.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Cell"], {
                                                    fill: COLORS[index % COLORS.length]
                                                }, `cell-${index}`, false, {
                                                    fileName: "[project]/src/app/home/page.tsx",
                                                    lineNumber: 367,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home/page.tsx",
                                            lineNumber: 365,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
                                            fileName: "[project]/src/app/home/page.tsx",
                                            lineNumber: 373,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Legend"], {}, void 0, false, {
                                            fileName: "[project]/src/app/home/page.tsx",
                                            lineNumber: 374,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/home/page.tsx",
                                    lineNumber: 364,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/home/page.tsx",
                                lineNumber: 363,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/home/page.tsx",
                        lineNumber: 359,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg bg-white p-4 shadow dark:bg-dark-secondary md:col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mb-4 text-lg font-semibold dark:text-white",
                                children: "Your Tasks"
                            }, void 0, false, {
                                fileName: "[project]/src/app/home/page.tsx",
                                lineNumber: 379,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    height: 400,
                                    width: "100%"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["DataGrid"], {
                                    rows: tasks,
                                    columns: taskColumns,
                                    checkboxSelection: true,
                                    loading: tasksLoading,
                                    getRowClassName: ()=>"data-grid-row",
                                    getCellClassName: ()=>"data-grid-cell",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dataGridClassNames"],
                                    sx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dataGridSxStyles"])(isDarkMode)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/home/page.tsx",
                                    lineNumber: 383,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/home/page.tsx",
                                lineNumber: 382,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/home/page.tsx",
                        lineNumber: 378,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/home/page.tsx",
                lineNumber: 335,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/home/page.tsx",
        lineNumber: 333,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = HomePage;
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/home/page.tsx [app-rsc] (ecmascript)");
;
;
const page = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 4,
        columnNumber: 10
    }, this);
};
const __TURBOPACK__default__export__ = page;
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_9a758639._.js.map