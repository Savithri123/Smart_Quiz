import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LecturerViewPage } from './lecturer-view';

@NgModule({
  declarations: [
    LecturerViewPage,
  ],
  imports: [
    IonicPageModule.forChild(LecturerViewPage),
  ],
})
export class LecturerViewPageModule {}
