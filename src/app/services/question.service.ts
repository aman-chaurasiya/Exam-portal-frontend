import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Base_Url from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private _http:HttpClient) { }


  public getQuestions(qId:any){
    return this._http.get(`${Base_Url}/question/quiz/all/${qId}`);
  }
  public addQuestion(question:any){
    return this._http.post(`${Base_Url}/question/`,question);
  }

  
  public deleteQue(id:any){
    return this._http.delete(`${Base_Url}/question/${id}`);
  }
}
