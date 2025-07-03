module.exports = {

"[project]/src/app/(components)/Header/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const Header = ({ name, buttonComponent, isSmallText = false })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-5 flex w-full items-center justify-between",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
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
"[project]/lib/utils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/src/app/teams/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$components$292f$redux$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(components)/redux.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$components$292f$Header$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(components)/Header/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$esm$2f$DataGrid$2f$DataGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/x-data-grid/esm/DataGrid/DataGrid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$esm$2f$components$2f$containers$2f$GridToolbarContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/x-data-grid/esm/components/containers/GridToolbarContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$esm$2f$components$2f$toolbar$2f$GridToolbarExport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/x-data-grid/esm/components/toolbar/GridToolbarExport.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$esm$2f$components$2f$toolbar$2f$GridToolbarFilterButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/x-data-grid/esm/components/toolbar/GridToolbarFilterButton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const CustomToolbar = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$esm$2f$components$2f$containers$2f$GridToolbarContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GridToolbarContainer"], {
        className: "toolbar flex gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$esm$2f$components$2f$toolbar$2f$GridToolbarFilterButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GridToolbarFilterButton"], {}, void 0, false, {
                fileName: "[project]/src/app/teams/page.tsx",
                lineNumber: 17,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$esm$2f$components$2f$toolbar$2f$GridToolbarExport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GridToolbarExport"], {}, void 0, false, {
                fileName: "[project]/src/app/teams/page.tsx",
                lineNumber: 18,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/teams/page.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, this);
const columns = [
    {
        field: "id",
        headerName: "Team ID",
        width: 100
    },
    {
        field: "teamName",
        headerName: "Team Name",
        width: 200
    },
    {
        field: "productOwnerUsername",
        headerName: "Product Owner",
        width: 200
    },
    {
        field: "projectManagerUsername",
        headerName: "Project Manager",
        width: 200
    }
];
const Teams = ()=>{
    const { data: teams, isLoading, isError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGetTeamsQuery"])();
    const isDarkMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$components$292f$redux$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.global.isDarkMode);
    if (isLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/src/app/teams/page.tsx",
        lineNumber: 37,
        columnNumber: 25
    }, this);
    if (isError || !teams) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Error fetching teams"
    }, void 0, false, {
        fileName: "[project]/src/app/teams/page.tsx",
        lineNumber: 38,
        columnNumber: 33
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full flex-col p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$components$292f$Header$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                name: "Teams"
            }, void 0, false, {
                fileName: "[project]/src/app/teams/page.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: 650,
                    width: "100%"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$esm$2f$DataGrid$2f$DataGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DataGrid"], {
                    rows: teams || [],
                    columns: columns,
                    pagination: true,
                    slots: {
                        toolbar: CustomToolbar
                    },
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataGridClassNames"],
                    sx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataGridSxStyles"])(isDarkMode)
                }, void 0, false, {
                    fileName: "[project]/src/app/teams/page.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/teams/page.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/teams/page.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Teams;
}}),

};

//# sourceMappingURL=_5b5511df._.js.map