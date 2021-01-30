import Head from 'next/head'
import MicSvg from '../public/microphone.svg';
import { IconButton, Icon } from '@material-ui/core'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Geek Speek</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome Geek Speek
        </h1>

        <p className="description">
          Press the microphone and say anything into your phone!
        </p>

        <div>
          <IconButton>
            <MicSvg />
          </IconButton>
        </div>
      </main>

      <footer>
        <p> Made with love by Businessers of Azkaban</p>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
