import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  constructor(private category:CategoryService,private _quiz:QuizService,
    private router:Router) { }
  categories:any=[]

  quizData={
    title:'',
    description:'',
    maxMark:'',
    numberOfQuestion:'',
    active:true,
    category:{
      id:23,
      
    }

  }

  ngOnInit(): void {
    this.category.getCategories().subscribe(data=>{
      this.categories=data;
    })
  }
  addQuiz(){
    this._quiz.createQuiz(this.quizData).subscribe((data)=>{
      Swal.fire("Success","Quiz Added",'success').then(result=>{
        this.router.navigate(['/admin/quizzes'])
      });
      console.log(data)
    },(error)=>{
      console.log(error)
      Swal.fire("Error","Somthing went wrong",'error');
    })

  }

}
