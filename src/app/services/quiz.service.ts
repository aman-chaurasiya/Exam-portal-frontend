import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Base_Url from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }


  public quizzes(){
    return this.http.get(`${Base_Url}/quiz/`);
  }

  public createQuiz(quiz:any){
    return this.http.post(`${Base_Url}/quiz/`,quiz)
  }

  public deleteQuiz(quizId:any){
    return this.http.delete(`${Base_Url}/quiz/${quizId}`);
  }

  public getQuiz(qid:any){
    return this.http.get(`${Base_Url}/quiz/${qid}`)
  }


  public updateQuiz(quiz:any){
    return this.http.put(`${Base_Url}/quiz/`,quiz)
  }

  public quizzesByCategory(id:any){
    return this.http.get(`${Base_Url}/quiz/category/${id}`)
  }


  public getActiveQuizzes(){
    return this.http.get(`${Base_Url}/quiz/active`);
  }

  public getActiveQuizzesOfCategory(cid:any){
    return this.http.get(`${Base_Url}/quiz/category/active/${cid}`);
  }
}
