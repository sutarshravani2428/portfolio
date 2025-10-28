import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements AfterViewInit {
  projects = [
    {
      title: 'School ERP System (Full Stack Project)',
      duration: 'Aug 2024 – July 2025 (Ongoing)',
      techStack: 'Angular, Django, Python, PostgreSQL',
      description: [
        'Built a role-based authentication system (Admin, Teacher, Student, Parent) with secure token-based login.',
        'Developed core modules including Student Management (CRUD), Attendance, Exams, Fees, Timetable, and Role-based Dashboards.',
        'Integrated REST APIs between Angular and Django ensuring smooth data flow and consistency.',
        'Utilized PostgreSQL for database management and Postman for API testing.',
      ],
      ongoing: true,
    },
    {
      title: 'Fake Profile Account Detection and Reporting',
      duration: 'Aug 2024 – July 2025 (Ongoing)',
      techStack: 'Python, TensorFlow, Random Forest, ML Libraries, TravisCI',
      description: [
        'Built a machine learning model to classify real vs fake social media profiles based on behavioral and metadata features.',
        'Used Random Forest algorithm with TensorFlow implementation, achieving high accuracy.',
        'Implemented continuous delivery using TravisCI to build the plugin upon new releases.',
        'Currently enhancing with advanced Python ML modules for performance and scalability.',
      ],
      ongoing: true,
    },
    {
      title: 'Online Car Marketplace',
      duration: 'Jan 2025 – May 2025',
      techStack: 'JSP, Java Servlets, MySQL',
      description: [
        'Created a platform for users to buy/sell second-hand cars with backend logic to suggest well-conditioned cars.',
        'Future Enhancements: Image processing for car condition analysis, ML models for price prediction, sentiment analysis on reviews, and KYC verification for authenticity.',
      ],
    },
    {
      title: 'Personal Portfolio Website',
      techStack: 'Angular, Tailwind CSS, TypeScript',
      description: [
        'Designed and developed a responsive personal portfolio showcasing projects, skills, and contact details.',
        'Implemented smooth animations, routing, and reusable components using Angular.',
        'Used Tailwind CSS for dark theme styling and scroll-based reveal animations for better UX.',
        'Deployed and version-controlled using GitHub for continuous updates.',
      ],
    },
  ];

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const elements = this.el.nativeElement.querySelectorAll('.fade-in-up');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el: HTMLElement) => observer.observe(el));
  }
}
