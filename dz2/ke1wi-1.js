function task1(array, d) {
	let amountOfGroups = array.length / d;
	let i = 0;
	let sum = [];
	while (i < amountOfGroups) {
		sum.push(0);
		for (let j = i; j < array.length; j += amountOfGroups) {
			sum[i] += array[j];
		}
		i++;
	}
	return Math.max(...sum);
}