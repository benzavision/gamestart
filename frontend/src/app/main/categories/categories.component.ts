import { Component, OnInit, HostBinding } from '@angular/core';
import { CategoriesService} from '../../services/categories.service';

import { Categorie} from '../../models/Categorie';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  categories: any = [];

  constructor(private categoriesService : CategoriesService, ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoriesService.getCategories()
      .subscribe(
        res => {
          this.categories = res;
        },
        err => console.error(err)
      );
  }
}
