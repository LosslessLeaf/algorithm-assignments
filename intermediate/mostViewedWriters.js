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
		let index = parseInt(topics[e]);
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
		// console.log(questions.topics[e]);
	}

	for (let viewArr in views) {
		let answerID = views[viewArr][0];
		let userID = views[viewArr][1];
		let viewCount = views[viewArr][2];

		console.log(
			"Answer ID:",
			answerID,
			"User ID:",
			userID,
			"Views:",
			viewCount
		);
		let index;
		for (let e in questions.topics) {
			index = questions.topics[e].answers.indexOf(answerID);
			if (index > 0) {
				console.log(questions.topics[e].answers[index]);
			}
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
