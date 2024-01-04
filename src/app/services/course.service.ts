import { Injectable } from '@angular/core';
import { course } from "../share/data/course";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() {
  }

  getCourseById(id: string) {
    return course.find(course => course.id === id);
  }

}
