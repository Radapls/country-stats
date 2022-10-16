import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//     {
//         path: '',
//         component: AppComponent,
//         resolve: {
//             countriesResolver: CountriesResolver
//         }
//     }
// ];

const routes: Routes = [
  {path: '', loadChildren:() =>  import('./home/home.module').then(m => m.HomeModule)},
  {path: 'detail/:id', loadChildren: ()=> import('./details/details.module').then(m => m.DetailModule)  }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
