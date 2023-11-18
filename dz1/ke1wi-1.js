function task1(num) {
	if (num < 0) return 0;
	for (let i = 0; i < num; i++) {
		let sum = 0;
		if (i % 3 === 0 || i % 5 === 0) {
			sum += i;
		}
	}
	return sum;
}
