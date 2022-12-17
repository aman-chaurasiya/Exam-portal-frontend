import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css'],
})
export class UpdateQuizComponent implements OnInit {
  constructor(private activete: ActivatedRoute,
     private _quiz: QuizService,
     private category:CategoryService,
     private _router:Router) {}

  quizzes: any = [];
  Id: any;
  categories:any=[]
  

  ngOnInit(): void {
    this.Id = this.activete.snapshot.paramMap.get('id');
    this._quiz.getQuiz(this.Id).subscribe((data) => {
      this.quizzes = data;
    });
    this.category.getCategories().subscribe(data=>{
      this.categories=data;
    })
  }
  updateQuiz(){
    this._quiz.updateQuiz(this.quizzes).subscribe((data)=>{
      Swal.fire("Success","Quiz Updated !!",'success').then((e)=>{
        this._router.navigate(['/admin/quizzes'])

      })
    })

  }
}
