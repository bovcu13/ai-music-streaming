import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { PRIMENG_MODULES } from "../../../share/primeng";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { NgForOf, NgIf } from "@angular/common";
import { quest } from "../../../share/data/ai-assistant";
import { tips } from "../../../share/data/ai-assistant";
import { MessageService } from "primeng/api";

@Component({
  selector: 'app-ai-assistant',
  standalone: true,
  imports: [
    PRIMENG_MODULES,
    ReactiveFormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './ai-assistant.component.html',
  styleUrl: './ai-assistant.component.scss',
  providers: [MessageService]
})
export class AiAssistantComponent implements OnInit {
  @ViewChild('videoPlayer', { static: true }) videoPlayer!: ElementRef;
  @ViewChild('scrollMe') private scrollMe!: ElementRef;
  myForm!: FormGroup;
  quest = quest;
  tips = tips;
  messages: any = []
  isTyping = false;
  thumbsUpStatus = [{}];
  thumbsDownStatus = [{}];
  id = 0;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService) {
    this.myForm = this.fb.group({
      searchInput: new FormControl('')
    });
  }

  ngOnInit() {

  }

  onEnter(event: any) {
    event.preventDefault(); // 防止換行
    if (this.myForm.controls['searchInput'].value !== '') {
      this.onSearchInput();
    }
  }

  onSearchInput() {
    const searchInput = this.myForm.get('searchInput')!.value;
    if (searchInput == "video") {
      // 查詢影片
      this.messages.push({
        message: searchInput,
        showVideo: true
      })
    } else {
      // 使用者
      this.messages.push({
        id: this.id++,
        message: searchInput,
      })
      this.isTyping = true;
      this.scrollToBottom();
      // bot
      setTimeout(() => {
        this.messages.push({
          id: this.id++,
          message: '',
          sender: 'bot'
        });
        this.typeMessage('您好，很高興為您服務！😝', 100)
        this.scrollToBottom();
      }, 1000); // 延遲1秒後執行
    }

    this.myForm.get('searchInput')!.setValue('');
  }

  typeMessage(message: string, speed: number): Promise<void> {
    return new Promise((resolve) => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < message.length) {
          // Append the next character to the message
          this.messages[this.messages.length - 1].message += message[i];
          i++;
        } else {
          // All characters have been appended, clear the interval
          clearInterval(interval);
          this.isTyping = false;
          resolve();
        }
        this.scrollToBottom();
      }, speed);
    });
  }

  copy(content: any) {
    navigator.clipboard.writeText(content).then(() => {
      this.messageService.add({ severity: 'success', summary: '複製成功', detail: '已複製此則內容' });
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  }

  toggleThumbsUp(messageId: any) {
    this.thumbsUpStatus[messageId] = !this.thumbsUpStatus[messageId];
    this.messageService.add({ severity: 'success', summary: 'Like!', detail: '感謝您的反饋' });
    if (this.thumbsUpStatus[messageId]) {
      this.thumbsDownStatus[messageId] = false;
    }
  }

  toggleThumbsDown(messageId: any) {
    this.thumbsDownStatus[messageId] = !this.thumbsDownStatus[messageId];
    this.messageService.add({ severity: 'success', summary: 'Dislike!', detail: '感謝您的反饋' });
    if (this.thumbsDownStatus[messageId]) {
      this.thumbsUpStatus[messageId] = false;
    }
  }

  scrollToBottom() {
    try {
      setTimeout(() => {
        this.scrollMe.nativeElement.scrollTop = this.scrollMe.nativeElement.scrollHeight;
      }, 0);
    } catch (err) {
    }
  }
}

