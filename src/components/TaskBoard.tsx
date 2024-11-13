
import { ClipboardList } from 'lucide-react';

const states = ["Draft", "Creado", "En proceso", "En review", "To Deploy", "Rechazado"];

export function TaskBoard() {
  return (
    <div className="grid grid-cols-6 gap-4 p-4">
      {states.map((state) => (
        <div key={state} className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center gap-2 mb-4">
            <ClipboardList className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-gray-800">{state}</h3>
          </div>
          <div className="space-y-2">
            {/* Aqui estarian las tareas */}
          </div>
        </div>
      ))}
    </div>
  );
}