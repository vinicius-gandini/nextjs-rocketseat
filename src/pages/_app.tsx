import GLobalStyle from '../styles/GlobalStyles'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <GLobalStyle />
    <Component {...pageProps} />
    </>
  )
}
