import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css'],
})
export class LoadQuizComponent implements OnInit {
  constructor(private _router: ActivatedRoute,
    private _quiz:QuizService) {}
  id: any;
  quizzes:any;

  ngOnInit(): void {
    

    this._router.params.subscribe((params)=>{
      this.id=params['id'];
      if(this.id==0){
        console.log("load All THe quiz");
        this._quiz.getActiveQuizzes().subscribe((data)=>{
          console.log(data);
          this.quizzes=data;
          
        },(error)=>{
          console.log(error);
          
        })
  
      }else{
        console.log('load specific quiz');
        this._quiz.getActiveQuizzesOfCategory(this.id).subscribe((data)=>{
          console.log(data);
          
          this.quizzes=data;
        },(error)=>{
          console.log(error);
 
          alert("error in loading quiz")
        })
      }
    })
   
  }
}
