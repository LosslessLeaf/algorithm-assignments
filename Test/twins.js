// random number generator to create array of ints

// find all pairs that equate to 0

let intArray = [];

let start = new Date().getTime();
for (let i = 0; i < 1000000; i++) {
	intArray.push(Math.floor((Math.random() - 0.5) * 2000));
}
// let intArray = [
// 	-441,
// 	-280,
// 	156,
// 	-290,
// 	-135,
// 	-470,
// 	-119,
// 	216,
// 	164,
// 	-477,
// 	-252,
// 	-29,
// 	-200,
// 	-32,
// 	58,
// 	-98,
// 	235,
// 	-459,
// 	397,
// 	39,
// 	-21,
// 	9,
// 	-218,
// 	-66,
// 	-492,
// 	160,
// 	-49,
// 	-421,
// 	274,
// 	-429,
// 	296,
// 	-18,
// 	-438,
// 	170,
// 	469,
// 	-168,
// 	-334,
// 	-343,
// 	285,
// 	219,
// 	-100,
// 	289,
// 	491,
// 	269,
// 	-434,
// 	-448,
// 	-240,
// 	-30,
// 	-174,
// 	263,
// 	143,
// 	-46,
// 	-293,
// 	-237,
// 	481,
// 	-40,
// 	13,
// 	232,
// 	-335,
// 	-156,
// 	-448,
// 	110,
// 	-2,
// 	-411,
// 	408,
// 	-393,
// 	-235,
// 	284,
// 	328,
// 	293,
// 	30,
// 	-4,
// 	-180,
// 	446,
// 	-259,
// 	-135,
// 	-399,
// 	-327,
// 	-350,
// 	299,
// 	12,
// 	-356,
// 	408,
// 	-39,
// 	-197,
// 	-447,
// 	483,
// 	347,
// 	171,
// 	202,
// 	-73,
// 	426,
// 	-336,
// 	52,
// 	160,
// 	-115,
// 	354,
// 	-121,
// 	422,
// 	441
// ];

console.log(intArray);

let twinsArray = [];

for (let i = 0; i < intArray.length; i++) {
	if (
		intArray.indexOf(intArray[i] * -1) > -1 &&
		i > intArray.indexOf(intArray[i] * -1)
	) {
		let first = intArray.slice(i, i + 1);
		let matchIndex = intArray.indexOf(intArray[i] * -1);
		let match = intArray.slice(matchIndex, matchIndex + 1);
		twinsArray.push(first[0]);
		twinsArray.push(match[0]);
	}
	// console.log(intArray.indexOf(intArray[i] * -1));
}

let end = new Date().getTime();

// let difference = start - end;
console.log(twinsArray);
console.log(end - start);
