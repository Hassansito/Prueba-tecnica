import { useState } from 'react';
import { Trash2 } from 'lucide-react';
import { useTasks } from '../context/TaskContext';
import { Task } from '../types';

interface DeleteTaskButtonProps {
  task: Task;
}

export function DeleteTaskButton({ task }: DeleteTaskButtonProps) {
  const [showConfirm, setShowConfirm] = useState(false);
  const { deleteTask } = useTasks();

  const handleDelete = () => {
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    deleteTask(task.id);
    setShowConfirm(false);
  };

  const cancelDelete = () => {
    setShowConfirm(false);
  };

  return (
    <>
      <button
        onClick={handleDelete}
        className="inline-flex items-center px-3 py-2 border border-transparent 
                 rounded-md text-sm font-medium text-white bg-red-600 
                 hover:bg-red-700 transition-colors duration-200 
                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500
                 shadow-sm gap-2"
        aria-label="Eliminar Tarea"
      >
        <Trash2 className="h-4 w-4" />
        <span>Eliminar</span>
      </button>

      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-4">
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              Confirmar Eliminación
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              ¿Estás seguro que deseas eliminar la tarea "{task.nombre}"? Esta acción no se puede deshacer.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 
                         rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 
                         focus:ring-offset-2 focus:ring-gray-500"
              >
                Cancelar
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 
                         rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 
                         focus:ring-offset-2 focus:ring-red-500"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}