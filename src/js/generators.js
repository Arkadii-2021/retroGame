/**
 * Формирует экземпляр персонажа из массива allowedTypes со
 * случайным уровнем от 1 до maxLevel
 *
 * @param allowedTypes массив классов
 * @param maxLevel максимальный возможный уровень персонажа
 * @returns генератор, который при каждом вызове
 * возвращает новый экземпляр класса персонажа
 *
 */

//const playerTypes = [Bowman, Swordsman, Magician];
 
export function* characterGenerator(allowedTypes, maxLevel) {
	let levelMax = Math.floor(Math.random() * (Math.floor(maxLevel) - Math.ceil(1) + 1)) + Math.ceil(1);
	let indexTypes = Math.floor(Math.random() * allowedTypes.length);
	let typeCharacter = new allowedTypes[indexTypes]();
	typeCharacter.level = levelMax;
	yield typeCharacter;
}

/**
 * Формирует массив персонажей на основе characterGenerator
 * @param allowedTypes массив классов
 * @param maxLevel максимальный возможный уровень персонажа
 * @param characterCount количество персонажей, которое нужно сформировать
 * @returns экземпляр Team, хранящий экземпляры персонажей. Количество персонажей в команде - characterCount
 * */
export function generateTeam(allowedTypes, maxLevel, characterCount) {
	let characterTeam = {'characters': []};
	for (let i = 1; i <= characterCount; i++) {
		characterTeam['characters'].push(characterGenerator(allowedTypes, maxLevel).next().value);
	};
	return characterTeam;
}
