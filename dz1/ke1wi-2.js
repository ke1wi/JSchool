function hanoi(N) {
	let res = 0;
	for (let i = 0; i < N; i++) {
		res *= 2;
		res++;
	}
	return res;
}
