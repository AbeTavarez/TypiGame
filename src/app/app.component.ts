import { Component, Input } from '@angular/core';
import { lorem, random } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText: string = lorem.sentence();
  enteredText: string = '';
  msg: string = '';

  handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    console.log(value);
    this.enteredText = value;
  };

  compare(randomLetter: string, enteredLetter: string){
    if (!enteredLetter) return 'pending';

    return randomLetter === enteredLetter ? 'correct': 'incorrect';

  }

  displayMsg(enteredText: string, randomText: string) {
    if (enteredText === randomText) return 'You Win!';
    else return '';
  }
}
