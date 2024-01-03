import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { PRIMENG_MODULES } from "../../../share/primeng";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    PRIMENG_MODULES,
    CommonModule,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit, AfterViewInit {
  @ViewChild('firstBox', { static: false }) firstBox!: ElementRef;
  @ViewChild('parent', { static: false }) parent!: ElementRef;

  showLoginTip: boolean = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const firstBoxHeight = this.firstBox.nativeElement.offsetHeight;
    const parentHeight = this.parent.nativeElement.offsetHeight;
    const percentage = (firstBoxHeight / parentHeight) * 100;

    const secondBox = this.parent.nativeElement.children[1];
    this.renderer.setStyle(secondBox, 'height', `calc(100% - ${percentage}%)`);
  }

}
