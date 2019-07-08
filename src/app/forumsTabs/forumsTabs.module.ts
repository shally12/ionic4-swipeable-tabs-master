import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './forumsTabs.router.module';

import { TabsPage } from './forumsTabs.page';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    DirectivesModule,
  ],
  declarations: [TabsPage]
})
export class ForumsTabsPageModule { }
