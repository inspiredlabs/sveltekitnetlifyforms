export const post = (request) => {
	//console.log(request);

	const submission = JSON.parse(request.body)

	const email = submission.email
	const message = submission.message

	return {
		body: {
			email,
			message,
		}
	}
}
