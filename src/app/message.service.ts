import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];
  classType: string = 'info';

  // messgae class names
  // 'success', 'info', 'warning', 'danger'

  add(message: string, type: string) {
    this.clear();
    this.messages.push(message);
    this.classType = type || 'info';
  }

  clear() {
    this.messages = [];
  }
}
