import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeList } from '../models/recipe-list.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-start',
  templateUrl: './recipe-start.component.html',
  styleUrls: ['./recipe-start.component.css']
})
export class RecipeStartComponent implements OnInit {
  recipes : Observable<RecipeList[]>

  constructor( private recipeService : RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService
    .getAllRecipes();
  }

}
