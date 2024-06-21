import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  private messages: string[] = [
    'You have found a hidden treasure!',
    'A wild animal appears!',
    'You fall into a trap!',
    'You find a peaceful village.',
    'A storm is coming, seek shelter!'
  ];

  constructor() { }

  getRandomMessage(): string {
    const randomIndex = Math.floor(Math.random() * this.messages.length);
    return this.messages[randomIndex];
  }
}
