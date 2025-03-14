import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { ITask } from '../../interfaces/task.interface';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {

  taskForm: FormGroup;

  constructor(private taskService: TaskService,
              private fb: FormBuilder,
              private dialogRef: MatDialogRef<CreateTaskComponent>
  ) { 

    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['Pendiente', Validators.required]
    });
    
  }


  onSaveTask(): void {
    if (this.taskForm.valid) {
      const newTask: ITask = this.taskForm.value;

      this.taskService.addTask(newTask);

      this.taskForm.reset();
      this.taskForm.get('status')?.setValue('pendiente');
      this.dialogRef.close(true);
    }
  }

  onCancel(): void {
    this.dialogRef.close(null);
  }

}
