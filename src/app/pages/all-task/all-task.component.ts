import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageTitleComponent } from '../../components/page-title/page-title.component';
import { TaskListComponent } from '../../components/task-list/task-list.component';
import { HttpService } from '../../service/http.service';
import { StateService } from '../../service/state.service';

@Component({
  selector: 'app-all-task',
  standalone: true,
  imports: [FormsModule, DatePipe, PageTitleComponent, TaskListComponent],
  templateUrl: './all-task.component.html',
  styleUrl: './all-task.component.scss',
})
export class AllTaskComponent {
  newTask = '';
  initialTaskList: any[] = [];
  taskList: any[] = [];
  httpService = inject(HttpService);
  stateService = inject(StateService);
  ngOnInit() {
    this.stateService.searchSubject.subscribe((value) => {
      console.log('Search' + value.toString());
      if (value) {
        this.taskList = this.initialTaskList.filter((task) => {
          if (task.title.toLowerCase().include(value.toLowerCase())) {
            return task;
          }
        });
      } else {
        this.taskList = this.initialTaskList;
      }
    });

    this.getAllTasks();
  }

  // create a task
  addTask() {
    console.log('addTask', this.newTask);
    this.httpService.addTask(this.newTask).subscribe(() => {
      this.newTask = '';
      this.getAllTasks();
    });
  }
  // This method is get all task from service method
  getAllTasks() {
    this.httpService.getAllTasks().subscribe((result: any) => {
      console.log('line 42 Result: ' + result);

      this.initialTaskList = this.taskList = result;
    });
  }

  // method handle update status of task to completed and update the new list of tasks
  onComplete(task: any) {
    task.completed = true;
    console.log('line 58: ', task);
    this.httpService.updateTask(task).subscribe(() => {
      this.getAllTasks();
    });
  }
  // method handle update status of task to important and update the new list of tasks handle side effect
  onImportant(task: any) {
    task.important = true;
    this.httpService.updateTask(task).subscribe(() => {
      this.getAllTasks();
    });
  }
}
