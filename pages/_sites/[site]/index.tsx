/** Add your relevant code here for the issue to reproduce */
import { useRouter } from 'next/router'

export const getStaticPaths = async () => {
	const subdomains = ['a']

	return {
		paths: subdomains?.map(subdomain => ({ params: { site: subdomain } })) || [],
		fallback: false
	}
}

export const getStaticProps = async ({ params }) => {
	return { props: { data: 'some-data' } }
}


export default function Site() {
  const router = useRouter()

  return (
    <>
      <button onClick={() => {
        router.push({ query: { hello: 'world', site: 'a' } }, undefined, { shallow: true })
      }}>
        Shallow routing
      </button>

      <button onClick={() => {
        router.push({ query: { hello: 'world', site: 'a' } })
      }}>
        Standard routing
      </button>
    </>
    
  )
}
