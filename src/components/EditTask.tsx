import { X, Users } from 'lucide-react';
import {  Task } from '../types';
import { mockUsers } from '../context/TaskContext';

interface TaskAssignmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  task: Task;
  onUpdate: (updates: Partial<Task>) => void;
}

export function TaskAssignmentModal({ isOpen, onClose, task, onUpdate }: TaskAssignmentModalProps) {
  if (!isOpen) return null;
  const handleUserSelection = (
    field: 'responsable' | 'review' | 'deploy',
    userName: string,
    checked: boolean
  ) => {
    const currentUsers = task[field] || [];
    const updatedUsers = checked
      ? [...currentUsers, userName]
      : currentUsers.filter((user) => user !== userName);

    onUpdate({ [field]: updatedUsers });
  };

  const renderUserSection = (
    title: string,
    field: 'responsable' | 'review' | 'deploy'
  ) => (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-3">
        <Users className="w-5 h-5 text-indigo-600" />
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {mockUsers.map((user) => (
          <label
            key={`${field}-${user.id}`}
            className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <input
              type="checkbox"
              checked={task[field]?.includes(user.nombre) || false}
              onChange={(e) =>
                handleUserSelection(field, user.nombre, e.target.checked)
              }
              className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
            />
            <div className="flex flex-col">
              <span className="font-medium text-gray-900">{user.nombre}</span>
              <span className="text-sm text-gray-500">{user.cargo}</span>
              <span className="text-sm text-gray-500">{user.correo}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl m-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Asignar Usuarios a Tarea
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>

          <div className="space-y-8">
            {renderUserSection('Responsables', 'responsable')}
            {renderUserSection('Revisores', 'review')}
            {renderUserSection('Deployment', 'deploy')}
          </div>

          <div className="mt-8 flex justify-end gap-4">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Guardar Cambios
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}