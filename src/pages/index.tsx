import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
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
            <a
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
            </a>
          </div>
        </>}
        {user && <>
          <div>
            Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
          </div>
          <p className={inter.className}>
            {Object.keys(user).map((key, i) => {
              return <span key={i}>
                {`${key.toUpperCase()}: ${user[key]}`} <br></br>
              </span>
            })}
          </p>

          <div className={styles.grid}>
            <Link className={styles.card} href="/middleware/layout">
              <h2 className={inter.className}>
                Midleware Layout <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Page with getLayout
              </p>
            </Link>
            <Link className={styles.card} href="/middleware/layout-alt">
              <h2 className={inter.className}>
                Middleware Layout alt <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Page with getLayout
              </p>
            </Link>
            <Link className={styles.card} href="/middleware/no-layout">
              <h2 className={inter.className}>
                Middleware NoLayout <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Page without getLayout
              </p>
            </Link>
            <Link className={styles.card} href="/no-middleware/layout">
              <h2 className={inter.className}>
                No Midleware Layout <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Page with getLayout
              </p>
            </Link>
            <Link className={styles.card} href="/no-middleware/layout-alt">
              <h2 className={inter.className}>
                No Middleware Layout alt <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Page with getLayout
              </p>
            </Link>
            <Link className={styles.card} href="/no-middleware/no-layout">
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
