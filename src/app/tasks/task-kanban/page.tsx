import React from "react";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TaskKanban from "../../../components/tasks/KanbanTasks";

export const metadata: Metadata = {
  title: "Kanban Tasks",
  description:
    "This is the kanban tasks page of the CRM. Here you can view all the tasks in a kanban view.",
};

const TaskKanbanPage = () => {
  return (
    <DefaultLayout>
      <TaskKanban />
    </DefaultLayout>
  );
};

export default TaskKanbanPage;
