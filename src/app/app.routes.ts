import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { HelloWorldComponent } from './hello-world.component';
import { AllTaskComponent } from './pages/all-task/all-task.component';
import { ImportantTaskComponent } from './pages/important-task/important-task.component';
import { CompletedTaskComponent } from './pages/completed-task/completed-task.component';
import { FlowerListingComponent } from './pages/flowers/flower-listing/flower-listing.component';
import { ListLifecycleComponent } from './pages/LifecycleHook/list-lifecycle/list-lifecycle.component';
export const routes: Routes = [
  {
    path: '',
    component: AllTaskComponent,
    title: 'All task',
  },
  {
    path: 'importants',
    component: ImportantTaskComponent,
    title: 'Important task',
  },
  {
    path: 'completed',
    component: CompletedTaskComponent,
    title: 'Completed task',
  },
  {
    path: 'flower',
    component: FlowerListingComponent,
    title: 'Flower Management',
  },
  {
    path: 'housing',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'life-cycle',
    component: ListLifecycleComponent,
    title: 'life-cycle page',
  },
  {
    path: 'hello',
    component: HelloWorldComponent,
    title: 'Hello Angular',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details',
  },
];
