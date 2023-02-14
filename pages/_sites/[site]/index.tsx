/** Add your relevant code here for the issue to reproduce */
import { useRouter } from 'next/router'
import { useRef } from 'react'

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

  const renderCounter  = useRef(0);

  renderCounter.current++

  return (
    <>
      <button onClick={() => {
        router.push(
          {
            pathname: '/',
            query: { hello: 'world', site: 'a' }
          },
          undefined,
          { shallow: true }
        )
      }}>
        Shallow routing
      </button>

      <p>Renders: {renderCounter.current}</p>

    </>    
  )
}
