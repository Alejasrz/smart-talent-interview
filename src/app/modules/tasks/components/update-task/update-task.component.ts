import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ITask } from '../../interfaces/task.interface';
import { TaskService } from '../../services/task.service';
import { CreateTaskComponent } from '../create-task/create-task.component';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent {
  taskForm: FormGroup;
  taskToEdit: ITask;

  constructor(private taskService: TaskService,
              private fb: FormBuilder,
              private dialogRef: MatDialogRef<UpdateTaskComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.taskToEdit = data.task;
    
    this.taskForm = this.fb.group({
      id: [this.taskToEdit.id],
      title: [this.taskToEdit.title, Validators.required],
      description: [this.taskToEdit.description, Validators.required],
      status: [this.taskToEdit.status, Validators.required]
    });
  
    
  }


  onSaveTask(): void {
    if (this.taskForm.valid) {
      const taskToEdit: ITask = this.taskForm.value;

      this.taskService.updateTask(taskToEdit);

      this.taskForm.reset();
      this.taskForm.get('status')?.setValue('pendiente');
      this.dialogRef.close(true);
    }
  }

  onCancel(): void {
    this.dialogRef.close(null);
  }
}
