import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnnouncementPage } from './announcement.page';
import { SharedModule } from '../infinite-scroll/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: AnnouncementPage }]),
    SharedModule
  ],
  declarations: [
    AnnouncementPage,
  ]
})
export class AnnouncementPageModule {}
