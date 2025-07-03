(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/(components)/Header/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Header = ({ name, buttonComponent, isSmallText = false })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-5 flex w-full items-center justify-between",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
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
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/users/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$components$292f$Header$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(components)/Header/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$components$292f$redux$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(components)/redux.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$esm$2f$DataGrid$2f$DataGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/x-data-grid/esm/DataGrid/DataGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$esm$2f$components$2f$containers$2f$GridToolbarContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/x-data-grid/esm/components/containers/GridToolbarContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$esm$2f$components$2f$toolbar$2f$GridToolbarExport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/x-data-grid/esm/components/toolbar/GridToolbarExport.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$esm$2f$components$2f$toolbar$2f$GridToolbarFilterButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/x-data-grid/esm/components/toolbar/GridToolbarFilterButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const CustomToolbar = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$esm$2f$components$2f$containers$2f$GridToolbarContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GridToolbarContainer"], {
        className: "toolbar flex gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$esm$2f$components$2f$toolbar$2f$GridToolbarFilterButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GridToolbarFilterButton"], {}, void 0, false, {
                fileName: "[project]/src/app/users/page.tsx",
                lineNumber: 19,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$esm$2f$components$2f$toolbar$2f$GridToolbarExport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GridToolbarExport"], {}, void 0, false, {
                fileName: "[project]/src/app/users/page.tsx",
                lineNumber: 20,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/users/page.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, this);
_c = CustomToolbar;
const columns = [
    {
        field: "userId",
        headerName: "ID",
        width: 100
    },
    {
        field: "username",
        headerName: "Username",
        width: 150
    },
    {
        field: "profilePictureUrl",
        headerName: "Profile Picture",
        width: 100,
        renderCell: (params)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-full w-full items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-9 w-9",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: `/${params.value}`,
                        alt: params.row.username,
                        width: 100,
                        height: 50,
                        className: "h-full rounded-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/src/app/users/page.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/users/page.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/users/page.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
    }
];
const Users = ()=>{
    _s();
    const { data: users, isLoading, isError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetUsersQuery"])();
    const isDarkMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$components$292f$redux$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "Users.useAppSelector[isDarkMode]": (state)=>state.global.isDarkMode
    }["Users.useAppSelector[isDarkMode]"]);
    if (isLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/src/app/users/page.tsx",
        lineNumber: 52,
        columnNumber: 25
    }, this);
    if (isError || !users) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Error fetching users"
    }, void 0, false, {
        fileName: "[project]/src/app/users/page.tsx",
        lineNumber: 53,
        columnNumber: 33
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full flex-col p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$components$292f$Header$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                name: "Users"
            }, void 0, false, {
                fileName: "[project]/src/app/users/page.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: 650,
                    width: "100%"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$esm$2f$DataGrid$2f$DataGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataGrid"], {
                    rows: users || [],
                    columns: columns,
                    getRowId: (row)=>row.userId,
                    pagination: true,
                    slots: {
                        toolbar: CustomToolbar
                    },
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataGridClassNames"],
                    sx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataGridSxStyles"])(isDarkMode)
                }, void 0, false, {
                    fileName: "[project]/src/app/users/page.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/users/page.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/users/page.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
};
_s(Users, "nxV8DpJmiI8yYhkZYbr8cv12cQY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetUsersQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$components$292f$redux$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"]
    ];
});
_c1 = Users;
const __TURBOPACK__default__export__ = Users;
var _c, _c1;
__turbopack_context__.k.register(_c, "CustomToolbar");
__turbopack_context__.k.register(_c1, "Users");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_b5942f7e._.js.map