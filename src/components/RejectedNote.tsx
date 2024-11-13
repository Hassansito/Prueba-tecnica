import { X } from 'lucide-react';
import { Task } from '../types';

interface RejectionNoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  task: Task;
  onUpdate: (updates: Partial<Task>) => void;
}

export function RejectionNoteModal({ isOpen, onClose, task, onUpdate }: RejectionNoteModalProps) {
  if (!isOpen) return null;

  const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onUpdate({ notasRechazo: event.target.value });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl m-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Nota de Rechazo
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>

          <div className="mb-6">
            <label htmlFor="rejectionNote" className="block text-sm font-medium text-gray-700">
              Escribe la nota de rechazo:
            </label>
            <textarea
              id="rejectionNote"
              value={task.notasRechazo || ''}
              onChange={handleNoteChange}
              rows={4}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Ingrese su nota aquí..."
            />
          </div>

          <div className="mt-8 flex justify-end gap-4">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={() => {
                onClose();
              }}
              className="px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Guardar Nota
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}