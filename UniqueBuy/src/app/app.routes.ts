import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ViewComponent } from './main/view/view.component';
import { JewelryDetailsComponent } from './main/items/details/jewelry-details/jewelry-details.component';
import { ArtworkDetailsComponent } from './main/items/details/artwork-details/artwork-details.component';
import { ClothesDetailsComponent } from './main/items/details/clothes-details/clothes-details.component';
import { PotteryDetailsComponent } from './main/items/details/pottery-details/pottery-details.component';
import { FurnitureDetailsComponent } from './main/items/details/furniture-details/furniture-details.component';
import { JewelryFormComponent } from './create-item/jewelry-form/jewelry-form.component';
import { ArtworkFormComponent } from './create-item/artwork-form/artwork-form.component';
import { ClothesFormComponent } from './create-item/clothes-form/clothes-form.component';
import { PotteryFormComponent } from './create-item/pottery-form/pottery-form.component';
import { FurnitureFormComponent } from './create-item/furniture-form/furniture-form.component';
import { CreateComponent } from './create/create.component';

export const routes: Routes = [
    {path:"" , component: HeaderComponent},
    {path:"catalog", children:[
        {path:"" , component: MainComponent},
        {path:":item",component:ViewComponent},
        {path: "jewelry/:id", component: JewelryDetailsComponent},
        {path: "artwork/:id", component: ArtworkDetailsComponent},       
        {path: "clothes/:id", component: ClothesDetailsComponent},       
        {path: "pottery/:id", component: PotteryDetailsComponent},       
        {path: "furniture/:id", component: FurnitureDetailsComponent},       

    ]},
    {path: "create", children:[
        {path: "",component: CreateComponent},
        {path: "jewelry", component: JewelryFormComponent},
        {path: "artwork", component: ArtworkFormComponent},
        {path: "clothes", component: ClothesFormComponent},
        {path: "pottery", component: PotteryFormComponent},
        {path: "furniture", component: FurnitureFormComponent}
    ]},
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent},
    {path:"**",component:NotfoundComponent}    
];
