import React from 'react';
import { Calendar, Users, AlertCircle } from 'lucide-react';
import { Task } from '../types';
import { EditButton } from './EditTaskButton';
import { RejectedNoteButton } from './RejectedNoteButton';
import { DeleteTaskButton } from './DeleteTask';


export function TaskCard({ task }: { task: Task }) {
  const priorityColors = {
    Alta: 'bg-red-100 text-red-800',
    Media: 'bg-yellow-100 text-yellow-800',
    Baja: 'bg-green-100 text-green-800',
  };
  
  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData('text/plain', task.id);
    const dragImage = e.currentTarget.cloneNode(true) as HTMLElement;
    dragImage.style.position = 'absolute';
    dragImage.style.top = '-1000px';
    document.body.appendChild(dragImage);
    e.dataTransfer.setDragImage(dragImage, 0, 0);
    setTimeout(() => document.body.removeChild(dragImage), 0);
  };
  return (
    <div
      className="bg-white rounded-lg shadow-sm p-4 cursor-move hover:shadow-md transition-shadow"
      draggable="true"
      onDragStart={handleDragStart}
    >
      <div className="flex items-start justify-between">
        <h4 className="font-medium text-gray-900">{task.nombre}</h4>
        {task.rutaCritica && (
          <AlertCircle className="h-4 w-4 text-red-500" />
        )}
      </div>
      <p className="text-sm text-gray-600 mt-2 line-clamp-2">{task.descripcion}</p>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-gray-500">
            <Users className="h-4 w-4 mr-1" />
            <span className="text-xs">{task.responsable.length}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Calendar className="h-4 w-4 mr-1" />
            <span className="text-xs">
              {new Date(task.fechaLimite).toLocaleDateString()}
            </span>
          </div>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full ${priorityColors[task.prioridad]}`}>
          {task.prioridad}
        </span>
        <span className={`text-xs px-2 py-1 rounded-full`}>
          {task.notasRechazo ? (
            <span className={`text-xs px-2 py-1 rounded-full bg-red-100 text-red-800`}>
              Nota
            </span>
          ) : (
            null
          )}
        </span>
      </div>
      <br></br>
      {task.state == 'Draft' ? <EditButton task={task} /> : null}
      {task.state == 'Rechazado' ? <RejectedNoteButton task={task} /> : null}
      <div className='text-xs px-2 py-1 rounded-full'>
        <DeleteTaskButton task={task} />
      </div>
    </div>
  );
}