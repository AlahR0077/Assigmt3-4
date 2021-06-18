import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeleteDataComponent } from './delete-data/delete-data.component';
import { StudentMarksComponent } from './student-marks/student-marks.component';
import { SubmitAssignmentComponent } from './submit-assignment/submit-assignment.component';
import { UploadAssignmentComponent } from './upload-assignment/upload-assignment.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DeleteDataComponent,
    StudentMarksComponent,
    SubmitAssignmentComponent,
    UploadAssignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
