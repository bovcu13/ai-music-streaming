import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PRIMENG_MODULES } from "../../../share/primeng";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { NgForOf } from "@angular/common";

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
  myForm!: FormGroup;
  filterStr: string = '';
  showvideo = false;
  videofont = false;
  messages: any = [
    {
      message: 'Hello, I am a chatbot. What can I do for you?',
      sender: 'bot',
      showvideo: false,
      videofont: false,
    },
    {
      message: "video",
      sender: 'startvideo',
      showvideo: true,
      videofont: false,
    },
    {
      message: "videofont",
      sender: 'startvideo',
      showvideo: false,
      videofont: true,
    }
  ]

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      searchInput: new FormControl('')
    });
  }

  ngOnInit() {
    // 如果videofont = true 就會跳到20秒播放
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
  }

}

