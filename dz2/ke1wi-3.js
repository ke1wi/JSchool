function task3(words) {
	const anagrams = {};
	for (let word of words) {
		let sortedWord = word.split("").sort().join("");
		if (sortedWord in anagrams) {
			anagrams[sortedWord].push(word);
		} else {
			anagrams[sortedWord] = [word];
		}
	}
	return Object.values(anagrams);
}
