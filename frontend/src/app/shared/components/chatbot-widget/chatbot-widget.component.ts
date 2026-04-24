import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-chatbot-widget',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot-widget.component.html',
  styleUrls: ['./chatbot-widget.component.css']
})
export class ChatbotWidgetComponent implements OnInit {
  isOpen = false;
  messages: any[] = [];
  inputMessage = '';
  loading = false;
  sessionId = '';

  constructor(private api: ApiService, public auth: AuthService) {}

  ngOnInit() {}

  toggleWindow() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    if (!this.inputMessage.trim() || this.loading) return;

    const msg = this.inputMessage.trim();
    this.inputMessage = '';
    this.messages.push({ role: 'user', message: msg });
    this.scrollToBottom();
    this.loading = true;

    this.api.sendMessage({ message: msg, sessionId: this.sessionId }).subscribe({
      next: (res) => {
        this.messages.push({ role: 'assistant', message: res.reply });
        this.sessionId = res.sessionId;
        this.loading = false;
        this.scrollToBottom();
      },
      error: () => {
        this.messages.push({ role: 'assistant', message: 'Xin lỗi, tôi đang gặp sự cố. Bạn vui lòng thử lại nhé!' });
        this.loading = false;
        this.scrollToBottom();
      }
    });
  }

  scrollToBottom() {
    setTimeout(() => {
      const el = document.querySelector('.chatbot-messages');
      if (el) el.scrollTop = el.scrollHeight;
    }, 100);
  }
}
