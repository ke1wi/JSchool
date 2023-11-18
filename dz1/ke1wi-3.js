function findNb(m) {
	let n = 0;
	while (true) {
		if (m > 0) {
			let volume = (n + 1) ** 3;
			m -= volume;
		} else if (m == 0) {
			return n;
		} else if (m < 0) {
			return -1;
		}
		n++;
	}
}
