import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  MaterialModule } from '../material/material.module';

import { StudentRoutingModule } from './student-routing.module';
import { HomeComponent } from './home/home.component';
import { StudentclassComponent } from './studentclass/studentclass.component';
import { LiveclassComponent } from './liveclass/liveclass.component';
import { LivestreamWebrtcComponent } from './livestream-webrtc/livestream-webrtc.component';


@NgModule({
  declarations: [HomeComponent, StudentclassComponent, LiveclassComponent, LivestreamWebrtcComponent],
  imports: [
    CommonModule,
    MaterialModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
