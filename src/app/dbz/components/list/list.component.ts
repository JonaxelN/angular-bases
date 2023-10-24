import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDeletedChacarter: EventEmitter<number> = new EventEmitter();

  @Output()
  public deleteCharacterById: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{name: 'Trunks', power: 10}];

  onDeleteCharacter(index: number): void {
    console.log(index);
    this.onDeletedChacarter.emit(index);
  }

  deleteCharacterByIdMethod(id: string): void {
    console.log(id);
    this.deleteCharacterById.emit(id);
  }
}
