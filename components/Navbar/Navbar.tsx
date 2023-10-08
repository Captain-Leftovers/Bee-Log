import BeeIcon from '../ui/BeeIcon'
import Container from '../ui/Container'
import MainNav from './MainNav'
import NavActions from './NavActions'

export default function Navbar() {
	return (
		<div className="border-b ">
			<Container>
				<div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
					<BeeIcon className="rotate-90 mr-4" />
					<MainNav />
					<NavActions />
					<BeeIcon className="-rotate-90 ml-4" />
				</div>
			</Container>
		</div>
	)
}
