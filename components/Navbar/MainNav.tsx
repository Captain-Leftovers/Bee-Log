import Link from 'next/link'


const links = [
	{
		name: 'HOME',
		href: '#',
	},
	{
		name: 'FARMS',
		href: '#',
	},
]

export default function MainNav() {
	return (
		
		<div className='flex gap-4 mr-auto items-center'>
			{links.map((x) => (
				<Link key={x.name} href={x.href}>{x.name}</Link>
			))}
		</div>
	)
}
