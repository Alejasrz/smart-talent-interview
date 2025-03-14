import { Component, ViewChild } from '@angular/core';
import { IDropdownTask, ITask } from '../../interfaces/task.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { TaskService } from '../../services/task.service';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskComponent } from '../../components/create-task/create-task.component';
import { UpdateTaskComponent } from '../../components/update-task/update-task.component';
import { DeleteTaskComponent } from '../../components/delete-task/delete-task.component';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent {

  displayedColumns: string[] = ['title', 'description', 'status', 'actions', 'check'];
  dataSource = new MatTableDataSource<ITask>();
  selectedFilter: string = 'Todas';

  @ViewChild(MatSort) sort!: MatSort;

  filterOptions: IDropdownTask[] = [
    {value: 'Todas', viewValue: 'Todas'},
    {value: 'Completada', viewValue: 'Completadas'},
    {value: 'Pendiente', viewValue: 'Pendientes'},
  ];

  constructor(private taskService: TaskService,
              private router: Router,
              private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.dataSource.filterPredicate = this.customFilterPredicate;
    this.getAllTasks();    
  }
  
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  getAllTasks(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.dataSource.data = tasks;
    });
  }

  goToCreateTask(): void {
    const dialogRef = this.dialog.open(CreateTaskComponent, {
      width: '500px',
      disableClose: true
    });
  
  }

  editTask(task: ITask): void {
    const dialogRef = this.dialog.open(UpdateTaskComponent, {
      width: '500px',
      disableClose: true,
      data: {
        task
      }
    });
  }

  deleteTask(task: ITask): void {
    const dialogRef = this.dialog.open(DeleteTaskComponent, {
      width: '350px',
      disableClose: true,
      data: {
        idTask: task.id
      }
    });
  }

  onTaskStatusChange(event: MatCheckboxChange, task: ITask): void {
    task.status = event.checked ? 'Completada' : 'Pendiente';
  }

  customFilterPredicate(data: ITask, filter: string): boolean {
    switch (filter) {
      case 'Todas':
        return true;
      case 'Completada':
        return data.status === 'Completada';
      case 'Pendiente':
        return data.status === 'Pendiente';
      default:
        return true;
    }
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue;
  }
}




