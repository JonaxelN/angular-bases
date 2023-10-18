import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;
  // public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = "Spiderman"
  }

  changeAge(): void {
    this.age = getRandomInt(0, 99);
  }

}
function getRandomInt(max: number, min: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

