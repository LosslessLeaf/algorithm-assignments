function mostViewedWriters(topicIds, answerIds, views) {
	let questions = {};
	let topics = [];
	for (let e in topicIds) {
		for (let i in topicIds[e]) {
			topics.push(topicIds[e][i]);
		}
	}
	topics = topics.filter((v, i) => topics.indexOf(v) === i);

	questions.topics = [];
	for (let e in topics) {
		// let index = parseInt(topics[e]);
		questions.topics[e] = {
			topic: topics[e],
			answers: []
		};
	}

	// LOOP THROUGH TOPIC IDS
	for (let e in topicIds) {
		// FOR EACH TOPIC IN TOPICIDS[e]
		for (let i = 0; i < topicIds[e].length; i++) {
			// FOR EACH TOPIC IN QUESTIONS - FILL ANSWERS
			for (let j = 0; j < questions.topics.length; j++) {
				// IF TOPIC == TOPIC IN TOPICID[e] ARRAY THEN
				if (questions.topics[j].topic == topicIds[e][i]) {
					// FOR EACH ANSWER, RELATE THAT TO RELEVANT TOPIC
					for (let answer in answerIds[e]) {
						// PUSH ANSWERID TO ANSWER ARRAY
						questions.topics[j].answers.push(answerIds[e][answer]);
					}
				}
			}
		}
	}

	for (let e in questions.topics) {
		// SORT ANSWER IDS ASCENDING
		questions.topics[e].answers.sort((a, b) => a > b);

		questions.topics[e].users = {};
		// console.log(questions.topics[e]);
	}

	for (let e in questions.topics) {
		// console.log(questions.topics[e]);
		for (let viewArr in views) {
			let answerID = views[viewArr][0];
			let userID = views[viewArr][1];
			let viewCount = views[viewArr][2];

			// console.log(
			// 	"Answer ID:",
			// 	answerID,
			// 	"User ID:",
			// 	userID,
			// 	"Views:",
			// 	viewCount
			// );

			let index;
			index = questions.topics[e].answers.indexOf(answerID);
			// console.log(index);
			// console.log(questions.topics[e].answers[index]);
			if (index > -1) {
				// console.log(questions.topics[e].answers[index]);
				if (userID in questions.topics[e].users) {
					questions.topics[e].users[userID].views += viewCount;
				} else {
					questions.topics[e].users[userID] = {
						views: viewCount
					};
				}
			}
		}
	}

	let mostViewedWriters = [];
	for (let e in questions.topics) {
		let topicArr = [];
		for (let i in Object.keys(questions.topics[e].users)) {
			// console.log(
			// 	"UserID:",
			// 	Object.keys(questions.topics[e].users)[i],
			// 	"Views",
			// 	Object.values(questions.topics[e].users)[i].views
			// );

			topicArr.push([
				parseInt(Object.keys(questions.topics[e].users)[i]),
				Object.values(questions.topics[e].users)[i].views
			]);
		}
		topicArr.sort((a, b) => a[1] < b[1]);
		// topicArr.sort((a, b) => a[0] < b[0]);
		mostViewedWriters.push(topicArr);
	}

	let tempArr = [];
	// let x = 0;
	let i = 0;
	// while (mostViewedWriters.length > 0) {
		if (mostViewedWriters[i][0][0] > mostViewedWriters[i + 1][0][0]) {
			console.log(mostViewedWriters[i]);
			tempArr.push(mostViewedWriters[i]);
			mostViewedWriters.splice(i, 1);
			break;
			// x++;
		}
	// }
	console.log(tempArr);
	// console.log(mostViewedWriters);
	// return mostViewedWriters;
}

mostViewedWriters(
	[[555, 666, 777], [8, 1, 239], [239, 566, 1000]],
	[[1, 2, 3], [239, 567], [566, 30, 8]],
	[
		[1, 18, 5],
		[239, 23, 37],
		[567, 23, 0],
		[566, 1, 23],
		[30, 18, 18],
		[8, 7, 20],
		[3, 239, 1],
		[2, 18, 1]
	]
);

// [[[23,37]],
//  [[23,37]],
//  [[23,37],[1,23],[7,20],[18,18]],
//  [[18,6],[239,1]],
//  [[18,6],[239,1]],
//  [[18,6],[239,1]],
//  [[1,23],[7,20],[18,18]],
//  [[1,23],[7,20],[18,18]]]

// [ [ [ 18, 6 ], [ 239, 1 ] ],
//   [ [ 18, 6 ], [ 239, 1 ] ],
//   [ [ 18, 6 ], [ 239, 1 ] ],
//   [ [ 23, 37 ] ],
//   [ [ 23, 37 ] ],
//   [ [ 23, 37 ], [ 1, 23 ], [ 7, 20 ], [ 18, 18 ] ],
//   [ [ 1, 23 ], [ 7, 20 ], [ 18, 18 ] ],
//   [ [ 1, 23 ], [ 7, 20 ], [ 18, 18 ] ] ]

// [ [ [ 18, 6 ], [ 239, 1 ] ],
//   [ [ 18, 6 ], [ 239, 1 ] ],
//   [ [ 18, 6 ], [ 239, 1 ] ],
//   [ [ 23, 37 ] ],
//   [ [ 23, 37 ] ],
//   [ [ 1, 23 ], [ 7, 20 ], [ 18, 18 ], [ 23, 37 ] ],
//   [ [ 1, 23 ], [ 7, 20 ], [ 18, 18 ] ],
//   [ [ 1, 23 ], [ 7, 20 ], [ 18, 18 ] ] ]

mostViewedWriters(
	[[1, 2, 3], [2, 3, 4], [1, 4], [2, 3]],
	[[6, 4], [1, 2], [5], [3]],
	[[2, 1, 2], [6, 3, 5], [3, 3, 0], [5, 1, 1], [4, 2, 3], [1, 4, 2]]
);

// // Expected Output:
// // [[[3,5],[2,3],[1,1]],
// //  [[3,5],[2,3],[1,2],[4,2]],
// //  [[3,5],[2,3],[1,2],[4,2]],
// //  [[1,3],[4,2]]]
