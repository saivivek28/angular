import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {
studentName: string = '';
subject: string = '';
testScore1: number = 0;
testScore2: number = 0;
message: boolean = false;
totalScore: number = 0;
finalMessage: string = '';

showscore() {
this.message = !this.message;
this.totalScore = Number(this.testScore1) + Number(this.testScore2);
this.finalMessage = `Hi ${this.studentName}!, your total score in ${this.subject} is ${this.totalScore}. `;
}
}

