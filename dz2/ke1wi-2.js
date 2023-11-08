function task2(array) {
	let i = 0;
	array = array.concat([0])
	while (true) {
		let left_sum = 0;
		let right_sum = 0;
		for (let j = 0; j < i; j++) {
			left_sum += array[j];
		}

		for (let j = i + 1; j < array.length; j++) {
			right_sum += array[j];
		}
		if (left_sum === right_sum) return i;
		i++;

		if (i === array.length + 1) return -1;
	}
}