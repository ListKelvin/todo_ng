import { Component, inject } from '@angular/core';
import { TaskListComponent } from '../../components/task-list/task-list.component';
import { PageTitleComponent } from '../../components/page-title/page-title.component';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-completed-task',
  standalone: true,
  imports: [PageTitleComponent, TaskListComponent],
  templateUrl: './completed-task.component.html',
  styleUrl: './completed-task.component.scss',
})
export class CompletedTaskComponent {
  newTask = '';
  taskList: any[] = [];
  httpService = inject(HttpService);

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks() {
    this.httpService.getAllTasks().subscribe((result: any) => {
      this.taskList = result.filter((x: any) => x.completed == true);
    });
  }

  onComplete(task: any) {
    task.completed = true;
    console.log('complete', task);
    this.httpService.updateTask(task).subscribe(() => {
      this.getAllTasks();
    });
  }
  onImportant(task: any) {
    task.important = true;
    this.httpService.updateTask(task).subscribe(() => {
      this.getAllTasks();
    });
  }
}
