function task6(arr) {
	let sum = 0;
	arr.forEach((line, i) => {
		line.split("").forEach((el, a) => {
			if (el === "X") sum += 4;
			if (el === "X" && i > 0 && arr[i - 1][a] === "X") sum -= 2;
			if (el === "X" && a > 0 && arr[i][a - 1] === "X") sum -= 2;
		});
	});
	return "Total land perimeter: " + sum;
}
