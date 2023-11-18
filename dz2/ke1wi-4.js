function task4(truck) {
	let output = "";
	let count = 0;

	for (let box of truck) {
		for (let package of box) {
			let last = package.charAt(package.length - 1);
			let first = package.charAt(0);
			if (package.length == 6 && last == "]" && first == "[") {
				let contents = package.substring(1, package.length - 1);
				let individual = contents.split("");
				let is_good = individual.every((a) => a === contents[0]);

				if (!is_good) continue;

				if (count != 4) {
					output += individual.join(" ");
					output += " ";
				}
				count += 1;
				count %= 5;
			}
		}
	}
	return output.substring(0, output.length - 1);
}
