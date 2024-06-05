import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods: Food[] = [];

  constructor(private foodService: FoodService,
              private activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      params['searchTerm'] ? this.foods = this.foodService.getAllFoodsBySearchTerm(params['searchTerm']) : this.foods = foodService.getAll();
    })

  }
}
