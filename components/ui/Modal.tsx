import BeeIcon from './BeeIcon'

type ModalProps = {
	isOpen: boolean
	onClose: (closing: boolean) => void
	title: string
	description: string
	children: React.ReactNode
}

const Modal = ({
	children,
	isOpen,
	onClose,
	title,
	description,
}: ModalProps) => {
	return (
		<div
			className={`${
				isOpen ? 'block' : 'hidden'
			} fixed z-50 inset-0 overflow-y-auto`}
		>
			<div className="flex items-center justify-center min-h-screen">
				<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				<div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full">
					<div className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center">
						<h3 className="text-lg font-medium">{title}</h3>
						<button
							type="button"
							className="text-gray-300 hover:text-white focus:outline-none"
							onClick={() => onClose(true)}
						>
							<span className="sr-only">Close</span>
							<BeeIcon />
						</button>
					</div>
					<div className="bg-gray-100 px-4 py-3">
						<p className="text-gray-700">{description}</p>
					</div>
					<div className="bg-white px-4 py-3">{children}</div>
				</div>
			</div>
		</div>
	)
}

export default Modal
