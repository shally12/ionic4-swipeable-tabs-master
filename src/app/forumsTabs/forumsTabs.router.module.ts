import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './forumsTabs.page';

const routes: Routes = [
  {
    path: 'forumsTabs',
    component: TabsPage,
    children: [
      {
        path: 'communication',
        children: [
          {
            path: '',
            loadChildren: '../communication/communication.module#CommunicationPageModule'
          }
        ]
      },
      {
        path: 'announcement',
        children: [
          {
            path: '',
            loadChildren: '../announcement/announcement.module#AnnouncementPageModule'
          }
        ]
      },
      {
        path: 'customer',
        children: [
          {
            path: '',
            loadChildren: '../customer/customer.module#CustomerPageModule'
          }
        ]
      },
      {
        path: 'battle',
        children: [
          {
            path: '',
            loadChildren: '../battle/battle.module#BattlePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/forumsTabs/communication',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/forumsTabs/communication',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
