import { Calendar, User, Flag } from 'lucide-react';

export function TaskList() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-white shadow-sm rounded-lg divide-y divide-gray-200">
        <div className="p-4 flex items-center justify-between bg-gray-50">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              Fecha
            </span>
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              Responsable
            </span>
            <span className="flex items-center gap-1">
              <Flag className="w-4 h-4" />
              Estado
            </span>
          </div>
        </div>
        {/* Aqui se renderizan las tareas */}
      </div>
    </div>
  );
}