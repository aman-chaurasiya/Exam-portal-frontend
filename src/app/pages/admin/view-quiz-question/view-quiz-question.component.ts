import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-question',
  templateUrl: './view-quiz-question.component.html',
  styleUrls: ['./view-quiz-question.component.css'],
})
export class ViewQuizQuestionComponent implements OnInit {
  qId: any;
  qtitle: any;

  questions:any=[]

  constructor(private router: ActivatedRoute,private questionService:QuestionService) {}

  ngOnInit(): void {
    this.qId = this.router.snapshot.paramMap.get('id');
    this.qtitle = this.router.snapshot.paramMap.get('title');
   
    
    this.questionService.getQuestions(this.qId).subscribe((data)=>{
      this.questions=data;
     

    },(error)=>{
      console.log(error);
      Swal.fire("Error","Something went wrong!!",'error')
    })
  }

  deleteBtn(id:any){
    this.questionService.deleteQue(id).subscribe((data)=>{
      
      Swal.fire("success","deleted!!",'success')
      this.questions=this.questions.filter((que:any)=>que.id!=id)
    })

  }
 
}

