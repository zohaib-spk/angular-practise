import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'recipies',
        pathMatch: 'full'
    },
    {
        path: 'recipies',
        children: [
            {
                path: '',
                loadChildren: './recipies/recipies.module#RecipiesPageModule',
            },
            {
                path: ':recipeId',
                loadChildren: './recipies/recipes-details/recipes-details.module#RecipesDetailsPageModule'
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
