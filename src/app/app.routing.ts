import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MeetupSearchComponent } from './meetup-search/meetup-search.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { AdminComponent} from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'events',
    component: MeetupSearchComponent
  },
  {
    path: 'events/:id',
    component: EventDetailComponent
  },
  {
  path: 'admin',
  component: AdminComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
