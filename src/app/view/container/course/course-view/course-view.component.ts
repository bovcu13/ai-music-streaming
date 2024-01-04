import { Component, OnInit } from '@angular/core';
import { PRIMENG_MODULES } from "../../../../share/primeng";
import { ActivatedRoute } from "@angular/router";
import { CourseService } from "../../../../services/course.service";
import { course } from "../../../../share/data/course";
import { NgForOf, NgIf } from "@angular/common";

@Component({
  selector: 'app-course-view',
  standalone: true,
  imports: [
    PRIMENG_MODULES,
    NgForOf,
    NgIf
  ],
  templateUrl: './course-view.component.html',
  styleUrl: './course-view.component.scss'
})
export class CourseViewComponent implements OnInit {
  course: any;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {

  }

  ngOnInit() {
    this.getCourseData();
  }

  getCourseData() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.course = this.courseService.getCourseById(id);
      console.log(this.course);
    } else {
      console.log('id is null');
    }
  }

}
