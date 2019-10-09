import {Component, OnInit} from '@angular/core';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../recipe.model';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-recipes-details',
    templateUrl: './recipes-details.page.html',
    styleUrls: ['./recipes-details.page.scss'],
})
export class RecipesDetailsPage implements OnInit {
    recipe: Recipe;

    constructor(private recipeService: RecipeService,
                private activatedRoute: ActivatedRoute,
                private route: Router,
                private alertCtrl: AlertController
    ) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('recipeId')) {
                return;
            }
            const recipeId = paramMap.get('recipeId');
            this.recipe = this.recipeService.getSingleRecipe(recipeId);
        });
    }

    OnDeleteRecipe() {
        this.alertCtrl.create({
            header: 'Are you sure?',
            message: 'Do you really want to delete the details of this recipe?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                },
                {
                    text: 'Delete',
                    handler: () => {
                        this.recipeService.deleteRecipe(this.recipe.id);
                        this.route.navigate(['/recipies']);
                    }
                },
            ]
        }).then(alertEl => {
            alertEl.present();
        });
    }

}
