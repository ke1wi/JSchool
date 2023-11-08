function task5(object, val) {
	for (var i in object) {
		if (object[i] instanceof Object) {
			if (getRootProperty(object[i], val)) {
				return i;
			}
		} else {
			if (object[i] == val) {
				return i;
			}
		}
	}
	return null;
}
