import { Injectable, Service, signal, WritableSignal } from '@angular/core';
import { DogT } from './defs';
import { CHOOSEABLEDOGS } from './defs';

@Injectable({ providedIn: 'root' })
export class DogsService {

    chosenDogsSig: WritableSignal<Array<DogT | undefined>> = signal(new Array<DogT | undefined>());
    dogName!:string;
    id = 0;

    constructor(){

    }

    getDogByName(dName: string):void{
        let result:WritableSignal<DogT | undefined> = signal(undefined);

        if(CHOOSEABLEDOGS.filter(d => d.name == dName).length == 0){
            console.log('no dog named '+ dName+' found.');
        }
        else{
            let foundDog = CHOOSEABLEDOGS.find(d => d.name == dName);
            this.id++;
            if( foundDog){ 
                foundDog.id = this.id;
                console.log('Success dog named '+ dName+' found.');
                this.chosenDogsSig.update(dSoFar => [...dSoFar,foundDog]);
            }
        }               
    }

    removeDogById(id:number):void{
        this.chosenDogsSig.update(dogs => dogs.filter(dog => dog && dog.id !== id));
    }


}
