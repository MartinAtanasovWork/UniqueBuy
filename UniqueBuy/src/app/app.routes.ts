import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {path:"" , component: HeaderComponent},
    {path:"catalog", children:[
        {path:"" , component: MainComponent},
        {path:"jewelry",component:MainComponent},
        {path:"artwork",component:MainComponent},
        {path:"clothes",component:MainComponent},
        {path:"pottery",component:MainComponent},
        {path:"furniture",component:MainComponent}   
    ]},
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent},
    {path:"**",component:NotfoundComponent}    
];
