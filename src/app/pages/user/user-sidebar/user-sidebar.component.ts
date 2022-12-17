import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {

  constructor( private categoryService:CategoryService ,private _snack:MatSnackBar) { }

  categories:any;
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data)=>{
      this.categories=data;
    },(error)=>{
      this._snack.open("error in loading data","",{
        duration:3000
      })
    })
  }

}
