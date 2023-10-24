import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  get characters(): Character[] {
    /**
     * * Con el operador spread hacemos una copia de el array,
     * * ya que javascript pasa las variables por referencia
     * * y no queremos que se cambie el objeto raíz
     */
    return [...this.dbzService.characters];
  }

  deleteCharacterById(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character) {
    this.dbzService.onNewCharacter(character);
  }
}
