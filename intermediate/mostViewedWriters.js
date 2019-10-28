function mostViewedWriters(topicIds, answerIds, views) {
	//
	//
	// comment here
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
		questions.topics[e] = {
			topicId: e,
			topic: topics[e]
		};
	}

	for (let e in questions.topics) {
		console.log(questions.topics[e]);
		questions.topics[e].answers = [];
	}
	for (let e in answerIds) {
		if ((questions.topics.topicId = answerIds[e])) {
		}
	}
}

mostViewedWriters(
	[[1, 2, 3], [2, 3, 4], [1, 4], [2, 3]],
	[[6, 4], [1, 2], [5], [3]],
	[[2, 1, 2], [6, 3, 5], [3, 3, 0], [5, 1, 1], [4, 2, 3], [1, 4, 2]]
);

// Expected Output:
// [[[3,5],[2,3],[1,1]],
//  [[3,5],[2,3],[1,2],[4,2]],
//  [[3,5],[2,3],[1,2],[4,2]],
//  [[1,3],[4,2]]]
