// Packages
import { NextResponse } from 'next/server'

export const config = {
	matcher: [
		/*
		 * Match all paths except for:
		 * 1. /api routes
		 * 2. /_next (Next.js internals)
		 * 3. all root files inside /public (e.g. /favicon.ico)
		 */
		'/((?!api/|_next/|_static/|[\\w-]+\\.\\w+).*)'
	]
}

export default async (req, ev) => {
	const hostname = req.headers.get('host')

	let { pathname, search } = new URL(req.nextUrl)

	const host = hostname.replace(`.localhost:3000`, '')

	// Subdomain
	if (host === 'a') {
		console.log('→ rewrite()')

		return NextResponse.rewrite(new URL(`/_sites/${host}${pathname}${search}`, req.nextUrl))
	}

	console.log('→ next()')
	return NextResponse.next()
}
