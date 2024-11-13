import React from 'react';
import { TaskCard } from './TaskCard';
import { useTasks } from '../context/TaskContext';

export function TaskColumn({ state }: { state: string }) {
  type TaskState = "Draft" | "Creado" | "En proceso" | "En review" | "To Deploy" | "Rechazado";

  const taskStateOrder: TaskState[] = ["Draft", "Creado", "En proceso", "En review", "To Deploy", "Rechazado"];

  const { tasks, updateTask } = useTasks();
  const columnTasks = tasks.filter(task => task.state === state);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    const column = e.currentTarget as HTMLDivElement;
    column.classList.add('bg-gray-200');
  };

  const handleDragLeave = (e: React.DragEvent) => {
    const column = e.currentTarget as HTMLDivElement;
    column.classList.remove('bg-gray-200');
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    const column = e.currentTarget as HTMLDivElement;
    column.classList.remove('bg-gray-200');

    const taskId = e.dataTransfer.getData('text/plain');
    const taskToUpdate = tasks.find(task => task.id === taskId);

    if (taskToUpdate) {
      let nextState: TaskState | null = null;
      if (taskToUpdate.state === "En review") {
        if (state === "To Deploy") {
          nextState = "To Deploy";
        }
        else if (state === "Rechazado") {
          nextState = "Rechazado";
        }
      } else if (taskToUpdate.state === "To Deploy") {
        if (state === "Rechazado") {
          nextState = "Rechazado";
        }
      } else if (taskToUpdate.state === "Rechazado") {
        if (state === "En proceso") {
          nextState = "En proceso";
        }
      } else {
        const currentStateIndex = taskStateOrder.indexOf(taskToUpdate.state as TaskState);
        const nextStateIndex = currentStateIndex + 1;
        if (nextStateIndex < taskStateOrder.length && taskToUpdate.responsable.length > 0) {
          nextState = taskStateOrder[nextStateIndex];
        }
      }
      if (nextState) {
        try {
          updateTask(taskId, { state: nextState });
        } catch (error) {
          console.error("Error updating task:", error);
        }
      }
    }
  };
  return (
    <div
      className="bg-gray-100 rounded-lg p-4 m-4 min-w-[300px] flex flex-col h-full transition-colors duration-200"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <h3 className="font-medium text-gray-900 mb-4">{state}</h3>
      <div className="space-y-4 overflow-y-auto flex-1">
        {columnTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}