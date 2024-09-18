import { Component } from '@angular/core';

@Component({
  selector: 'app-emojitracker',
  templateUrl: './emojitracker.component.html',
  styleUrl: './emojitracker.component.css'
})
export class EmojitrackerComponent {
  emojis = [
    { emoji: '😊', description: 'Happy' },
    { emoji: '😔', description: 'Sad' },
    { emoji: '😠', description: 'Angry' },
    { emoji: '😎', description: 'Cool' },
    { emoji: '😴', description: 'Tired' }
  ];

  selectedEmoji: string | null = null;
  selectedDescription: string | null = null;
  selectEmoji(emoji: string, description: string) {
    this.selectedEmoji = emoji;
    this.selectedDescription = description;
  }
}

