import Character from '../Character';
export class Undead extends Character {
  constructor(level) {
    super();
	this.type = "undead";
	this.level = level;
    this.attack = 40;
    this.defence = 10;
	if (this.level > 4 || this.level < 1 || !['swordsman', 'bowman', 'magician', 'daemon', 'undead', 'vampire', 'generic'].includes(this.type)) throw new Error();
  }
}
