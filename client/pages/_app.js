import 'tailwindcss/tailwind.css'
import './styles.css'
import Layout from 'components/Layout/Layout'
import { AuthProvider } from '../lib/auth.js'
import { CookiesProvider } from "react-cookie"

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <CookiesProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CookiesProvider>
    </AuthProvider>
  )
}

export default MyApp
