import { LayoutDashboard, ListTodo } from 'lucide-react';

export function Header({ view, onViewChange }: { view: 'board' | 'list'; onViewChange: (view: 'board' | 'list') => void }) {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <ListTodo className="h-8 w-8 text-blue-600" />
            <h1 className="ml-2 text-2xl font-bold text-gray-900">Gestión de Tareas</h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onViewChange('board')}
              className={`px-4 py-2 rounded-md ${
                view === 'board'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <LayoutDashboard className="w-5 h-5" />
            </button>
            <button
              onClick={() => onViewChange('list')}
              className={`px-4 py-2 rounded-md ${
                view === 'list'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <ListTodo className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}