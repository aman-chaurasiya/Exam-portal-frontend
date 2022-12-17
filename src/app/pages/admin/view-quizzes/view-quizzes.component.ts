import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css'],
})
export class ViewQuizzesComponent implements OnInit {
  quizzes: any = [];

  constructor(private quiz: QuizService) {}

  ngOnInit(): void {
    this.quiz.quizzes().subscribe(
      (data) => {
        this.quizzes = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  deleteBtn(id: any) {
    Swal.fire({
      title: 'Are You Sure!!',
      confirmButtonText: 'Delete',
      showCancelButton: true,
      icon:'warning',
      
    }).then((result)=>{
      if(result.isConfirmed){
        this.quiz.deleteQuiz(id).subscribe((data)=>{
          Swal.fire("Deleted","Quiz Deletion successful !!",'success')
          this.quizzes=this.quizzes.filter((quizs:any)=>quizs.id!=id)
          
        },(error)=>{
          console.log(error);
          
        })
      }
    })
  }
}
