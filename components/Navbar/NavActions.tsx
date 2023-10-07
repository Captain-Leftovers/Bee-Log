import Link from "next/link"

export default function NavActions() {
	const links = [
		{
			name: 'Login',
			href: '#',
		},
		{
			name: 'Register',
			href: '#',
		},

		{
			name: 'Logout',
			href: '#',
		},
	]

	return (
		<div className="flex gap-4 ml-auto ">
			{links.map((x) => (
				<Link key={x.name} href={x.href}>
					{x.name}
				</Link>
			))}
		</div>
	)
}
