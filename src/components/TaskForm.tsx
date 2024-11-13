import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useTasks} from '../context/TaskContext';
import { Task } from '../types';

interface TaskFormProps {
  onClose: () => void;
}

export function TaskForm({ onClose }: TaskFormProps) {
  const { addTask } = useTasks();
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    responsables: [] as string[],
    review: [] as string[],
    deploy: [] as string[],
    fechaLimite: '',
    prioridad: 'Media',
    rutaCritica: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: Task = {
      id: crypto.randomUUID(),
      nombre: formData.nombre,
      descripcion: formData.descripcion,
      responsable: formData.responsables,
      review: formData.review,
      deploy: formData.deploy,
      fechaLimite: formData.fechaLimite,
      prioridad: formData.prioridad as 'Baja' | 'Media' | 'Alta',
      rutaCritica: formData.rutaCritica,
      state: 'Draft',
    };
    addTask(newTask);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Nueva Tarea</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
              Nombre de la tarea *
            </label>
            <input
              type="text"
              id="nombre"
              required
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">
              Descripción
            </label>
            <textarea
              id="descripcion"
              required
              rows={3}
              value={formData.descripcion}
              onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>         
          <div>
            <label htmlFor="fechaLimite" className="block text-sm font-medium text-gray-700">
              Fecha límite *
            </label>
            <input
              type="date"
              id="fechaLimite"
              required
              value={formData.fechaLimite}
              onChange={(e) => setFormData({ ...formData, fechaLimite: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="prioridad" className="block text-sm font-medium text-gray-700">
              Prioridad *
            </label>
            <select
              id="prioridad"
              required
              value={formData.prioridad}
              onChange={(e) => setFormData({ ...formData, prioridad: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option value="Baja">Baja</option>
              <option value="Media">Media</option>
              <option value="Alta">Alta</option>
            </select>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="rutaCritica"
              checked={formData.rutaCritica}
              onChange={(e) => setFormData({ ...formData, rutaCritica: e.target.checked })}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="rutaCritica" className="ml-2 block text-sm text-gray-700">
              Ruta crítica
            </label>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Crear Tarea
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}