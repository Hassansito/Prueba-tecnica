export interface Task {
  id: string;
  nombre: string;
  descripcion?: string;
  responsable: string[];
  review: string[];
  deploy: string[];
  fechaLimite: string;
  prioridad: 'Baja' | 'Media' | 'Alta';
  rutaCritica: boolean;
  state: string;
  notasRechazo?: string;
  /*notasCambio?: string;*/
}

export interface Assignment {
  id: string;
  nombre: string;
  cargo: string;
  correo: string;
}