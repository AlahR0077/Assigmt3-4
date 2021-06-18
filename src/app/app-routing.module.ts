import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadAssignmentComponent } from './upload-assignment/upload-assignment.component';
import { DeleteDataComponent } from './delete-data/delete-data.component';
import { StudentMarksComponent } from './student-marks/student-marks.component';
import { SubmitAssignmentComponent } from './submit-assignment/submit-assignment.component';
const routes: Routes = [
  {path: 'uploadAssignment',component: UploadAssignmentComponent,},
  {path: 'deleteAssignment',component: DeleteDataComponent,},
  {path: 'markAssignment',component: StudentMarksComponent,},
  {path: 'submitAssignment',component: SubmitAssignmentComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
