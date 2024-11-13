import React, { createContext, useContext, useState } from 'react';
import { Task, Assignment } from '../types';

interface TaskContextType {
  tasks: Task[];
  states: string[];
  addTask: (task: Task) => void;
  updateTask: (taskId: string, updates: Partial<Task>) => void;
  deleteTask: (taskId: string) => void;
}



const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const mockUsers: Assignment[] = [
  {
    id: '1',
    nombre: 'Ana Silva',
    cargo: 'Project Manager',
    correo: 'ana.silva@company.com',
  },
  {
    id: '2',
    nombre: 'Carlos Ruiz',
    cargo: 'Developer',
    correo: 'carlos.ruiz@company.com',
  },
  {
    id: '3',
    nombre: 'Hassan González',
    cargo: 'Designer',
    correo: 'hassan.gonzalez@company.com',
  },
  {
    id: '4',
    nombre: 'Jose Silva',
    cargo: 'Project Manager',
    correo: 'jose.silva@company.com',
  },
  {
    id: '5',
    nombre: 'Angela Ruiz',
    cargo: 'Developer',
    correo: 'angela.ruiz@company.com',
  },
  {
    id: '6',
    nombre: 'Mario González',
    cargo: 'Designer',
    correo: 'mario.gonzalez@company.com',
  },
];
// Sample tasks data
const initialTasks: Task[] = [
  {
    id: '1',
    nombre: 'Diseño de interfaz',
    descripcion: 'Crear mockups y prototipos de la interfaz de usuario',
    responsable: [mockUsers[2].nombre,mockUsers[3].nombre],
    review: [mockUsers[1].nombre] ,
    deploy: [mockUsers[1].nombre],
    fechaLimite: '2024-03-20',
    prioridad: 'Alta',
    rutaCritica: true,
    state: 'En review',
  },
  {
    id: '2',
    nombre: 'Implementación Backend',
    descripcion: 'Desarrollar APIs RESTful para el sistema',
    responsable: [mockUsers[5].nombre],
    review:[mockUsers[4].nombre],
    deploy: [mockUsers[4].nombre],
    fechaLimite: '2024-03-25',
    prioridad: 'Media',
    rutaCritica: false,
    state: 'Creado',
  },
  {
    id: '3',
    nombre: 'Testing',
    descripcion: 'Realizar pruebas unitarias y de integración',
    responsable: [mockUsers[2].nombre],
    review:[mockUsers[1].nombre] ,
    deploy: [mockUsers[4].nombre],
    fechaLimite: '2024-03-30',
    prioridad: 'Baja',
    rutaCritica: false,
    state: 'To Deploy',
  }
];

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const states = ["Draft", "Creado", "En proceso", "En review", "To Deploy", "Rechazado"];

  const addTask = (task: Task) => {
    setTasks((prev) => [...prev, task]);
  };

  const updateTask = (taskId: string, updates: Partial<Task>) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, ...updates } : task
      )
    );
  };
  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, states, addTask, updateTask, deleteTask}}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
}
