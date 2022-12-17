import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { ViewQuizQuestionComponent } from './pages/admin/view-quiz-question/view-quiz-question.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { UserdashboardComponent } from './pages/user/userdashboard/userdashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'

  },
  {
    path:"signup",
    component: SignupComponent,
    pathMatch:'full'

  },
  {
    path:"login",
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:"admin",
    component:DashboardComponent,
    
    canActivate:[AdminGuard],
    children:[
      {
        path:"profile",
        component:ProfileComponent
      },
      {
        path:"",
        component:WelcomeComponent,
      },
      {
        path:"categories",
        component:ViewCategoriesComponent,
      },
      {
        path:"addcategory",
        component:AddCategoryComponent,
      },
      {
        path:"quizzes",
        component:ViewQuizzesComponent,
      },
      {
        path:"add-quiz",
        component:AddQuizComponent,
      },
      {
        path:'quiz/:id',
        component:UpdateQuizComponent,
      },
      {
        path:'view-questions/:id/:title',
        component:ViewQuizQuestionComponent,
      },
      {
        path:'add-questions/:id/:title',
        component:AddQuestionComponent,
      },
    ]
  },
  {
    path:"user",
    component:UserdashboardComponent,
    canActivate:[NormalGuard],
    children:[
      {
        path:':id',
        component:LoadQuizComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
