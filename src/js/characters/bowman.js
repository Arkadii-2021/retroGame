import Character from '../Character';
export class Bowman extends Character {
  constructor(level) {
    super();
	this.type = "bowman";
	this.level = level;
    this.attack = 25;
    this.defence = 25;
	if (this.level > 4 || this.level < 1 || !['swordsman', 'bowman', 'magician', 'daemon', 'undead', 'vampire', 'generic'].includes(this.type)) throw new Error();
  }
}
