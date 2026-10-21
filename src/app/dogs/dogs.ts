import { Component, inject } from '@angular/core';
import { DogsService } from '../dogs-service';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-dogs',
  styleUrl: './dogs.css',
  templateUrl: './dogs.html',
})
export class Dogs {


  dogName!:string;
  dogsService= inject(DogsService)

  constructor(){

  }

  chooseDog():void {
    this.dogsService.getDogByName(this.dogName);
  }

}
