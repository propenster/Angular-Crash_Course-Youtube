import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/Employee';


const headerOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}



@Injectable({
  providedIn: 'root'
})
export class UtilService {

  backend_endpoint: string = environment.backend_url

  constructor(public http: HttpClient) { }



getAllEmployees():Observable<Employee>{
  return this.http.get<Employee>(this.backend_endpoint + '/employees').pipe(
    retry(1),
    catchError(this.handleError)
  )
}

getSingleEmployee(id: number): Observable<Employee>{

  return this.http.get<Employee>(this.backend_endpoint + '/employees/' + id).pipe(
    retry(1),
    catchError(this.handleError)
  )
}

addEmployee(data):Observable<Employee>{
  return this.http.post<Employee>(this.backend_endpoint + '/employees', JSON.stringify(data), headerOptions).pipe(
    retry(1),
    catchError(this.handleError)
  )
}

updateEmployee(id, data):Observable<Employee>{
return this.http.put<Employee>(this.backend_endpoint + '/employees/'+ id, JSON.stringify(data), headerOptions).pipe(
  retry(1),
  catchError(this.handleError)
)
}

deleteEmployee(id){
return this.http.delete<Employee>(this.backend_endpoint + '/employees/'+id, headerOptions).pipe(
  retry(1),
  catchError(this.handleError)
)
}




handleError(err){
  let message = '';

  //if there is an errorEvent
  if(err.error instanceof ErrorEvent){
    message = err.error.status;
  }else{
    message = 'Error '+err.error + ' Message: '+err.error.status;
  }
  console.log(message)
  return throwError(message);

}



}
