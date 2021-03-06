import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { MathJaxModule } from 'ngx-mathjax';
import { ModalModule } from 'ngx-bootstrap/modal';

import { TeachersRoutingModule } from './teachers-routing.module';
import { HomeComponent } from './home/home.component';
import { ClassComponent } from './class/class.component';
import { LiveclassComponent } from './liveclass/liveclass.component';
import { StudymaterialComponent } from './studymaterial/studymaterial.component';
import { ProfileComponent } from './profile/profile.component';
import { ExamsComponent } from './exams/exams.component';
import { CreateexamComponent } from './createexam/createexam.component';
import { AnswerlistComponent } from './answerlist/answerlist.component';
import { LeaveapprovelComponent } from './leaveapprovel/leaveapprovel.component';
import { ChatComponent } from './chat/chat.component';
import { HomeworkComponent } from './homework/homework.component';
import { ViewComponent } from './view/view.component';
import { NoticeboardComponent } from './noticeboard/noticeboard.component';
import { LivestreamComponent } from './livestream/livestream.component';


@NgModule({
  declarations: [HomeComponent, ClassComponent, LiveclassComponent, StudymaterialComponent, ProfileComponent, ExamsComponent, CreateexamComponent, AnswerlistComponent, LeaveapprovelComponent, ChatComponent, HomeworkComponent, ViewComponent, NoticeboardComponent, LivestreamComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ModalModule.forRoot(),
    MathJaxModule.forRoot({
      version: '2.7.5',
      config: 'TeX-AMS_HTML',
      hostname: 'cdnjs.cloudflare.com'
    }),
    TeachersRoutingModule
  ]
})
export class TeachersModule { }
