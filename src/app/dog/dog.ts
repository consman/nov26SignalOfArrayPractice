import { Component, input } from '@angular/core';
import { initialDog ,DogT } from '../defs';

//import { Dog } from '../dog/dog';

@Component({
  imports: [],
  selector: 'app-dog',
  styleUrl: './dog.css',
  templateUrl: './dog.html',
})
export class Dog {

  currDog = input<DogT | undefined>(initialDog);

  constructor(){

  }
}
