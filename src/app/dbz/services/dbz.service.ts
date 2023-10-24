import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Veggeta',
      power: 8000
    }
  ];

  onNewCharacter(character: Character): void {
    // const newCharacter: Character = {
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power
    // }

    //* El spread operator es para poner todos los elementos del objeto en cuestión
    const newCharacter: Character = {
      id: uuid(),
      ...character
    }
    console.log(character);
    this.characters.push(character);
  }

  // onDeletedCharacter(index: number): void {
  //   console.log("From MAIN", index);
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById (id: string){
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
