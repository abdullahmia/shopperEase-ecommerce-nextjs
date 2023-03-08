import Navigation from '@/components/ui/header/Navigation'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=''>
        <Navigation />
        <div>
          <h3 className=''>Home Page</h3>
        </div>
      </main>
    </>
  )
}
