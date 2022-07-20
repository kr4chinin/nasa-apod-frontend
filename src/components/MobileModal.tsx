import { FC } from 'react'

interface MobileModalProps {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
}

const MobileModal: FC<MobileModalProps> = ({ isOpen, setIsOpen }) => {
	function handleClose() {
		setIsOpen(false)
	}

	return (
		<div className={`modal ${isOpen && 'is-active'}`}>
			<div className="modal-background" onClick={handleClose}></div>
			<article className="message is-info is-medium modal-content">
				<div className="message-header">
					<p>✉️ You are using mobile device</p>
					<button className="delete" onClick={handleClose}></button>
				</div>
				<div className="message-body">
					<div className="message-content mb-2">
						Please transfer to <b>horizontal orientation</b> for better
						experience and close this pop-up!
					</div>
					<div className="message-image">
						<img
							className="image"
							src="https://i.stack.imgur.com/2ASDy.png"
							alt="Move phone to horizontal orientation warning"
						/>
					</div>
				</div>
			</article>
		</div>
	)
}

export default MobileModal
