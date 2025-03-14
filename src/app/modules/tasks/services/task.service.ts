import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ITask } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasksSubject: BehaviorSubject<ITask[]> = new BehaviorSubject<ITask[]>([]);
  tasks$: Observable<ITask[]> = this.tasksSubject.asObservable();

  constructor() { }

  getTasks(): Observable<ITask[]> {
    return this.tasks$;
  }

  addTask(task: Omit<ITask, 'id'>): void {
    const currentTasks = this.tasksSubject.value;
    
    // Genera el id automáticamente
    const newId = currentTasks.length > 0 ? Math.max(...currentTasks.map(t => t.id)) + 1 : 1;
    const newTask: ITask = { ...task, id: newId };
    this.tasksSubject.next([...currentTasks, newTask]);
  }

  updateTask(updatedTask: ITask): void {
    const currentTasks = this.tasksSubject.value;
    const index = currentTasks.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      currentTasks[index] = updatedTask;
      this.tasksSubject.next([...currentTasks]);
    }
  }

  deleteTask(taskId: number): void {
    const currentTasks = this.tasksSubject.value;
    const updatedTasks = currentTasks.filter(task => task.id !== taskId);
    this.tasksSubject.next(updatedTasks);
  }
  
}
