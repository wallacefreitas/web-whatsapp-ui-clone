import "../styles/globals.css";
import type { AppProps } from 'next/app'
import { ConversationProvider } from "../context/ConversationContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConversationProvider>
      <Component {...pageProps} />
    </ConversationProvider>
  )
}

export default MyApp
