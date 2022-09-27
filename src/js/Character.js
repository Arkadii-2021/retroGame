/**
 * Базовый класс, от которого наследуются классы персонажей
 * @property level - уровень персонажа, от 1 до 4
 * @property attack - показатель атаки
 * @property defence - показатель защиты
 * @property health - здоровье персонажа
 * @property type - строка с одним из допустимых значений:
 * swordsman
 * bowman
 * magician
 * daemon
 * undead
 * vampire
 */
export default class Character {
  constructor(level, type = 'generic') {
	  this.level = 1;
	  this.attack = 0;
	  this.defence = 0;
	  this.health = 50;
	  this.type = type; 
	  if (new.target.name === 'Character' || this.level > 4 || this.level < 1 || !['swordsman', 'bowman', 'magician', 'daemon', 'undead', 'vampire', 'generic'].includes(this.type)) throw new Error();
  }
}
