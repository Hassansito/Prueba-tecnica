import { useState } from 'react';
import { Board } from './components/Board';
import { Timeline } from './components/Timeline';
import { TaskProvider } from './context/TaskContext';
import { Layout } from './components/Layout';

function App() {
  const [view, setView] = useState<'board' | 'timeline'>('board');

  return (
    <TaskProvider>
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end py-6">
            <button
              onClick={() => setView(view === 'board' ? 'timeline' : 'board')}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Ver {view === 'board' ? 'Línea de Tiempo' : 'Tablero'}
            </button>
          </div>
          {view === 'board' ? <Board /> : <Timeline />}
        </div>
      </Layout>
    </TaskProvider>
  );
}

export default App;