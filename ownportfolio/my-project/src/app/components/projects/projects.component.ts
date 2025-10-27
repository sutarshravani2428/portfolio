import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Project {
  id: number;
  title: string;
  short: string;
  description: string;
  tech: string[];
  repo?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  constructor(private router: Router) {}

  projects: Project[] = [
    {
      id: 1,
      title: 'Fake Profile Account Detection And Reporting',
      short: 'ML model to detect fake social media profiles (ongoing)',
      description: `Built a machine learning model to classify real vs fake social media profiles using behavioral and metadata features. Implemented Random Forest and exploring TensorFlow for improvements. CI with TravisCI.`,
      tech: ['Python', 'scikit-learn', 'Random Forest', 'TensorFlow', 'TravisCI'],
      repo: 'https://github.com/sutarshravani2428/fake-profile-detection'
    },
    {
      id: 2,
      title: 'Online Car Marketplace',
      short: 'Second-hand car marketplace — JSP, Servlets, MySQL',
      description: `Platform to buy/sell second-hand cars. Backend suggests well-conditioned cars and stores listings securely. Planned: image-based condition analysis and ML price prediction.`,
      tech: ['JSP','Java Servlets','MySQL'],
      repo: 'https://github.com/sutarshravani2428/online-car-marketplace'
    },
    {
      id: 3,
      title: 'School ERP System',
      short: 'Role-based ERP — Angular + Django + PostgreSQL',
      description: `Full ERP with role-based authentication and modules: Student Management, Attendance, Exams, Fees, Timetable. REST APIs with Django & PostgreSQL.`,
      tech: ['Angular','Django','PostgreSQL','JWT'],
      repo: 'https://github.com/sutarshravani2428/school-erp'
    }
  ];

  openDetail(p: Project) {
    this.router.navigate(['/projects', p.id]);
  }
}
