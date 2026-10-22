import { Component, input, inject } from '@angular/core';
import { initialDog ,DogT } from '../defs';
import { DogsService } from '../dogs-service';


//import { Dog } from '../dog/dog';

@Component({
  imports: [],
  selector: 'app-dog',
  styleUrl: './dog.css',
  templateUrl: './dog.html',
})
export class Dog {

  currDog = input<DogT | undefined>(initialDog);
  dogService = inject(DogsService);

  constructor(){

  }
  handleClose():void{
    const dog =this.currDog();
    if(dog && dog.id){
      this.dogService.removeDogById(dog.id);
    }
  }
}
