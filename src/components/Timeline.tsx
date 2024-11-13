import { useTasks } from '../context/TaskContext';
import { AlertCircle, Calendar } from 'lucide-react';

export function Timeline() {
  const { tasks } = useTasks();
  const sortedTasks = tasks.filter((task) => task.rutaCritica);
  const nosortedTasks = tasks.filter((task) => task.rutaCritica == false);
  console.log(sortedTasks);
  return (
    <><div className="mt-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Línea de Tiempo crítica</h2>
      <div className="space-y-8">
        {sortedTasks.map((task) => (
          <div key={task.id} className="relative">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-12">
                <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center">
                  <Calendar className="h-4 w-4 text-white" />
                </div>
              </div>
              <div className="flex-grow bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-lg font-medium text-gray-900">{task.nombre}</h3>
                    {task.rutaCritica && (
                      <AlertCircle className="h-4 w-4 text-red-500" />
                    )}
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${task.prioridad === 'Alta' ? 'bg-red-100 text-red-800' :
                    task.prioridad === 'Media' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'}`}>
                    {task.prioridad}
                  </span>
                </div>
                {task.descripcion && (
                  <p className="mt-2 text-sm text-gray-600">{task.descripcion}</p>
                )}
                <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
                  <div>
                    Responsables: {task.responsable.join(', ')}
                  </div>
                  <div>
                    Review: {task.review.join(', ')}
                  </div>
                  <div>
                    Deploy: {task.deploy.join(', ')}
                  </div>
                  <div>
                    Fecha límite: {new Date(task.fechaLimite).toLocaleDateString()}
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  Estado: {task.state}
                </div>
                {task.state === 'Rechazado' ? (
                  <div  className="mt-2 text-sm text-gray-500">
                    <strong>Nota de rechazo:</strong> {task.notasRechazo}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div><div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Línea de Tiempo no crítica</h2>
        <div className="space-y-8">
          {nosortedTasks.map((task) => (
            <div key={task.id} className="relative">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12">
                  <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="flex-grow bg-white rounded-lg shadow-sm p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-lg font-medium text-gray-900">{task.nombre}</h3>
                      {task.rutaCritica && (
                        <AlertCircle className="h-4 w-4 text-red-500" />
                      )}
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${task.prioridad === 'Alta' ? 'bg-red-100 text-red-800' :
                      task.prioridad === 'Media' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'}`}>
                      {task.prioridad}
                    </span>
                  </div>
                  {task.descripcion && (
                    <p className="mt-2 text-sm text-gray-600">{task.descripcion}</p>
                  )}
                  <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
                    <div>
                      Responsables: {task.responsable.join(', ')}
                    </div>
                    <div>
                      Review: {task.review.join(', ')}
                    </div>
                    <div>
                      Deploy: {task.deploy.join(', ')}
                    </div>
                    <div>
                      Fecha límite: {new Date(task.fechaLimite).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    Estado: {task.state}
                  </div>
                  {task.notasRechazo ? (
                  <div  className="mt-2 text-sm text-gray-500">
                    <strong>Nota de rechazo:</strong> {task.notasRechazo}
                  </div>
                ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div></>
  );
}