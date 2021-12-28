import { Component, Input } from '@angular/core';
import {lorem} from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = lorem.sentence();

  handleInput(event: Event){
    const target = event.target as HTMLInputElement;
    const value = target.value;
    console.log(value);
    
  }
}
