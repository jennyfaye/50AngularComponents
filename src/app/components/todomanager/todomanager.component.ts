import { Component } from '@angular/core';

@Component({
  selector: 'app-todomanager',
  templateUrl: './todomanager.component.html',
  styleUrl: './todomanager.component.css'
})
export class TodomanagerComponent {
  task: string = '';
  toDoList: string[] = [];

  addTask() {
    if (this.task.trim()) {
      this.toDoList.push(this.task.trim());
      this.task = '';
      console.log("Added Item")
    }
  }

  removeTask(index: number) {
    this.toDoList.splice(index, 1);
    console.log("Removed Item")
  }
}
