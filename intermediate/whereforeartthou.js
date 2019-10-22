function whatIsInAName(collection, source) {
	// What's in a name?
	let correctArr = [];

	let sourceKey = Object.keys(source);
	let sourceVal = Object.values(source);
	console.log(sourceKey, sourceVal);

	for (let i = 0; i < collection.length; i++) {
		let collectionKey = Object.keys(collection[i]);
		let collectionVal = Object.values(collection[i]);
		let checkerVal = 0;
		// console.log(collectionKey, collectionVal);

		for (let j = 0; j < sourceKey.length; j++) {
			for (let k = 0; k < collectionKey.length; k++) {
				console.log(collectionKey[k], collectionVal[k]);
				if (
					collectionKey[k] == sourceKey[j] &&
					collectionVal[k] == sourceVal[j]
				) {
					checkerVal++;
					// continue;
				}
			}
		}
		if (checkerVal >= sourceKey.length) {
			correctArr.push(collection[i]);
		}
	}

	// console.log(Object.keys(source));
	// console.log(Object.values(source));

	// Only change code above this line
	console.log(correctArr);
	return correctArr;
}

whatIsInAName(
	[
		{ first: "Romeo", last: "Montague" },
		{ first: "Mercutio", last: null },
		{ first: "Tybalt", last: "Capulet" }
	],
	{ last: "Capulet" }
);
