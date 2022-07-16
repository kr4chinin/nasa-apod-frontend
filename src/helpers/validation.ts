export const isUsernameValid = (username: string) => {
	if (
		username.length >= 4 &&
		username.length <= 12 &&
		username.trim().length !== 0 &&
		username.trim().length === username.length
	) {
        return true
	}
	return false
}

export const isPasswordValid = (password: string) => {
	if (
		password.length >= 6 &&
		password.length <= 15 &&
		password.trim().length !== 0 &&
		password.trim().length === password.length
	) {
        return true
	}
	return false
}
