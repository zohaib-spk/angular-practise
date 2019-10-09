import {Component, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from './recipe.service';

@Component({
    selector: 'app-recipies',
    templateUrl: './recipies.page.html',
    styleUrls: ['./recipies.page.scss'],
})
export class RecipiesPage implements OnInit {
    public recipies: Recipe[];

    constructor(private recipeService: RecipeService) {
    }

    ngOnInit() {
        this.recipies = this.recipeService.getRecipes();
    }

}
