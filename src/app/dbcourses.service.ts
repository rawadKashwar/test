import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbcoursesService {

  getAllCourses(){
    return ['Java', 'C#', 'C++', 'Angular', 'PHP'];
  }
}
