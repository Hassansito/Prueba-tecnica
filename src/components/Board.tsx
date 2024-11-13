import { TaskColumn } from './TaskColumn';
import { NewTaskButton } from './NewTaskButton';
import { useTasks } from '../context/TaskContext';

export function Board() {
  const { states } = useTasks();

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Tablero de Tareas</h2>
        <NewTaskButton />
      </div>
      <div className=" grid cols-4 md:grid-cols-3 lg:cols-5 ml-[-30px] gap-6 h-[calc(100vh-12rem)] overflow-x-hidden overflow-y-auto">
        {states.map((state) => (
          <TaskColumn key={state} state={state} />
        ))}
      </div>
    </div>
  );
}