import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html'
})
export class SkillsComponent {
  languages = ['Java', 'Python', 'SQL', 'C'];
  frameworks = ['Angular', 'Django', 'FastAPI', 'Material-UI'];
  tools = ['Pandas', 'NumPy', 'scikit-learn', 'PostgreSQL', 'PowerBI', 'Tableau', 'Docker'];
}
