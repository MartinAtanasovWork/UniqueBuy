import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ViewComponent } from './main/view/view.component';

export const routes: Routes = [
    {path:"" , component: HeaderComponent},
    {path:"catalog", children:[
        {path:"" , component: MainComponent},
        {path:":item",component:ViewComponent},       
    ]},
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent},
    {path:"**",component:NotfoundComponent}    
];
