import { Component, OnInit } from "@angular/core";

import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This is just a test",
      "https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    ),
    new Recipe(
      "A Test Recipe",
      "This is just a test",
      "https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    )
  ];

  constructor() {}

  ngOnInit() {}
}
