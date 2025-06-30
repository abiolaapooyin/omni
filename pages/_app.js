import '../styles/globals.css'
import { Inter, Poppins, IBM_Plex_Mono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '700'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })
const ibmPlexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500', '600'] })

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.className} ${inter.variable} ${poppins.variable} ${ibmPlexMono.variable}`} style={{ '--font-inter': inter.style.fontFamily, '--font-poppins': poppins.style.fontFamily, '--font-ibm-plex-mono': ibmPlexMono.style.fontFamily }}>
      <Component {...pageProps} />
    </main>
  )
}