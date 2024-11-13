import { useState } from 'react';
import { Users } from 'lucide-react';
import { Task } from '../types';
import { useTasks } from '../context/TaskContext';
import { TaskAssignmentModal } from './EditTask';

interface EditButtonProps {
  task: Task;
}

export function EditButton({ task }: EditButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { updateTask } = useTasks();

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleUpdate = (updates: Partial<Task>) => {
    updateTask(task.id, updates);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="inline-flex items-center px-4 py-2 border border-transparent 
                 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 
                 hover:bg-indigo-700 focus:outline-none focus:ring-2 
                 focus:ring-offset-2 focus:ring-indigo-500 gap-2"
        aria-label="Editar Asignaciones"
      >
        <Users className="h-4 w-4" />
        <span>Editar Asignaciones</span>
      </button>

      <TaskAssignmentModal
        isOpen={isOpen}
        onClose={handleClose}
        task={task}
        onUpdate={handleUpdate}
      />
    </>
  );
}