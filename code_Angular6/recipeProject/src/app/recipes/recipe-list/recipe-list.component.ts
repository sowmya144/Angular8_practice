import { Component, OnInit } from "@angular/core";
import { RecipeModel } from "../recipe.model";
@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeModel[] = [
    new RecipeModel(
      "Recipe1",
      "Grilled Chicken",
      "http://carlsbadcravings.com/wp-content/uploads/2016/02/buffalo-chicken-new-4.jpg"
    ),
    new RecipeModel(
      "Recipe1",
      "Baked Chicken",
      "https://cafedelites.com/wp-content/uploads/2018/04/Honey-Mustard-Baked-Chicken-Breasts-IMAGE-3.jpg"
    )
  ];
  constructor() {}

  ngOnInit() {}
}
