function highAndLow(numbers) {
	let arr = numbers.split(" ");
	let maxNum = arr[0];
	let minNum = arr[0];

	for (let num of arr) {
		if (Number(num) > Number(maxNum)) {
			maxNum = num;
		}

		if (Number(num) < Number(minNum)) {
			minNum = num;
		}
	}
	return `${maxNum} ${minNum}`;
}