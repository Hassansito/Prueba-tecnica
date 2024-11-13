import React from 'react';
import { ActivitySquare } from 'lucide-react';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-[1920px] mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <ActivitySquare className="h-8 w-8 text-indigo-600" />
            <h1 className="text-xl font-semibold text-gray-900">Gestión de Tareas</h1>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}