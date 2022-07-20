export type ErrorResponse = {
	response: {
		data: {
			message: string
		}
	}
}

export type RegistrationSuccessResponse = {
	message: string
}

export type LoginSuccessResponse = {
	data: {
		token: string
	}
}
