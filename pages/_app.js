import Layout from '@/components/ui/Layout';
import '@/styles/globals.css';
import { Poppins } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({ subsets: ['latin'], weight: ["400"] })

export default function App({ Component, pageProps }) {
  return <main className={poppins.className}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </main>
}
