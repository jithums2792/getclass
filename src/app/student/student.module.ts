import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {  MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module'
import { ModalModule } from 'ngx-bootstrap/modal'

import { StudentRoutingModule } from './student-routing.module';
import { HomeComponent } from './home/home.component';
import { StudentclassComponent } from './studentclass/studentclass.component';
import { LiveclassComponent } from './liveclass/liveclass.component';
import { LivestreamWebrtcComponent } from './livestream-webrtc/livestream-webrtc.component';
import { StudymaterialComponent } from './studymaterial/studymaterial.component';
import { ExamsComponent } from './exams/exams.component';
import { AttendexamComponent } from './attendexam/attendexam.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeworkComponent } from './homework/homework.component';
import { LeavelistComponent } from './leavelist/leavelist.component';
import { CreateleaveComponent } from './createleave/createleave.component';
import { ChatComponent } from './chat/chat.component';
import { NoticeboardComponent } from './noticeboard/noticeboard.component';

@NgModule({
  declarations: [HomeComponent, StudentclassComponent, LiveclassComponent, LivestreamWebrtcComponent, StudymaterialComponent,ChatComponent, ExamsComponent, AttendexamComponent,ProfileComponent,HomeworkComponent, LeavelistComponent, CreateleaveComponent, NoticeboardComponent,],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ModalModule.forRoot(),
    FormsModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
