module.exports = {

"[project]/src/app/priority/reusablePriorityPage/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// import { useAppSelector } from "@/app/(components)/redux";
// import Header from "@/app/(components)/Header";
// import ModalNewTask from "@/app/(components)/ModalNewTask";
// import TaskCard from "@/app/(components)/TaskCard";
// import { dataGridClassNames, dataGridSxStyles } from "../../../../lib/utils";
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$esm$2f$DataGrid$2f$DataGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/x-data-grid/esm/DataGrid/DataGrid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const columns = [
    {
        field: "title",
        headerName: "Title",
        width: 100
    },
    {
        field: "description",
        headerName: "Description",
        width: 200
    },
    {
        field: "status",
        headerName: "Status",
        width: 130,
        renderCell: (params)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800",
                children: params.value
            }, void 0, false, {
                fileName: "[project]/src/app/priority/reusablePriorityPage/index.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this)
    },
    {
        field: "priority",
        headerName: "Priority",
        width: 75
    },
    {
        field: "tags",
        headerName: "Tags",
        width: 130
    },
    {
        field: "startDate",
        headerName: "Start Date",
        width: 130
    },
    {
        field: "dueDate",
        headerName: "Due Date",
        width: 130
    },
    {
        field: "author",
        headerName: "Author",
        width: 150,
        renderCell: (params)=>params.value.username || "Unknown"
    },
    {
        field: "assignee",
        headerName: "Assignee",
        width: 150,
        renderCell: (params)=>params.value.username || "Unassigned"
    }
];
const ReusablePriorityPage = ({ priority })=>{
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("list");
    const [isModalNewTaskOpen, setIsModalNewTaskOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { data: currentUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGetAuthUserQuery"])({});
    const userId = currentUser?.userDetails?.userId ?? null;
    const { data: tasks, isLoading, isError: isTasksError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGetTasksByUserQuery"])(userId || 0, {
        skip: userId === null
    });
    const isDarkMode = useAppSelector((state)=>state.global.isDarkMode);
    const filteredTasks = tasks?.filter((task)=>task.priority === priority);
    if (isTasksError || !tasks) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Error fetching tasks"
    }, void 0, false, {
        fileName: "[project]/src/app/priority/reusablePriorityPage/index.tsx",
        lineNumber: 245,
        columnNumber: 38
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "m-5 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ModalNewTask, {
                isOpen: isModalNewTaskOpen,
                onClose: ()=>setIsModalNewTaskOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/app/priority/reusablePriorityPage/index.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {
                name: "Priority Page",
                buttonComponent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "mr-3 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700",
                    onClick: ()=>setIsModalNewTaskOpen(true),
                    children: "Add Task"
                }, void 0, false, {
                    fileName: "[project]/src/app/priority/reusablePriorityPage/index.tsx",
                    lineNumber: 256,
                    columnNumber: 11
                }, void 0)
            }, void 0, false, {
                fileName: "[project]/src/app/priority/reusablePriorityPage/index.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex justify-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `px-4 py-2 ${view === "list" ? "bg-gray-300" : "bg-white"} rounded-l`,
                        onClick: ()=>setView("list"),
                        children: "List"
                    }, void 0, false, {
                        fileName: "[project]/src/app/priority/reusablePriorityPage/index.tsx",
                        lineNumber: 265,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `px-4 py-2 ${view === "table" ? "bg-gray-300" : "bg-white"} rounded-l`,
                        onClick: ()=>setView("table"),
                        children: "Table"
                    }, void 0, false, {
                        fileName: "[project]/src/app/priority/reusablePriorityPage/index.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/priority/reusablePriorityPage/index.tsx",
                lineNumber: 264,
                columnNumber: 7
            }, this),
            isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "Loading tasks..."
            }, void 0, false, {
                fileName: "[project]/src/app/priority/reusablePriorityPage/index.tsx",
                lineNumber: 283,
                columnNumber: 9
            }, this) : view === "list" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-4",
                children: filteredTasks?.map((task)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TaskCard, {
                        task: task
                    }, task.id, false, {
                        fileName: "[project]/src/app/priority/reusablePriorityPage/index.tsx",
                        lineNumber: 287,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/priority/reusablePriorityPage/index.tsx",
                lineNumber: 285,
                columnNumber: 9
            }, this) : view === "table" && filteredTasks && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-0 w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$esm$2f$DataGrid$2f$DataGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DataGrid"], {
                    rows: filteredTasks,
                    columns: columns,
                    checkboxSelection: true,
                    getRowId: (row)=>row.id,
                    className: dataGridClassNames,
                    sx: dataGridSxStyles(isDarkMode)
                }, void 0, false, {
                    fileName: "[project]/src/app/priority/reusablePriorityPage/index.tsx",
                    lineNumber: 294,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/priority/reusablePriorityPage/index.tsx",
                lineNumber: 293,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/priority/reusablePriorityPage/index.tsx",
        lineNumber: 248,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = ReusablePriorityPage;
}}),

};

//# sourceMappingURL=src_app_priority_reusablePriorityPage_index_tsx_01d74079._.js.map