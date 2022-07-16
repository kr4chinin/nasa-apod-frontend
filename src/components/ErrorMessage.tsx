import { FC } from 'react'

interface ErrorMessageProps {
	errorTitle: string
	errorBody: string
}

const ErrorMessage: FC<ErrorMessageProps> = ({ errorTitle, errorBody }) => {
	return (
		<article className="message is-danger is-medium">
			<div className="message-header">
				<p>{errorTitle}</p>
			</div>
			<div className="message-body">{errorBody}</div>
		</article>
	)
}

export default ErrorMessage
