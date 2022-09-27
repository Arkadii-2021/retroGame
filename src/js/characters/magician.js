import Character from '../Character';
export class Magician extends Character {
  constructor(level) {
    super();
	this.type = "magician";
	this.level = level;
    this.attack = 10;
    this.defence = 40;
	if (this.level > 4 || this.level < 1 || !['swordsman', 'bowman', 'magician', 'daemon', 'undead', 'vampire', 'generic'].includes(this.type)) throw new Error();
  }
}
