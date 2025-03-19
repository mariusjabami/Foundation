import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>FOUNDATION OS | Project NÊMESIS</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Terminal Interface | Operative Access Only" />
      </Head>

      <style jsx>{`
        .container {
          background-color: #0a0a0a;
          color: #00ffcc;
          font-family: 'Courier New', monospace;
          min-height: 100vh;
          padding: 2rem;
          text-shadow: 0 0 5px #00ffcc;
        }

        main {
          max-width: 800px;
          margin: 0 auto;
        }

        .description {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          text-align: center;
          color: #ffffffaa;
          font-style: italic;
        }

        .terminal-box {
          background-color: #111;
          border: 1px solid #00ffcc55;
          padding: 2rem;
          margin-top: 2rem;
          border-radius: 8px;
          box-shadow: 0 0 15px #00ffcc33;
        }

        .terminal-output {
          color: #00ffcc;
          white-space: pre-wrap;
          font-size: 1rem;
          line-height: 1.5rem;
        }
      `}</style>

      <main>
        <Header title="› FOUNDATION CORPORATION [PROJECT NÊMESIS]" />
        <p className="description">
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