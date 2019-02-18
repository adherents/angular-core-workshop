import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@workshop/material';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsDetailsComponent } from './projects-details/projects-details.component';

@NgModule({
  declarations: [ProjectsComponent, ProjectsListComponent, ProjectsDetailsComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MaterialModule,
    FormsModule
  ],
  exports: [ProjectsComponent]
})
export class ProjectsModule { }
