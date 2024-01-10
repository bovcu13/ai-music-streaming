import { Component, OnInit } from '@angular/core';
import { PRIMENG_MODULES } from "../../../../share/primeng";
import { ActivatedRoute } from "@angular/router";
import { CourseService } from "../../../../services/course.service";
import { course } from "../../../../share/data/course";
import { NgClass, NgForOf, NgIf } from "@angular/common";

declare var ColorThief: any;

@Component({
  selector: 'app-course-view',
  standalone: true,
  imports: [
    PRIMENG_MODULES,
    NgForOf,
    NgIf,
    NgClass
  ],
  templateUrl: './course-view.component.html',
  styleUrl: './course-view.component.scss'
})
export class CourseViewComponent implements OnInit {
  course: any;
  mainColor: any;
  isRotated: boolean[] = [true,false];
  isHeart = false;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {

  }

  ngOnInit() {
    this.getCourseData();
  }

  toggleRotate(id: number) {
    this.isRotated[id] = !this.isRotated[id];
  }

  toggleHeart() {
    this.isHeart = !this.isHeart;
  }

  getCourseData() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.course = this.courseService.getCourseById(id);
      this.getDominantColor(this.course.imageUrl);
      console.log(this.course);
    } else {
      console.log('id is null');
    }
  }

  getDominantColor(imageUrl: string) {
    const colorThief = new ColorThief();
    const img = new Image();

    let googleProxyURL = 'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=';
    img.crossOrigin = 'Anonymous';
    img.src = googleProxyURL + encodeURIComponent(imageUrl);

    img.onload = () => {
      const color = colorThief.getColor(img);
      this.mainColor = `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.5)`;
      console.log(this.mainColor);
    };
  }

}
