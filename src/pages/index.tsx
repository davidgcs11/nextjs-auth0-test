import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { user } = useUser();

  return (
    <>
      <Head>
        <title>Auth0 Vercel test app</title>
        <meta name="description" content="Auth0 Vercel test app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {!user && <>

          <div className={styles.grid}>
            <Link
              href="/api/auth/login"
              className={styles.card}
              rel="noopener noreferrer"
            >
              <h2 className={inter.className}>
                Signin <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Authenticate first
              </p>
            </Link>
          </div>
        </>}
        {user && <>
          <div>
            Welcome {user.name}! <Link href="/api/auth/logout">Logout</Link>
          </div>
          <p className={inter.className}>
            {Object.keys(user).map((key, i) => {
              return <span key={i}>
                {`${key.toUpperCase()}: ${user[key]}`} <br></br>
              </span>
            })}
          </p>

          <div className={styles.grid}>
            <Link className={styles.card} href="/mid/layout">
              <h2 className={inter.className}>
                Midleware Layout <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Page with getLayout
              </p>
            </Link>
            <Link className={styles.card} href="/mid/layout-alt">
              <h2 className={inter.className}>
                Middleware Layout alt <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Page with getLayout
              </p>
            </Link>
            <Link className={styles.card} href="/mid/no-layout">
              <h2 className={inter.className}>
                Middleware NoLayout <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Page without getLayout
              </p>
            </Link>
            <Link className={styles.card} href="/no-mid/layout">
              <h2 className={inter.className}>
                No Midleware Layout <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Page with getLayout
              </p>
            </Link>
            <Link className={styles.card} href="/no-mid/layout-alt">
              <h2 className={inter.className}>
                No Middleware Layout alt <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Page with getLayout
              </p>
            </Link>
            <Link className={styles.card} href="/no-mid/no-layout">
              <h2 className={inter.className}>
                No Middleware NoLayout <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Page without getLayout
              </p>
            </Link>
          </div>
        </>}

      </main>
    </>
  )
}
