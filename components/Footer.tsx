export default function Footer() {
	return (
		<footer className="border-t">
			<div className="mx-auto py-10">
				<p className="text-center text-xs text-black">
					&copy; ${new Date().getFullYear()} Not a real store, Inc
					All rights reserved.
				</p>
			</div>
		</footer>
	)
}
