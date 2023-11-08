class Vector {
	constructor(components) {
		this.components = components;

		this.add = function (vector) {
			if (this.components.length !== vector.components.length) {
				throw Error('Length of vectors are not the same!');
			}

			let res = [];

			for (let i = 0, length = this.components.length; i < length; i++) {
				res.push(this.components[i] + vector.components[i]);
			}

			return new Vector(res);
		};

		this.subtract = function (vector) {
			if (this.components.length !== vector.components.length) {
				throw Error('Length of vectors are not the same!');
			}

			let res = [];

			for (let i = 0, length = this.components.length; i < length; i++) {
				res.push(this.components[i] - vector.components[i]);
			}

			return new Vector(res);
		};

		this.dot = function (vector) {
			if (this.components.length !== vector.components.length) {
				throw Error('Length of vectors must be the same!');
			}

			let res = [];

			for (let i = 0, length = this.components.length; i < length; i++) {
				res.push(this.components[i] * vector.components[i]);
			}

			return res.reduce(function (a, b) { return a + b; });
		};

		this.norm = function () {
			return Math.sqrt(this.components.reduce(function (a, b) {
				return a + Math.pow(b, 2);
			}));
		};

		this.equals = function (vector) {
			if (this.components.length !== vector.components.length) {
				return false;
			}

			for (let i = 0, length = this.components.length; i < length; i++) {
				if (this.components[i] !== vector.components[i]) {
					return false;
				}
			}

			return true;
		};

		this.toString = function () {
			return `(${this.components.join(',')})`;
		};
	}
};
