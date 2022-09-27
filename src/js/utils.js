/**
 * @todo
 * @param index - индекс поля
 * @param boardSize - размер квадратного поля (в длину или ширину)
 * @returns строка - тип ячейки на поле:
 *
 * top-left
 * top-right
 * top
 * bottom-left
 * bottom-right
 * bottom
 * right
 * left
 * center
 *
 * @example
 * ```js
 * calcTileType(0, 8); // 'top-left'
 * calcTileType(1, 8); // 'top'
 * calcTileType(63, 8); // 'bottom-right'
 * calcTileType(7, 7); // 'left'
 * ```
 * */
export function calcTileType(index, boardSize) {
	if (index >= 1 && index < 7) {
		return 'top'
	} else if (index == 0) {
		return 'top-left'
	} else if (index == 7) {
		return 'top-right'
	} else if ((index % 8 == 0) && (index < 56 && index > 0)) {
		return 'left'
	} else if ([15, 23, 31, 39, 47, 55].includes(index)) {
		return 'right'
	} else if (index > 56 && index < 63) {
		return 'bottom'
	} else if (index == 56) {
		return 'bottom-left'
	} else if (index == 63) {
		return 'bottom-right'
	}
  return 'center'
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}

export function randIntArray(quantity, type, cell, n1, n2) {
	let teamArrColumn = {'columnTeam': [], 'columnOpponent': []};
	  for (let i = 0; teamArrColumn[type].length < quantity; i++) {
		let indexColumn = Math.floor(Math.random() * cell);
		if (!teamArrColumn[type].includes(indexColumn) && ((indexColumn % 8 == n1) || (indexColumn % 8 == n2))) {
			teamArrColumn[type].push(indexColumn);
		}
	};
	return teamArrColumn;	
}