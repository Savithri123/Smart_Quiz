import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LecturerRegPage } from './lecturer-reg';

@NgModule({
  declarations: [
    LecturerRegPage,
  ],
  imports: [
    IonicPageModule.forChild(LecturerRegPage),
  ],
})
export class LecturerRegPageModule {}
