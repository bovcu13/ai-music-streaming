import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { PRIMENG_MODULES } from "../../../share/primeng";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { NgForOf } from "@angular/common";
import { quest } from "../../../share/data/ai-assistant";

@Component({
  selector: 'app-ai-assistant',
  standalone: true,
  imports: [
    PRIMENG_MODULES,
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './ai-assistant.component.html',
  styleUrl: './ai-assistant.component.scss'
})
export class AiAssistantComponent implements OnInit {
  @ViewChild('videoPlayer', { static: true }) videoPlayer!: ElementRef;
  @ViewChild('scrollMe') private scrollMe!: ElementRef;
  myForm!: FormGroup;
  quest = quest;
  filterStr: string = '';
  showvideo = false;
  videofont = false;
  messages: any = []

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      searchInput: new FormControl('')
    });
  }

  ngOnInit() {
    // 如果videofont = true 就會跳到20秒播放
  }

  onEnter(event: any) {
    event.preventDefault(); // 防止換行
    this.onSearchInput();
  }

  onSearchInput() {
    const searchInput = this.myForm.get('searchInput')!.value;
    if (searchInput == "video") {

      this.messages.push({
        message: searchInput,
        sender: 'startvideo',
        showvideo: true,
        videofont: false,
      })
    } else if (searchInput == "videofont") {
      this.videofont = true
      const player = this.videoPlayer.nativeElement;
      player.currentTime = 20;
      this.messages.push({
        message: searchInput,
        sender: 'startvideo',
        showvideo: false,
        videofont: true,
      })
    } else {

      this.messages.push({
        message: searchInput,
        sender: 'user',
        showvideo: false,
        videofont: false,
      })

    }
    this.myForm.get('searchInput')!.setValue('');
    try {
      setTimeout(() => {
        this.scrollMe.nativeElement.scrollTop = this.scrollMe.nativeElement.scrollHeight;
      }, 0);
    } catch(err) { }
  }

}

