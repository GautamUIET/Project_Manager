"use client";

import {
  Priority,
  Project,
  Task,
  useGetProjectsQuery,
  useGetTasksQuery,
} from "@/state/api";
import React from "react";
import { useAppSelector } from "../(components)/redux";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Header from "../(components)/Header";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { dataGridClassNames, dataGridSxStyles } from "../../../lib/utils";

const taskColumns: GridColDef[] = [
  { field: "title", headerName: "Title", width: 200 },
  { field: "status", headerName: "Status", width: 150 },
  { field: "priority", headerName: "Priority", width: 150 },
  { field: "dueDate", headerName: "Due Date", width: 150 },
];

// Normalize priority to title case (e.g., "High", "Medium", "Low")
const normalizePriority = (priority: string): string => {
  return priority
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444"];
const BAR_COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"]; // Unique colors for each priority

const HomePage = () => {
  const {
    data: tasks,
    isLoading: tasksLoading,
    isError: tasksError,
  } = useGetTasksQuery({ projectId: parseInt("1") });
  const { data: projects, isLoading: isProjectsLoading } =
    useGetProjectsQuery();

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  if (tasksLoading || isProjectsLoading) return <div className="flex justify-center items-center h-screen text-xl font-semibold text-gray-600 dark:text-gray-300">Loading...</div>;
  if (tasksError || !tasks || !projects) return <div className="flex justify-center items-center h-screen text-xl font-semibold text-red-600 dark:text-red-400">Error fetching data</div>;

  // Debug: Log projects with parsed endDate
  console.log("Projects:", projects.map(p => ({
    id: p.id,
    name: p.name,
    endDate: p.endDate,
    parsedEndDate: p.endDate ? new Date(p.endDate).toISOString() : null
  })));

  const priorityCount = tasks.reduce(
    (acc: Record<string, number>, task: Task) => {
      const { priority } = task;
      const normalizedPriority = normalizePriority(priority ?? "Unknown");
      acc[normalizedPriority as Priority] = (acc[normalizedPriority as Priority] || 0) + 1;
      return acc;
    },
    {},
  );

  const taskDistribution = Object.keys(priorityCount).map((key) => ({
    name: key,
    count: priorityCount[key],
  }));

  const statusCount = projects.reduce(
    (acc: Record<string, number>, project: Project) => {
      const currentDate = new Date();
      const endDate = project.endDate ? new Date(project.endDate) : null;
      const status = endDate && endDate <= currentDate ? "Completed" : "Active";
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    },
    {},
  );

  // Debug: Log status counts
  console.log("Status Count:", statusCount);
  const projectStatus = Object.keys(statusCount).map((key) => ({
    name: key,
    count: statusCount[key],
  }));
  console.log("Project Status:", projectStatus);

  console.log("Task Distribution:", taskDistribution);

  const chartColors = isDarkMode
    ? {
        bar: "url(#barGradientDark)",
        barGrid: "#4B5563",
        pieFill: "#60A5FA",
        text: "#F3F4F6",
        tooltipBg: "#1F2937",
        tooltipText: "#F3F4F6",
      }
    : {
        bar: "url(#barGradientLight)",
        barGrid: "#D1D5DB",
        pieFill: "#34D399",
        text: "#111827",
        tooltipBg: "#FFFFFF",
        tooltipText: "#111827",
      };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg shadow-lg p-4" style={{ backgroundColor: chartColors.tooltipBg, color: chartColors.tooltipText }}>
          <p className="font-semibold">{`${payload[0].name}: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return (
      <text x={x} y={y} fill={chartColors.text} textAnchor="middle" dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-6 md:p-8">
      <Header name="Project Management Dashboard" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
          <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            Task Priority Distribution
          </h3>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={taskDistribution}>
              <defs>
                <linearGradient id="barGradientLight" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#60A5FA" stopOpacity={0.7} />
                </linearGradient>
                <linearGradient id="barGradientDark" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#60A5FA" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity={0.7} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={chartColors.barGrid} />
              <XAxis dataKey="name" stroke={chartColors.text} />
              <YAxis stroke={chartColors.text} />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar
                dataKey="count"
                radius={[8, 8, 0, 0]}
                animationDuration={1000}
              >
                {taskDistribution.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={BAR_COLORS[index % BAR_COLORS.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
          <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            Project Status
          </h3>
          {projectStatus.length === 1 && projectStatus[0].name === "Completed" && (
            <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
              All projects are completed. Add new projects or update existing ones to mark them as active (endDate in the future or null).
            </p>
          )}
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                dataKey="count"
                data={projectStatus}
                fill={chartColors.pieFill}
                label={renderCustomizedLabel}
                labelLine={false}
                animationDuration={1000}
              >
                {projectStatus.map((entry: { name: string; count: number }, index: number) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:col-span-2 transition-all duration-300 hover:shadow-xl">
          <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            Your Tasks
          </h3>
          <div style={{ height: 450, width: "100%" }}>
            <DataGrid
              rows={tasks}
              columns={taskColumns}
              checkboxSelection
              loading={tasksLoading}
              getRowClassName={() => "data-grid-row"}
              getCellClassName={() => "data-grid-cell"}
              className={dataGridClassNames}
              sx={{
                ...dataGridSxStyles(isDarkMode),
                "& .MuiDataGrid-row": {
                  transition: "background-color 0.2s",
                  "&:hover": {
                    backgroundColor: isDarkMode ? "#4B5563" : "#F3F4F6",
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;