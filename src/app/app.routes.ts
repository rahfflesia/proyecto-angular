import { Routes } from '@angular/router';
import { SignupForm } from '../components/forms/signup-form/signup-form';
import { LoginForm } from '../components/forms/login-form/login-form';
import { MisRutinas } from '../components/secciones-principales/mis-rutinas/mis-rutinas';
import { CenteredLayoutComponent } from '../components/layout-components/layouts/centered-layout-component/centered-layout-component';
import { Logros } from '../components/secciones-principales/logros/logros';
import { MainLayoutComponent } from '../components/layout-components/layouts/main-layout-component/main-layout-component';
import { Notas } from '../components/secciones-principales/notas/notas';
import { Estadisticas } from '../components/secciones-principales/estadisticas/estadisticas';
import { Favoritos } from '../components/secciones-principales/favoritos/favoritos';
import { Perfil } from '../components/secciones-principales/perfil/perfil';
import { Metas } from '../components/secciones-principales/metas/metas';
import { RoutineLayoutComponent } from '../components/layout-components/layouts/routine-layout-component/routine-layout-component';
import { RestSection } from '../components/secciones-principales/rest-section/rest-section';
import { ExerciseSection } from '../components/secciones-principales/exercise-section/exercise-section';
import { HomePage } from '../components/secciones-principales/home-page/home-page';
import { FinalizacionRutina } from '../components/secciones-principales/finalizacion-rutina/finalizacion-rutina';
import { Historial } from '../components/secciones-principales/historial/historial';
import { NuevaRutina } from '../components/secciones-principales/nueva-rutina/nueva-rutina';
import { Feed } from '../components/secciones-principales/feed/feed';

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
      { path: 'home', component: HomePage },
      { path: 'historial', component: Historial },
      { path: 'nuevarutina', component: NuevaRutina },
      { path: 'feed', component: Feed },
    ],
  },
  {
    path: '',
    component: RoutineLayoutComponent,
    children: [
      { path: 'rest', component: RestSection },
      { path: 'exercise', component: ExerciseSection },
      { path: 'finalrutina', component: FinalizacionRutina },
    ],
  },
];
