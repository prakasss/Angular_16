import { Component, OnDestroy } from '@angular/core';
import { addCategoryRequest } from '../models/Add-category-request.model';
import { CategoryService } from '../services/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnDestroy {
  model: addCategoryRequest;
  private addCategorySubscription ?: Subscription;

  constructor(private categoryService:CategoryService ) {
    this.model = {
      name: 'pk',
      urlHandle: ''
    };
  }

  

  onFormSubmit() {
  this.addCategorySubscription= this.categoryService.addCategory(this.model)
   .subscribe({
    next:(response)=>{
         console.log('This was successfull');
    }
   
   })
  }
  ngOnDestroy(): void {
    this.addCategorySubscription?.unsubscribe();
      
  }
}
