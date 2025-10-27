import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html'
})
export class ProjectDetailComponent implements OnInit {
  projectId!: number;
  project: any;
  projectMap = new Map<number, any>([
    [1, {
      title: 'Fake Profile Account Detection And Reporting',
      description: `Built a machine learning model to classify real vs fake social media profiles using behavioral and metadata features. Implemented Random Forest and exploring TensorFlow for richer representations. CI with TravisCI.`,
      tech: ['Python','Random Forest','TensorFlow','TravisCI'],
      repo: 'https://github.com/sutarshravani2428/fake-profile-detection'
    }],
    [2, {
      title: 'Online Car Marketplace',
      description: `Second-hand car marketplace built with JSP, Java Servlets and MySQL. Features: listings, search and admin moderation.`,
      tech: ['JSP','Java Servlets','MySQL'],
      repo: 'https://github.com/sutarshravani2428/online-car-marketplace'
    }],
    [3, {
      title: 'School ERP System',
      description: `Full-stack school ERP with role-based authentication. Modules include Student Management, Attendance, Exams, Fees and Timetable.`,
      tech: ['Angular','Django','PostgreSQL','JWT'],
      repo: 'https://github.com/sutarshravani2428/school-erp'
    }]
  ]);

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.projectId = Number(this.route.snapshot.paramMap.get('id'));
    this.project = this.projectMap.get(this.projectId);
    if (!this.project) this.router.navigate(['/projects']);
  }
}
