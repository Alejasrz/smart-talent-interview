import { Component, Inject } from '@angular/core';
import { ITask } from '../../interfaces/task.interface';
import { TaskService } from '../../services/task.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css']
})
export class DeleteTaskComponent {
  idTask: number;

  constructor(private taskService: TaskService,
              private dialogRef: MatDialogRef<DeleteTaskComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any
  ) { 

    this.idTask = data.idTask;
  }

  onDeleteTask(): void {
    this.taskService.deleteTask(this.idTask);
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(null);
  }
}
