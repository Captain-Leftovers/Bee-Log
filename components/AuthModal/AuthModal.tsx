'use client'

import Modal from '../ui/Modal'
import useAuthModal from '@/hooks/useAuthModal'

export default function AuthModal() {

    const { isOpen, onClose } = useAuthModal()

    const closingHandler = () => {
        onClose()
    }

	return (
		<Modal
			title="Login Modal"
			description="This is a modal used for login"
			isOpen={isOpen}
			onClose={closingHandler}
		>
            auth form here
        </Modal>
	)
}
