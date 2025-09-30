import { Routes } from '@angular/router';
import { SignupForm } from '../components/signup-form/signup-form';
import { LoginForm } from '../components/login-form/login-form';
import { MisRutinas } from '../components/mis-rutinas/mis-rutinas';
import { CenteredLayoutComponent } from '../components/layout-components/layouts/centered-layout-component/centered-layout-component';
import { Logros } from '../components/logros/logros';
import { MainLayoutComponent } from '../components/layout-components/layouts/main-layout-component/main-layout-component';
import { Notas } from '../components/notas/notas';
import { Estadisticas } from '../components/estadisticas/estadisticas';
import { Favoritos } from '../components/favoritos/favoritos';
import { Perfil } from '../components/perfil/perfil';
import { Metas } from '../components/metas/metas';
import { RoutineLayoutComponent } from '../components/layout-components/layouts/routine-layout-component/routine-layout-component';
import { RestSection } from '../components/rest-section/rest-section';
import { ExerciseSection } from '../components/exercise-section/exercise-section';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: CenteredLayoutComponent,
    children: [
      { path: 'login', component: LoginForm },
      { path: 'signup', component: SignupForm },
    ],
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'misrutinas', component: MisRutinas },
      { path: 'logros', component: Logros },
      { path: 'notas', component: Notas },
      { path: 'estadisticas', component: Estadisticas },
      { path: 'favoritos', component: Favoritos },
      { path: 'perfil', component: Perfil },
      { path: 'metas', component: Metas },
    ],
  },
  {
    path: '',
    component: RoutineLayoutComponent,
    children: [
      { path: 'rest', component: RestSection },
      { path: 'exercise', component: ExerciseSection },
    ],
  },
];
