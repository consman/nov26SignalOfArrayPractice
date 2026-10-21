import { Injectable, Service, signal, WritableSignal } from '@angular/core';
import { Dog } from './defs';
import { CHOOSEABLEDOGS } from './defs';

@Injectable({ providedIn: 'root' })
export class DogsService {

    chosenDogsSig: WritableSignal<Array<Dog | undefined>> = signal(new Array<Dog | undefined>());
    dogName!:string;
    id = 0;

    constructor(){

    }

    getDogByName(dName: string):void{
        let result:WritableSignal<Dog | undefined> = signal(undefined);

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



}
