import { Component, computed, inject, signal } from '@angular/core';
import { DogsService } from '../dogs-service';
import { FormsModule } from '@angular/forms';
import { Dog } from '../dog/dog';

@Component({
  imports: [FormsModule, Dog],
  selector: 'app-dogs',
  styleUrl: './dogs.css',
  templateUrl: './dogs.html',
})
export class Dogs {

  dogName!:string;
  dogsService= inject(DogsService);
  countSig = signal(0);

  constructor(){}

    computedDogsCountSig = computed(():number => {
      const chosenDogs = this.dogsService.chosenDogsSig();
      const count = this.countSig();    
      return chosenDogs.length > count ? chosenDogs.length : count;
  });
  
  chooseDog():void {
    this.dogsService.getDogByName(this.dogName);
  }


}
