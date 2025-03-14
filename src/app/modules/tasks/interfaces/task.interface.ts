export interface IDropdownTask {
  value: string;
  viewValue: string;
}

export interface ITask {
  id: number;
  title: string;
  description: string;
  status: 'Pendiente' | 'Completada';
}