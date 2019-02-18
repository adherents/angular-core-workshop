import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from '@workshop/core-data';
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
    this.resetProject();
  }
  
  selectProject(project) {
    this.selectedProject = project;
  }

  resetProject() {
    const emptyProject: Project = {
      id: null,
      title: '',
      details: '',
      percentComplete: null,
      approved: false
    }
    this.selectProject(emptyProject);
  }

  getProjects() {
    this.projects$ = this.projectsService.all();
  }

  saveProject(project) {
    if(project.id) {
      this.updateProject(project);
    } else {
      this.createProject(project);
    }
  }

  createProject(project) {
    this.projectsService.create(project)
      .subscribe(() => {
        this.getProjects();
        this.resetProject();
      });
  }

  updateProject(project) {
    this.projectsService.update(project)
      .subscribe(() => {
        this.getProjects();
        this.resetProject();
    });
  }

  deleteProject(project) {
    this.projectsService.delete(project.id)
      .subscribe(() => this.getProjects());
  }

  cancel() {
    this.resetProject();
  }
}
