import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Nikken Wellnes Site ➰</title>
        <meta name="description" content="Nikken Wellness Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-slate-900 text-white h-full">
        <h1>Hello World</h1>
        <nav>
          <ul>
            <li>
              <Link href="/terms-and-conditions">T & C</Link>
            </li>
          </ul>
        </nav>
      </main>

      <footer>
        <h2 className="fixed bottom-0 w-full text-center p-16 bg-slate-700 text-white">
          Footer
        </h2>
      </footer>
    </div>
  )
}

export default Home
