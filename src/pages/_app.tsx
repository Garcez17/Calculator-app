import { CalcContextProvider } from '../contexts/CalcContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <CalcContextProvider>
      <Component {...pageProps} />
    </CalcContextProvider>
  )
}

export default MyApp
