import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from '@workshop/core-data';
import { APP_ID_RANDOM_PROVIDER } from '@angular/core/src/application_tokens';
import { resultMemoize } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  selectedProject: Project;
  projects$: Observable<any>;

  
  constructor(
    private projectsService: ProjectsService
  ) { }
  
  ngOnInit() {
    this.getProjects();
  }
  
  selectProject(project) {
    this.selectedProject = project;
  }

  getProjects() {
    this.projects$ = this.projectsService.all();
  }

  deleteProject(project) {
    this.projectsService.delete(project.id)
      .subscribe(() => this.getProjects());
  }

  cancel() {
    this.selectProject(null);
  }
}
