import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css'],
})
export class AddQuestionComponent implements OnInit {
  constructor(private _route: ActivatedRoute,private questionService:QuestionService) {}

  quizId: any;
  quizTitle:any;
  questions: any = {
    quiz: {},
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer:'',
  };
  ngOnInit(): void {
    this.quizId = this._route.snapshot.paramMap.get('id');
    this.quizTitle=this._route.snapshot.paramMap.get('title')
    this.questions.quiz['id']=this.quizId;
  }

  addQue(){
    this.questionService.addQuestion(this.questions).subscribe((data)=>{
      console.log(data);
      Swal.fire("Success!!","Question Added",'success')
      
    },(error)=>{
      Swal.fire("Error","something went wrong!!",'error')
    })
  }
  
}
