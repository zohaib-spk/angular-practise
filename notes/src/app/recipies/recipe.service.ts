import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    private recipies: Recipe[] = [
        {
            id: '1',
            title: 'omlet',
            imageUrl: 'https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_412,h_232/v1/img/recipes/52/64/99/0SjpEWURRzKZt1avUq9h_omlet.jpg',
            ingredients: ['Franchise', 'chicken', 'Meat']
        },
        {
            id: '2',
            title: 'omlet 2',
            imageUrl: 'https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_412,h_232/v1/img/recipes/52/64/99/0SjpEWURRzKZt1avUq9h_omlet.jpg',
            ingredients: ['Franchise', 'chicken', 'Meat']
        }, {
            id: '3',
            title: 'omlet 2',
            imageUrl: 'https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_412,h_232/v1/img/recipes/52/64/99/0SjpEWURRzKZt1avUq9h_omlet.jpg',
            ingredients: ['Franchise', 'chicken', 'Meat']
        }, {
            id: '4',
            title: 'omlet 2',
            imageUrl: 'https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_412,h_232/v1/img/recipes/52/64/99/0SjpEWURRzKZt1avUq9h_omlet.jpg',
            ingredients: ['Franchise', 'chicken', 'Meat']
        }
    ];

    constructor() {
    }

    getRecipes() {
        return this.recipies;
    }

    getSingleRecipe(recipeId: string) {
        return {
            ...this.recipies.find(item => {
                return item.id === recipeId;
            })
        };
    }

    deleteRecipe(recipeId: string) {
        this.recipies = this.recipies.filter(item => {
            return item.id !== recipeId;
        });
    }
}
