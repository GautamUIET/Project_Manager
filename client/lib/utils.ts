export const dataGridClassNames =
  "border border-gray-200 bg-white shadow hover:shadow-md transition-shadow duration-200 dark:border-stroke-dark dark:bg-dark-secondary dark:text-gray-200";

export const dataGridSxStyles = (isDarkMode: boolean) => {
  const borderColor = isDarkMode ? "#2d3135" : "#e5e7eb";
  const headerBgColor = isDarkMode ? "#1d1f21" : "white";
  const textColor = isDarkMode ? "#e5e7eb" : "inherit";
  const iconColor = isDarkMode ? "#a3a3a3" : "inherit";
  const rowHoverBg = isDarkMode ? "#2a2e32" : "#f9fafb";

  return {
    "& .MuiDataGrid-root": {
      border: "none",
    },
    "& .MuiDataGrid-columnHeaders": {
      color: textColor,
      borderBottom: `1px solid ${borderColor}`,
      '& [role="row"] > *': {
        backgroundColor: headerBgColor,
        borderRight: `1px solid ${borderColor}`,
        "&:last-child": {
          borderRight: "none",
        },
      },
    },
    "& .MuiDataGrid-columnHeader": {
      "&:focus, &:focus-within": {
        outline: "none",
      },
    },
    "& .MuiDataGrid-virtualScroller": {
      backgroundColor: isDarkMode ? "#1d1f21" : "white",
    },
    "& .MuiDataGrid-cell": {
      borderBottom: `1px solid ${borderColor}`,
      "&:focus, &:focus-within": {
        outline: "none",
      },
    },
    "& .MuiDataGrid-row": {
      borderBottom: `1px solid ${borderColor}`,
      "&:hover": {
        backgroundColor: rowHoverBg,
      },
      "&.Mui-selected": {
        backgroundColor: isDarkMode ? "#2a3a4a" : "#e0e9f5",
        "&:hover": {
          backgroundColor: isDarkMode ? "#2a4a5a" : "#d0d9e5",
        },
      },
    },
    "& .MuiIconButton-root": {
      color: iconColor,
    },
    "& .MuiTablePagination-root": {
      color: textColor,
      borderTop: `1px solid ${borderColor}`,
    },
    "& .MuiTablePagination-selectIcon": {
      color: iconColor,
    },
    "& .MuiDataGrid-menuIcon": {
      color: iconColor,
    },
    "& .MuiDataGrid-sortIcon": {
      color: iconColor,
    },
    "& .MuiDataGrid-footerContainer": {
      borderTop: `1px solid ${borderColor}`,
    },
    "& .MuiDataGrid-toolbarContainer": {
      color: textColor,
    },
    "& .MuiCheckbox-root": {
      color: iconColor,
    },
    "& .MuiDataGrid-overlay": {
      color: textColor,
    },
  };
};