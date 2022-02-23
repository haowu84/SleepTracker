import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'sleep',
        loadChildren: () =>
          import('../sleep/sleep.module').then((m) => m.SleepPageModule),
      },
      {
        path: 'sleepiness',
        loadChildren: () =>
          import('../sleepiness/sleepiness.module').then(
            (m) => m.SleepinessPageModule
          ),
      },
      {
        path: 'sleep-data',
        loadChildren: () =>
          import('../sleep-data/sleep-data.module').then(
            (m) => m.SleepDataPageModule
          ),
      },
      { path: '', redirectTo: 'sleep', pathMatch: 'full' },
    ],
  },
  {
    path: '',
    redirectTo: 'tabs/sleep',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
