import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { Navbar } from './Components/navbar/navbar.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { LoginComponent } from './Components/login/login.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactsComponent } from './Components/contacts/contacts.component';



export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path:'home', component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'about', component:AboutComponent},
    {path:'contact',component:ContactsComponent}
    // {path:'navbar', component:NavbarComponent}
];
