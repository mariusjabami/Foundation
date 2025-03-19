import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container dark-terminal">
      <Head>
        <title>FOUNDATION OS | Project NÊMESIS</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Terminal Interface | Operative Access Only" />
      </Head>

      <main>
        <Header title="› FOUNDATION CORPORATION [PROJECT NÊMESIS]" />
        <p className="description terminal-message">
          [ ACCESS GRANTED - Clearance Level: DELTA CLASS ]
        </p>
        <div className="terminal-box">
          <pre className="terminal-output">
{`
[ FOUNDATION INTEL SYSTEM BOOT SEQUENCE ]
> Loading security protocols...
> Activating suppression matrix...
> NÊMESIS Core: ONLINE
> Operative link established.

Welcome, Shadow Agent.
Your silence is your weapon. Your code is your dominion.
`}
          </pre>
        </div>
      </main>

      <Footer />
    </div>
  )
}