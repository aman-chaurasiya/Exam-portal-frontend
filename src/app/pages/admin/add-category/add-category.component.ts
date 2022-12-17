import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  category={
    title:'',
    description:'',
  }

  constructor(private categoriesService:CategoryService,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }
  public addCategory(){

    if(this.category.title.trim()==''||this.category.title.trim()==null){
      this.snack.open("title required!!",'',{
        duration:3000
      })
      return
    }
    if(this.category.description.trim()==''||this.category.description.trim()==null){
      this.snack.open("description required!!",'',{
        duration:3000
      })
      return
    }
    this.categoriesService.addCategory(this.category).subscribe(
      (data)=>{
        console.log(data);
        Swal.fire("Successful","Category added",'success');
        this.category.title='';
        this.category.description=''
      }
      ,(error)=>{
        console.log(error);
        Swal.fire("Error","Somthing went wrong!!",'error');
      }
    )

  }

}
