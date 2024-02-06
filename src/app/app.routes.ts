import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { HelloWorldComponent } from './hello-world.component';
import { AllTaskComponent } from './pages/all-task/all-task.component';
import { ImportantTaskComponent } from './pages/important-task/important-task.component';
import { CompletedTaskComponent } from './pages/completed-task/completed-task.component';
import { FlowerListingComponent } from './flower-listing/flower-listing.component';
export const routes: Routes = [
  {
    path: '',
    component: AllTaskComponent,
  },
  {
    path: 'importants',
    component: ImportantTaskComponent,
  },
  {
    path: 'completed',
    component: CompletedTaskComponent,
  },
  {
    path: 'flower',
    component: FlowerListingComponent,
  },
  {
    path: 'housing',
    component: HomeComponent,
    title: 'Home page',
  },

  {
    path: 'hello',
    component: HelloWorldComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details',
  },
];
